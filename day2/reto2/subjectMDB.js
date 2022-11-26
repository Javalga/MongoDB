let mongoose = require('mongoose')
let Teacher = require('./teacherMDB')

let subjectSchema = new mongoose.Schema({
  title: String,
  teachers: [Teacher],
});


module.exports = subjectSchema

