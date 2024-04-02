import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Col, Card, CardBody, CardHeader, Label, Input } from "reactstrap";

//moment
import moment, { utc } from "moment";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import Select from "react-select";
import jwt_decode from "jwt-decode";
import axios from "../api/axios";

const Calender_availabilty = () => {
  const ADD_AVAILABILITY = "/calender/set-availability";
  const GET_AVAILABILITY = "/calender/get-availability";

  const decode = jwt_decode(window.localStorage.getItem("accessToken"));

  const [daysAvailability, setDayAvailability] = useState([
    {
      day: "Sun",
      available: false,
      slots: [
        {
          startTime: "9:00 AM",
          endTime: "5:00 PM",
        },
      ],
    },
    {
      day: "Mon",
      available: false,
      slots: [
        {
          startTime: "9:00 AM",
          endTime: "5:00 PM",
        },
      ],
    },
    {
      day: "Tue",
      available: false,
      slots: [
        {
          startTime: "9:00 AM",
          endTime: "5:00 PM",
        },
      ],
    },
    {
      day: "Wed",
      available: false,
      slots: [
        {
          startTime: "9:00 AM",
          endTime: "5:00 PM",
        },
      ],
    },
    {
      day: "Thu",
      available: false,
      slots: [
        {
          startTime: "9:00 AM",
          endTime: "5:00 PM",
        },
      ],
    },
    {
      day: "Fri",
      available: false,
      slots: [
        {
          startTime: "9:00 AM",
          endTime: "5:00 PM",
        },
      ],
    },
    {
      day: "Sat",
      available: false,
      slots: [
        {
          startTime: "9:00 AM",
          endTime: "5:00 PM",
        },
      ],
    },
  ]);

  const [splitTime, setSplitTime] = useState([]);

  const [availableError, setAvailableError] = useState("");

  const history = useHistory();

  const time = [];

  const calculateTime = async (i) => {
    return new Promise(function (resolve, reject) {
      let addMoment = moment("00:00", "HH:mm");
      for (let j = 0; j < 96; j++) {
        time.push(addMoment.format("LT"));
        addMoment.add(15, "m");
      }

      resolve();
    });
  };

  const convertToLocalTime = (utcTime) => {
    const utcDate = new Date(`1970-01-01T${utcTime}`);
    const localTime = utcDate.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
    return localTime.toUpperCase().trim();
  };

  const getManagerAvailability = async () => {
    try {
      const response = await axios.get(
        `${GET_AVAILABILITY}/?manager_id=${decode.id}`
      );

      if (response.data.status == 200) {
        const convertedAvailability =
          response.data.ManagerAvailability.daysOfWeekAvailability.map(
            (day) => ({
              ...day,
              slots: day.slots.map((slot) => ({
                startTime: convertToLocalTime(slot.startTime),
                endTime: convertToLocalTime(slot.endTime),
              })),
            })
          );

        setDayAvailability(convertedAvailability);
      }
    } catch (error) {
      console.log(error); // TODO proper error
    }
  };

  useEffect(() => {
    getManagerAvailability();

    calculateTime().then(() => {
      setSplitTime(time);
    });
  }, []);

  // const convertToUTC = (localTime) => {
  //   const currentDate = new Date();

  //   const year = currentDate.getFullYear();
  //   const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  //   const day = String(currentDate.getDate()).padStart(2, "0");

  //   const formattedDate = `${year}-${month}-${day}`;
  //   const dateTimeString = `${formattedDate} ${localTime}`;

  //   const dateTimeObject = new Date(dateTimeString);

  //   if (!isNaN(dateTimeObject)) {
  //     const utcString = dateTimeObject.toISOString();
  //     const utcTimePart = utcString.split("T")[1];
  //     return utcTimePart;
  //   }
  // };

  const convertToUTC = (localTime) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    const dateTimeString = `${formattedDate} ${localTime}`;
    const dateFOrmat = dateTimeString.replace(/-/g, "/");

    const dateTimeObject = new Date(dateFOrmat);

    return !isNaN(dateTimeObject)
      ? dateTimeObject.toISOString().split("T")[1]
      : undefined;
  };

  const submit = async (e) => {
    e.preventDefault();
    let err = true;
    daysAvailability.forEach((dat) => {
      dat.slots.forEach((data) => {
        var startDateTime = new Date("1970/01/01 " + data.startTime);
        var endDateTime = new Date("1970/01/01 " + data.endTime);

        // const startTimeUtc = convertToUTC(data.startTime);
        // const endTimeUtc = convertToUTC(data.endTime);

        // const dateStart = new Date(`1970-01-01T${startTimeUtc}`).getTime();
        // const dateEnd = new Date(`1970-01-01T${endTimeUtc}`).getTime();

        console.log({ startDateTime });
        console.log({ endDateTime });
        // Perform time zone-aware validations
        if (endDateTime <= startDateTime) {
          err = false;
          toast(`End time should be greater than start time for ${dat.day}`);
        }

        // Perform time zone-aware validations
        // if (moment(dateEnd).isSameOrBefore(dateStart)) {
        //   err = false;
        //   toast(`End time should be greater than start time for ${dat.day}`);
        // }
      });
    });

    if (err) {
      var submited = false;
      try {
        let role = decode.role;

        if (role == "manager") {
          role = "PropertyManager";
        } else if (role == "technical staff") {
          role = "technicalStaff";
        } else if (role == "company") {
          role = "company";
        }

        const convertedAvailability = daysAvailability.map((day) => {
          return {
            ...day,
            slots: day.available
              ? day.slots.map((slot) => ({
                  startTime: convertToUTC(slot.startTime),
                  endTime: convertToUTC(slot.endTime),
                }))
              : [],
          };
        });

        const response = await axios.post(ADD_AVAILABILITY, {
          manager_id: decode.id,
          daysOfWeekAvailability: convertedAvailability,
          role: role,
        });

        if (response.data.success) {
          submited = true;
        } else {
          setAvailableError("Events are already booked on changed days");
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (submited) {
          history.push("/apps-calendar");
          // document.querySelector(".alert").alert()
        }
      }
    }
  };

  const changeAvailability = (
    i,
    type,
    data,
    j = 0,
    defaultValues = [
      {
        startTime: "9:00 AM",
        endTime: "5:00 PM",
      },
    ]
  ) => {
    let changedData = daysAvailability.map((item, index) => {
      if (i == index) {
        if (type == "available") {
          return {
            ...item,
            available: data.target.checked,
            slots: defaultValues,
          };
        } else if (type == "startTime") {
          item.slots[j].startTime = data;
          return {
            ...item,
          };
        } else if (type == "endTime") {
          item.slots[j].endTime = data;

          return {
            ...item,
          };
        } else if (type == "removeslot") {
          item.slots.splice(j, 1);
          return {
            ...item,
          };
        } else if (type == "addslot") {
          item.slots.push({
            startTime: "9:00 AM",
            endTime: "5:00 PM",
          });
          return {
            ...item,
          };
        }
      } else {
        return item;
      }
    });

    console.log("ChangedData:", changedData);

    setDayAvailability(changedData);
  };

  console.log("SplitTime:", splitTime);

  const options = splitTime.map((startTime) => ({
    value: startTime,
    label: startTime,
  }));

  console.log(options);

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title> Rentdigicare | Availability </title>
        </MetaTags>
        <div className="container-fluid">
          <ToastContainer />
          <Breadcrumbs title="Home" breadcrumbItem="Availability" />

          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="mb">
                        <h5 className="card-title">
                          Set your weekly hours
                          <span className="text-muted fw-normal ms-2"></span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  {availableError && (
                    <p style={{ color: "red" }}>{availableError}</p>
                  )}

                  {daysAvailability.map((dayRow, i) => {
                    console.log(dayRow, "dayRow.available");
                    return (
                      <div className="row ">
                        <div className="col-md-2  mt-1">
                          <Input
                            id={`day`}
                            type="checkbox"
                            checked={dayRow.available}
                            onChange={(e) => {
                              changeAvailability(i, "available", e, 0);
                            }}
                          />
                          <Label
                            htmlFor="day"
                            className="form-Label"
                            style={{ marginLeft: "10px" }}
                          >
                            <b>{dayRow.day}</b>
                          </Label>
                        </div>
                        {dayRow.available ? (
                          <div className="row col-md-8">
                            {dayRow.slots.map((slot, j) => {
                              return (
                                <div className="row align-items-center mb-3">
                                  <div className="col-md-4">
                                    <Select
                                      className=""
                                      name="Start Time"
                                      value={{
                                        value: slot.startTime
                                          .toUpperCase()
                                          .trim(),
                                        label: slot.startTime,
                                      }}
                                      onChange={(selectedOption) => {
                                        changeAvailability(
                                          i,
                                          "startTime",
                                          selectedOption.value,
                                          j
                                        );
                                      }}
                                      options={options}
                                    />
                                  </div>

                                  <div className="col-md-4">
                                    <Select
                                      className=""
                                      name="End Time"
                                      value={{
                                        value: slot.endTime
                                          .toUpperCase()
                                          .trim(),
                                        label: slot.endTime,
                                      }}
                                      onChange={(selectedOption) => {
                                        changeAvailability(
                                          i,
                                          "endTime",
                                          selectedOption.value,
                                          j
                                        );
                                      }}
                                      options={options}
                                    />
                                  </div>

                                  <div className="col-md-4">
                                    {j == 0 ? (
                                      <button
                                        onClick={(e) => {
                                          changeAvailability(
                                            i,
                                            "addslot",
                                            0,
                                            j
                                          );
                                        }}
                                      >
                                        +
                                      </button>
                                    ) : (
                                      <button
                                        onClick={(e) => {
                                          changeAvailability(
                                            i,
                                            "removeslot",
                                            0,
                                            j
                                          );
                                        }}
                                      >
                                        -
                                      </button>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="col-md-4 mt-1 mb-3">
                            <Label
                              htmlFor="day"
                              className="form-Label"
                              style={{ marginLeft: "10px" }}
                            >
                              <b>unavailable</b>
                            </Label>
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <div className="col-md-12 d-flex flex-wrap align-items-center justify-content-center">
                    <button
                      className="btn btn-primary mo-mb-2 mr-10"
                      onClick={(e) => {
                        submit(e);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calender_availabilty;