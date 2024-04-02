const mongoose = require("mongoose");

const CompanyAppointmentStatus = new mongoose.Schema(
    {
        company_id: {
            type: mongoose.Schema.ObjectId, ref: 'company'
        },
        status: {
            type: "string"
        },
        createdAt: {
            type: Date,
            default: () => Date.now()
        }
    },

);

module.exports = mongoose.model(
  "company_appointment_status",
  CompanyAppointmentStatus
);
