let mongoose = require('mongoose')
let User = require('./userMDB')
let Profile = require('./profileMDB')
let Credentials = require("./credentialsMDB")

mongoose.connect("mongodb+srv://jaalga:dnfISz8EU5bZiJB9@cluster0.sv2p0ua.mongodb.net/codenotch",
  { useNewUrlParser: false, useUnifiedTopology: false })

let userDocument = new User({
  login: "Jose3214",
  password: "Amigosdelmundo"
});

let profileDocument = new Profile({
  name: "Jose",
  surname: "Martin",
  dateOfBirth: "2004-05-04",
  comments: ['Hola asd', 'asda wad1', '312131'],
  rol: 'user'
});

let credentialsDocument = new Credentials({
  address: 'Calle pascual 29',
  phone: 222222222,
  email: "verdadoso@gmailcom"
});

userDocument.save()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });



// profileDocument.save()
//   .then(data => {
//     console.log(data);;
//   }).catch(err => {
//     console.log(err);
//   });

// credentialsDocument.save()
//   .then(data => {
//     console.log(data);;
//   }).catch(err => {
//     console.log(err);
//   });


