const router = require("express").Router();

const AppointmentStatusType = require("../Database/CompanyAppointmentStatus")

// Get all the Companies
router.post("/addstatustype", /*authToken,*/ async (req, res) => {
    try {
        const newAppStatus = await AppointmentStatusType.create({
          company_id: req.body.company_id,
          status: req.body.appointment_status_type,
        });
        res.json({
          status: 200,
          message: "The resources has been fetched",
          appointment_status_type: newAppStatus,
        });
    } catch (error) {
        // logger.error(error)
        res.json({
            status: 201,
            message: error.message
        })
    }

});


router.post("/editstatustype", /*authToken,*/ async (req, res) => {
    try {
        const editRequestType = await AppointmentStatusType.findOneAndUpdate(
          { _id: req.body.id },
          {
            request_type: req.body.request_type,
          }
        );
        res.json({
            status: 200,
            message: "The resources has been fetched",
            requestType: editRequestType
        })
    } catch (error) {
        // logger.error(error)
        res.json({
            status: 201,
            message: "Something Went Wrong !"
        })
    }
});


router.post("/delete", /*authToken,*/ async (req, res) => {
    try {
        const deleted = await AppointmentStatusType.find({
          _id: req.body.id,
        }).remove();
        res.json({
            status: 200,
            message: "The resources has been fetched",
            requestType: deleted
        })
    } catch (error) {
        // logger.error(error)
        res.json({
            status: 201,
            message: "Something Went Wrong !"
        })
    }

});


router.post("/getStatus", /*authToken,*/ async (req, res) => {
    try {
        const appointmentStatus = await AppointmentStatusType.find({
          company_id: req.body.company_id,
        });
        res.json({
          status: 200,
          message: "The resources has been fetched",
          appointmentStatus,
        });
    } catch (error) {
        res.json({
            status: 201,
            message: "Something Went Wrong !"
        })
    }
});

module.exports = router
