const mongoose = require("mongoose");

const Complaint = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    complaintType: { type: String, required: true },
    address: { type: String, required: true },
    mobileNumber: { type: String, required: true },
  },
  { collection: "complaint-data" }
);

const model = mongoose.model("ComplaintData", Complaint);

module.exports = model;
