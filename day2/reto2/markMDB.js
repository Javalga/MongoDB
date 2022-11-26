let mongoose = require('mongoose')
let Subject = require('./subjectMDB')

let markSchema = new mongoose.Schema({
  date: Date,
  mark: Number,
  subject: Subject
});


module.exports = markSchema;