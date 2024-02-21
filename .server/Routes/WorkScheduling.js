const router = require("express").Router();
const Report = require("../Database/WorkScheduling");
const { ObjectID } = require("bson");

// Add Report
router.post("/add_report", async (req, res) => {
  try {
    const newReport = new Report(req.body);
    const addedReport = await newReport.save();
    res.status(200).send({
      success: true,
      message: "Standup added successfully",
      addedReport,
    });
  } catch (e) {
    res.status(400).send({ success: false, errorMessage: e.message });
  }
});

// Get Reports
router.post("/get_standups", async (req, res) => {
  console.log("Request Body:", req.body);
  try {
    const { managerIds } = req.body;

    console.log("Get_Standups:", managerIds);

    if (managerIds && managerIds.length > 0) {
      const managerIDs = managerIds?.map((managerId) => ObjectID(managerId));
      const reports = await Report.aggregate([
        {
          $match: {
            managerId: { $in: managerIDs },
          },
        },
      ]);

      if (reports.length > 0) {
        res.json({
          status: 200,
          message: "The resources has been fetched",
          reports,
        });
      } else {
        res.json({
          status: 201,
          message: "Reports Not Available !",
          reports: [],
        });
      }
    } else {
      res.json({
        status: 201,
        message: "Something Went Wrong !",
        reports: [],
      });
    }
  } catch (e) {
    res.status(400).send({ success: false, errorMessage: e.message });
  }
});

// Edit Report
router.put("/edit_report/:id", async (req, res) => {
  try {
    const reportId = req.params.id;
    const updatedReport = await Report.findByIdAndUpdate(reportId, req.body, {
      new: true,
    });
    if (!updatedReport) {
      throw new Error("Report not found");
    }
    res.status(200).send({
      success: true,
      message: "Report updated successfully",
      updatedReport,
    });
  } catch (e) {
    res.status(400).send({ success: false, errorMessage: e.message });
  }
});

// Delete Report
router.delete("/delete_report/:id", async (req, res) => {
  try {
    const reportId = req.params.id;
    const deletedReport = await Report.findByIdAndDelete(reportId);
    if (!deletedReport) {
      throw new Error("Report not found");
    }
    res
      .status(200)
      .send({ success: true, message: "Report deleted successfully" });
  } catch (e) {
    res.status(400).send({ success: false, errorMessage: e.message });
  }
});

module.exports = router;
