const router = require("express").Router();
const logger = require("../Logger/LoggerFactory").getProductionLogger();
const { google } = require("googleapis");
const moment = require("moment");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const {
  GOOGLE_CALENDAR_ID,
  GOOGLE_CALENDAR_CREDANTIALS,
} = require("../config.js");
require("dotenv").config();

const CREDENTIALS_JSON = {
  web: {
    client_id:
      "1049702539701-75o0mkbkh647bret6dn7lsh65g60n00m.apps.googleusercontent.com",
    project_id: "weighty-smoke-412317",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: "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",
    redirect_uris: [
      "http://localhost:3000/dashboard",
      "https://accounts.google.com/o/oauth2",
      "http://localhost:9000/calender/add-event",
      "https://app.rentdigicare.com/calender/add-event",
      "https://www.rentdigicare.com:9000/calender/add-event",
    ],
    javascript_origins: [
      "http://localhost:3000",
      "https://accounts.google.com",
      "https://app.rentdigicare.com",
      "https://www.app.rentdigicare.com",
    ],
  },
};

const SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/userinfo.email",
];

const auth2Client = new google.auth.OAuth2(
  CREDENTIALS_JSON.web.client_id,
  CREDENTIALS_JSON.web.client_secret,
  CREDENTIALS_JSON.web.redirect_uris[2]
);

// importing database models
const Manager = require("../Database/PropertyManager");
const Ticket = require("../Database/Ticket");
const ManagerAvailability = require("../Database/calender_availability");
const Events = require("../Database/events");
const Calender_events = require("../Database/calender_events");
const Property = require("../Database/Property");
const insertEvents = require("../utils/GoogleCalendar");
const CalendarReasonTypes = require("../Database/CalendarReasonTypes");
const PropertyManager = require("../Database/PropertyManager");
const ObjectId = require("mongodb").ObjectId;

const AuthEmail = require("../Database/AuthEmail.js");
const CalendarToken = require("../Database/CalendarToken.js");

const eventUpdate = async (accessToken, eventId, event) => {
  const calendar = google.calendar("v3");

  auth2Client.setCredentials({ access_token: accessToken });

  calendar.events.patch(
    {
      auth: auth2Client,
      calendarId: "primary",
      eventId: eventId,
      resource: event,
    },
    function (err, event) {
      if (err) {
        console.log(
          "There was an error contacting the Calendar service: " + err
        );
        return;
      }
      console.log("Event created: %s", event.data);
    }
  );
};

function authToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

router.post("/report", authToken, async (req, res) => {
  try {
    const { companyDomain } = req.body;

    const appointmentsReport = await PropertyManager.aggregate([
      {
        $match: {
          companyAssigned: companyDomain,
        },
      },
      {
        $lookup: {
          from: "properties",
          let: { propertyIds: "$properties" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ["$_id", "$$propertyIds"],
                },
              },
            },
          ],
          as: "propertiesData",
        },
      },
      {
        $lookup: {
          from: "manager_availabilities",
          let: { managerId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$eventAssignedTo", "$$managerId"] },
              },
            },
          ],
          as: "managerAvailabilities",
        },
      },
      {
        $lookup: {
          from: "user_appointments",
          let: { managerId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$eventAssignedTo", "$$managerId"] },
              },
            },
          ],
          as: "userAppointments",
        },
      },
      {
        $project: {
          managerId: "$_id",
          managerName: { $concat: ["$firstname", " ", "$lastname"] },
          email: 1,
          mobile: 1,
          managerAvailabilities: {
            $map: {
              input: "$managerAvailabilities",
              as: "managerAvailability",
              in: {
                daysOfWeekAvailability:
                  "$$managerAvailability.daysOfWeekAvailability",
              },
            },
          },
          propertiesData: {
            $map: {
              input: "$propertiesData",
              as: "property",
              in: {
                propertyId: "$$property._id",
                name: "$$property.title",
              },
            },
          },
          userAppointments: {
            $map: {
              input: "$userAppointments",
              as: "userAppointment",
              in: {
                date: "$$userAppointment.date",
                propertyId: "$$userAppointment.propertyId",
                reasonId: "$$userAppointment.reasonId",
                status: "$$userAppointment.status",
              },
            },
          },
        },
      },
      {
        $addFields: {
          totalAppointments: { $ifNull: [{ $size: "$userAppointments" }, 0] },
        },
      },
      {
        $unwind: {
          path: "$userAppointments",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $group: {
          _id: {
            managerId: "$managerId",
            propertyId: "$userAppointments.propertyId",
          },
          managerName: { $first: "$managerName" },
          email: { $first: "$email" },
          mobile: { $first: "$mobile" },
          managerAvailabilities: { $first: "$managerAvailabilities" },
          propertiesData: { $first: "$propertiesData" },
          appointments: { $sum: 1 },
          totalBooked: {
            $sum: {
              $cond: [{ $eq: ["$userAppointments.status", "booked"] }, 1, 0],
            },
          },
          totalPending: {
            $sum: {
              $cond: [{ $eq: ["$userAppointments.status", "pending"] }, 1, 0],
            },
          },
          totalCanceled: {
            $sum: {
              $cond: [{ $eq: ["$userAppointments.status", "canceled"] }, 1, 0],
            },
          },
          userAppointments: {
            $push: "$userAppointments",
          },
        },
      },
      {
        $group: {
          _id: "$_id.managerId",
          managerName: { $first: "$managerName" },
          email: { $first: "$email" },
          mobile: { $first: "$mobile" },
          managerAvailabilities: { $first: "$managerAvailabilities" },
          propertiesData: { $first: "$propertiesData" },
          appointmentsData: {
            $push: {
              propertyId: "$_id.propertyId",
              appointments: "$appointments",
              totalBooked: "$totalBooked",
              totalPending: "$totalPending",
              totalCanceled: "$totalCanceled",
              userAppointments: "$userAppointments",
            },
          },
          totalAppointments: { $sum: "$appointments" },
        },
      },
      {
        $project: {
          _id: 0,
          managerId: "$_id",
          managerName: 1,
          email: 1,
          mobile: 1,
          managerAvailabilities: 1,
          propertiesData: 1,
          appointmentsData: {
            $map: {
              input: "$appointmentsData",
              as: "appointment",
              in: {
                propertyId: "$$appointment.propertyId",
                appointments: {
                  $cond: [
                    {
                      $eq: [{ $ifNull: ["$$appointment.propertyId", []] }, []],
                    },
                    0,
                    "$$appointment.appointments",
                  ],
                },
                totalBooked: "$$appointment.totalBooked",
                totalPending: "$$appointment.totalPending",
                totalCanceled: "$$appointment.totalCanceled",
                userAppointments: "$$appointment.userAppointments",
              },
            },
          },
          totalAppointments: 1,
        },
      },
      {
        $sort: {
          managerName: 1,
        },
      },
    ]);

    res.status(200).json({
      status: 200,
      message: "The resources have been fetched",
      appointmentsReport,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, message: "Something Went Wrong", appointments: [] });
  }
});

router.post("/auth", async (req, res) => {
  const existingEvent = await Events.findOne({ event_id: req.body.event_id });
  const eventData = req.body;

  if (existingEvent) {
    const updatedEvent = await Events.findOneAndUpdate(
      { event_id: req.body.event_id },
      eventData,
      { new: true }
    );
  } else {
    const newEvent = await Events.create(eventData);
    console.log("Newly Created Event Data:", newEvent);
  }

  const authUrl = auth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent",
  });
  res.status(200).send(authUrl);
});

// Get all the Companies
router.post("/", async (req, res) => {
  try {
    let ticketList = [];

    let events = [];

    let query = {};

    let managerId = req.body.manager_id;

    if (!Array.isArray(managerId)) {
      managerId = [managerId];
    }

    let eventQuery = {};

    if (req.body.propertyID) {
      eventQuery.propertyId = req.body.propertyID;
      query = {
        propertyID: req.body.propertyID,
      };
    }

    if (req.body.role == "manager") {
      const manager = await Manager.findOne(
        { _id: { $in: managerId } },
        "properties"
      );

      if (manager?.properties) {
        query = {
          propertyID: { $in: manager.properties },
        };
      }
    } else if (
      req.body.role == "technical staff" ||
      req.body.role == "vendor"
    ) {
      query = {
        assignedTo: { $in: managerId },
      };
    } else if (req.body.role == "property") {
      const property = await Property.findOne({ _id: req.body.propertyID });
      managerId = property?.managers?.[0];
    }

    eventQuery.eventAssignedTo = { $in: managerId };

    console.log(query);

    if (Object.keys(query).length > 0) {
      ticketList = await Ticket.find(query)
        .populate("assignVendor")
        .populate("assignedTo")
        .populate("confirmedQuote")
        .populate("confirmedQuote")
        .populate("assignSpecificVendors")
        .populate("propertyManagerId")
        .populate({
          path: "quotedVendorTickets",
          populate: {
            path: "vendorID",
            model: "vendor",
            select: {
              _id: 1,
              agency_name: 1,
              first_name: 1,
              last_name: 1,
              role: 1,
              primaryID: 1,
            },
          },
        });
    }

    if (Object.keys(eventQuery).length > 0) {
      events = await Calender_events.find(eventQuery);
    }

    res.json({
      status: 200,
      message: "The resources has been fetched",
      ticketList: ticketList,
      events: events,
    });
  } catch (error) {
    logger.error(error);
    console.log(error);
    res.json({
      status: 500,
      message: "Something Went Wrong !",
    });
  }
});

router.post("/customer_tickets", async (req, res) => {
  try {
    const ticketList = await Ticket.find({ createdByid: req.body.customer_id });

    res.json({
      status: 200,
      message: "The resources has been fetched",
      ticketList: ticketList,
    });
  } catch (error) {
    logger.error(error);
    console.log(error);
    res.json({
      status: 500,
      message: "Something Went Wrong !",
    });
  }
});

router.post("/set-availability", async (req, res) => {
  try {
    const upComingEvents = await Calender_events.find({
      eventAssignedTo: req.body.manager_id,
      eventDate: {
        $gte: moment(),
      },
    });

    let promises = [];

    let OverRidingDates = [];

    for (var ticket in upComingEvents) {
      promises.push(checkAvailability(upComingEvents[ticket]));
    }

    function checkAvailability(ticket) {
      return new Promise(function (resolve, reject) {
        const date = moment(ticket.eventDate);

        console.log(ticket);

        let dayIndex = date.isoWeekday();

        if (dayIndex == 7) {
          dayIndex = 0;
        }

        const newAvailability = req.body.daysOfWeekAvailability[dayIndex];

        console.log(req.body.daysOfWeekAvailability[dayIndex]);

        let inAvailableTime = false;

        for (let l = 0; l < newAvailability.slots.length; l++) {
          let available =
            moment(newAvailability.slots[l].startTime, ["h:mm A"]) <=
              moment(ticket.startTime, ["h:mm A"]) &&
            moment(newAvailability.slots[l].endTime, ["h:mm A"]) >=
              moment(ticket.endTime, ["h:mm A"]);

          if (available) {
            inAvailableTime = true;
            break;
          }
        }

        if (newAvailability.available && inAvailableTime) {
          console.log("Yes");
        } else {
          console.log("No");
          OverRidingDates.push(ticket);
        }

        resolve();
      });
    }

    Promise.all(promises)
      .then(async function (data) {
        if (OverRidingDates.length > 0) {
          res.json({
            status: 200,
            success: false,
            message: "The resources has been fetched",
            OverRidingDates: OverRidingDates,
          });
        } else {
          const availability = await ManagerAvailability.findOneAndUpdate(
            { eventAssignedTo: req.body.manager_id },
            {
              assignedToType: req.body.role,
              daysOfWeekAvailability: req.body.daysOfWeekAvailability,
            },
            { upsert: true }
          );

          res.json({
            status: 200,
            success: true,
            message: "The resources has been fetched",
            ManagerAvailability: availability,
          });
        }
      })
      .catch(function (err) {
        logger.error(error);
        console.log(error);
        res.json({
          success: false,
          message: "Something Went Wrong !",
        });
      });
  } catch (error) {
    logger.error(error);
    console.log(error);
    res.json({
      status: 500,
      message: "Something Went Wrong !",
    });
  }
});

router.get("/get-availability", async (req, res) => {
  try {
    console.log("req.query.manager_id: ", req.query.manager_id);
    if (req.query.manager_id) {
      const availability = await ManagerAvailability.findOne({
        eventAssignedTo: req.query.manager_id,
      });

      res.json({
        status: 200,
        message: "The resources has been fetched",
        ManagerAvailability: availability,
      });
    } else {
      res.json({
        status: 201,
        message: "Something Went Wrong !",
        ManagerAvailability: [],
      });
    }
  } catch (error) {
    logger.error(error);
    console.log(error);
    res.json({
      status: 500,
      message: "Something Went Wrong !",
    });
  }
});

router.post("/googleAuth", async (req, res) => {
  const userId = mongoose.Types.ObjectId(req.body.userId);
  const existingUserId = await AuthEmail.findOne({ userId });
  const emailData = req.body;

  if (existingUserId) {
    await AuthEmail.findOneAndUpdate({ userId }, emailData, {
      new: true,
    });
  } else {
    await AuthEmail.create(emailData);
  }

  const authUrl = auth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent",
  });
  res.status(200).send(authUrl);
});

const storeAccessToken = async (authEmail, access_token, expires_in) => {
  try {
    const existingToken = await CalendarToken.findOne({
      userId: authEmail.userId,
    });

    if (existingToken) {
      await CalendarToken.findOneAndUpdate(
        { userId: authEmail.userId },
        {
          authEmail: authEmail.authEmail,
          accessToken: access_token,
          expiresAt: expires_in,
        },
        { new: true }
      );
    } else {
      await CalendarToken.create({
        userId: authEmail.userId,
        authEmail: authEmail.authEmail,
        companyId: authEmail.companyId,
        role: authEmail.role,
        firstname: authEmail.firstname,
        lastname: authEmail.lastname,
        accessToken: access_token,
        expiresAt: expires_in,
      });
    }
  } catch (error) {
    console.error("Error storing access token:", error);
    throw error;
  }
};

router.get("/add-event", async (req, res) => {
  try {
    const { code } = req.query;

    const { tokens } = await auth2Client.getToken(code);
    const idToken = tokens.id_token;
    const decodedToken = jwt.decode(idToken, { complete: true });

    const email = decodedToken.payload.email;
    const authEmail = await AuthEmail.findOne({ authEmail: email });

    if (authEmail) {
      auth2Client.setCredentials(tokens);
      await storeAccessToken(
        authEmail,
        tokens.access_token,
        tokens.expiry_date
      );

      const responseData = {
        message: "Synced successfully",
        status: 200,
      };

      const encodedResponse = encodeURIComponent(JSON.stringify(responseData));

      res.redirect(
        // `${process.env.DOMAIN}/setting?response=${encodedResponse}`
        `http://localhost:3000/setting?response=${encodedResponse}`
      );
    } else {
      const responseData = {
        message: "Invalid Auth Email",
        status: 400,
      };

      const encodedResponse = encodeURIComponent(JSON.stringify(responseData));

      res.redirect(
        // `${process.env.DOMAIN}/setting?response=${encodedResponse}`
        `http://localhost:3000/setting?response=${encodedResponse}`
      );
    }
  } catch (error) {
    console.error("Error retrieving access token:", error);
    res.status(500).send("Error retrieving access token.");
  }
});

const createGoogleCalendarEvent = async (accessToken, eventData) => {
  try {
    const calendar = google.calendar("v3");

    auth2Client.setCredentials({ access_token: accessToken });

    const response = await calendar.events.insert({
      auth: auth2Client,
      calendarId: "primary",
      sendUpdates: "all",
      sendNotifications: true,
      resource: eventData,
    });

    return response.data.htmlLink;
  } catch (error) {
    console.error("Error creating Google Calendar event:", error);
    throw error;
  }
};

router.post("/create-event", async (req, res) => {
  try {
    const userId = mongoose.Types.ObjectId(req.body.userId);
    const existingToken = await CalendarToken.findOne({ userId });

    if (existingToken) {
      const managerAvailability = await ManagerAvailability.findOne({
        eventAssignedTo: req.body.userId,
      });

      const dayAvailability = managerAvailability.daysOfWeekAvailability.find(
        (dayItem) => dayItem.day === req.body.day
      );

      if (!dayAvailability || !dayAvailability.available) {
        return res.json({
          status: 500,
          message: "Manager not available on the specified day.",
        });
      }

      const bookedEvents = await Calender_events.find({
        eventDate: req.body.eventDate,
        eventAssignedTo: req.body.userId,
      });

      const isSlotBooked = () =>
        bookedEvents.some((booked) => {
          const eventStartTime = Math.ceil(
            moment(req.body.StartTime, "h:mm A").valueOf() / 1000
          );

          const eventEndTime = Math.ceil(
            moment(req.body.endTime, "h:mm A").valueOf() / 1000
          );

          const bookedStartTime = Math.ceil(
            moment(booked.startTime, "h:mm A").valueOf() / 1000
          );

          const bookedEndTime = Math.ceil(
            moment(booked.endTime, "h:mm A").valueOf() / 1000
          );

          return (
            eventStartTime === bookedStartTime && eventEndTime === bookedEndTime
          );
        });

      if (bookedEvents.length > 0 && isSlotBooked()) {
        res.status(400).send({ message: "Slot is already booked" });
      }

      let eve;
      const eventData = {
        eventId: req.body.event_id,
        eventAssignedTo: req.body.userId,
        assignedToType: req.body.role,
        description: req.body.description,
        eventDate: req.body.eventDate,
        startTime: req.body.StartTime,
        endTime: req.body.endTime,
        createdBy: req.body.createdBy,
        type: req.body.type,
        title: req.body.title,
        propertyId: req.body.propertyId,
        companyDomain: req.body.companyDomain,
      };

      // Check if event with the provided ID exists
      const existingEvent = await Calender_events.findOne({
        eventId: req.body.event_id,
      });

      console.log({ existingEvent });

      if (existingEvent) {
        eve = await Calender_events.findOneAndUpdate(
          { eventId: req.body.event_id },
          eventData,
          { new: true }
        );
        console.log("Updated event in create-event:", eve);
        const updateCalenderEvent = {
          summary: req.body.title,
          description: req.body.description,
          start: {
            dateTime: moment(req.body.eventDate + "T" + req.body.StartTime, [
              "YYYY-MM-DDTHH:mm",
            ]).toISOString(),
            timeZone: "America/Denver",
          },
          end: {
            dateTime: moment(req.body.eventDate + "T" + req.body.endTime, [
              "YYYY-MM-DDTHH:mm",
            ]).toISOString(),
            timeZone: "America/Denver",
          },
          attendees: req.body.authEmail,
          reminders: req.body.reminders || {
            useDefault: false,
            overrides: [
              {
                method: "email",
                minutes: 240,
              },
              {
                method: "popup",
                minutes: 40,
              },
            ],
          },
        };
        /*  await eventUpdate(
          existingToken.accessToken,
          existingEvent.eventId,
          updateCalenderEvent
        ); */
        // res.status(200).send({ message: "Successfully Updated" });
      } else {
        // Create a new event
        eve = await Calender_events.create(eventData);

        console.table({
          EventDate: req.body.eventDate,
          StartTime: req.body.StartTime,
          EndTime: req.body.endTime,
        });
        const startTime = moment(req.body.eventDate + " " + req.body.StartTime, "YYYY-MM-DD h:mm A");
        const endTime = moment(req.body.eventDate + " " + req.body.endTime, "YYYY-MM-DD h:mm A");
        
      
        const newCalenderEvent = {
          id: eve._id,
          summary: req.body.title,
          description: req.body.description,
          start: {
            dateTime: startTime.tz('America/Denver').toISOString(),
            timeZone: "America/Denver",
          },
          end: {
            dateTime: endTime.tz('America/Denver').toISOString(),
            timeZone: "America/Denver",
          },
          attendees: req.body.authEmail,
          reminders: {
            useDefault: false,
            overrides: [
              {
                method: "email",
                minutes: 240,
              },
              {
                method: "popup",
                minutes: 40,
              },
            ],
          },
        };

        console.log("New Calender Event:", newCalenderEvent);

        const eventLink = await createGoogleCalendarEvent(
          existingToken.accessToken,
          newCalenderEvent
        );
        res
          .status(200)
          .send({ message: "Event created successfully", eventLink });
      }
    } else {
      res.status(400).send({ message: "Access token not found for the user" });
    }
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).send({ error: "Error creating event" });
  }
});

router.post("/getExpirationTime/:userId", async (req, res) => {
  try {
    const userId = ObjectId(req.params.userId);
    const token = await CalendarToken.findOne({ userId });
    res
      .status(200)
      .send({ message: "Expiration Time found successfully", token });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/get-todays-event", async (req, res) => {
  try {
    let BookedEvents = await Calender_events.find({
      eventDate: req.body.eventDate,
      eventAssignedTo: req.body.manager_id,
    });

    res.status(200).send({
      success: true,
      message: "Successfully fetched",
      status: 200,
      BookedEvents: BookedEvents,
    });
  } catch (e) {
    console.log(e);
    res.status(200).send({
      success: false,
      message: e.details || "Something went wrong",
      status: 202,
    });
  }
});

router.post("/delete-event", async (req, res) => {
  try {
    let deleted = await Calender_events.find({ _id: req.body.event_id })
      .remove()
      .exec();

    var params = {
      auth: auth2Client,
      calendarId: "primary",
      eventId: req.body.event_id,
    };

    // const calendar = google.calendar({ version: "v3", auth });

    calendar.events.delete(params, function (err) {
      if (err) {
        console.log("The API returned an error: " + err);
        return;
      }
      console.log("Event deleted.");
    });

    res
      .status(200)
      .send({ success: true, message: "Successfully Updated", status: 200 });
  } catch (e) {
    console.log(e);
    res.status(200).send({
      success: false,
      message: e.details || "Something went wrong",
      status: 202,
    });
  }
});

router.post("/reason/add", async (req, res) => {
  if (!req.body.companyID) {
    return res.status(400).json({ message: "Missing companyID field" });
  }
  if (!req.body.reasonType) {
    return res.status(400).json({ message: "Missing reasonType field" });
  }
  try {
    const { companyID, reasonType, color } = req.body;
    const reason = await CalendarReasonTypes.findOne({
      companyId: ObjectId(companyID),
      reasonType,
    });

    if (reason) {
      return res.json({
        status: 201,
        message: "Reason Type already exists for this company",
      });
    }

    await CalendarReasonTypes.create({ companyId: companyID, reasonType });
    res.json({ status: 200, message: "Reason added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

router.put("/reason/update", async (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({ message: "Missing reason id field" });
  }
  if (!req.body.reasonType) {
    return res.status(400).json({ message: "Missing reasonType field" });
  }
  try {
    const { id, reasonType } = req.body;
    console.log(id, reasonType, "SDDDD");
    const reason = await CalendarReasonTypes.findOne({ _id: ObjectId(id) });
    if (!reason) {
      res.status(500).json({ message: "Reason not found" });
    }
    console.log(reason);
    await CalendarReasonTypes.findOneAndUpdate(
      { _id: ObjectId(id) },
      { reasonType },
      { new: true }
    );
    res.json({ status: 200, message: "Reason updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

router.delete("/reason/delete", async (req, res) => {
  if (!req.query.id) {
    return res.status(400).json({ message: "Missing reason field" });
  }
  try {
    const { id } = req.query;
    const reason = await CalendarReasonTypes.findOne({ _id: ObjectId(id) });
    if (!reason) {
      res.status(500).json({ message: "Reason not found" });
    }
    await CalendarReasonTypes.findOneAndDelete({ _id: ObjectId(id) });
    res.json({ status: 200, message: "Reason deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/reason/get", async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    const filter = {};
    if (req.query.companyID) {
      filter.companyId = ObjectId(req.query.companyID);
    }
    if (
      endIndex <
      (await CalendarReasonTypes.find(filter).countDocuments().exec())
    ) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    results.reasons = await CalendarReasonTypes.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(startIndex)
      .exec();
    results.total = reasons = await CalendarReasonTypes.find(
      filter
    ).countDocuments();
    res.json({ status: 200, results, message: "Reasons fetched successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
