const mongoose = require("mongoose");

const authEmailSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    authEmail: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      require: true,
    },  
    lastname: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AuthEmail", authEmailSchema);
