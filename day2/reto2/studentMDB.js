let mongoose = require('mongoose')
let Mark = require('./markMDB')

let studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  marks: [Mark],
});


module.exports = mongoose.model("student", studentSchema, 'students')