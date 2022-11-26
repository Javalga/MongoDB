let mongoose = require('mongoose')

let teacherSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  groups: [String],
});

module.exports = teacherSchema
