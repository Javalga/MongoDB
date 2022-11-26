const mongoose = require("mongoose");
const Teacher = require('./teacherMDB')

const markSchema = new mongoose.Schema({
  date: Date,
  mark: Number,
  student_first_name: String,
  student_last_name: String,
  group_name: String,
  subject_name: String,
  teachers: [Teacher],
})

module.exports = mongoose.model("mark", markSchema, 'marks')