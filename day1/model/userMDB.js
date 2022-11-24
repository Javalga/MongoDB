const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  login: String,
  password: {
    type: String,
    required: true,
    validate: [
      password => password.length >= 6 && password.toLowerCase() != password,
      'Password must contain atleast 6 characters and 1 upper letter.'
    ],
    select: false
  },
})

UserSchema.pre('save', function (next) {
  console.log('Start');
  console.log(this);
  if (this.login.length < 300) {
    console.log('Your login is fine, continue')
    next()
  } else console.log('Your login is too long!')
})

module.exports = mongoose.model("user", UserSchema, "user")