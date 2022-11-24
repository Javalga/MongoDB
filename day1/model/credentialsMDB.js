const mongoose = require("mongoose");

const credentialsSchema = new mongoose.Schema({
  address: String,
  phone: {
    type: Number,
    min: 100000000,
    max: 999999999
  },
  email: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("credentials", credentialsSchema)