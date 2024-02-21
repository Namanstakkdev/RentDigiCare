const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      enum: [
        "Appointments Hour Reminder",
        "Appointments Day Reminder",
        "Resident applications",
        "Maintenance Ticket",
      ],
      required: true,
    },
    recipients: {
      type: [String],
      enum: [
        "Company User",
        "Manager",
        "Technical Staff",
        "User",
      ],
      required: true,
    },
    interval: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reminder", ReminderSchema);
