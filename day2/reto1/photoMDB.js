let mongoose = require('mongoose')

let photoSchema = new mongoose.Schema({
  user: String,
  url: String,
  title: String,
  description: String,
});

module.exports = mongoose.model("photo", photoSchema)

