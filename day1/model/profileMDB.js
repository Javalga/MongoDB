const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: String,
  surname: String,
  dateOfBirth: Date,
  comments: [String],
  rol: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("profile", profileSchema)