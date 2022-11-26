let mongoose = require('mongoose');
let Student = require('./studentMDB')

mongoose.connect("mongodb+srv://jaalga:dnfISz8EU5bZiJB9@cluster0.sv2p0ua.mongodb.net/students",
  { useNewUrlParser: false, useUnifiedTopology: false });


const data = {
  first_name: 'Cristobal',
  last_name: 'Perez',
  marks: [{
    date: '2022-12-05',
    mark: 7,
    subject: {
      title: "HTML",
      teachers: [{
        first_name: "Jose",
        last_name: "Herra",
        groups: ['Part-time', 'Full-Time'],
      }]
    }
  }, {
    date: '2022-12-20',
    mark: 10,
    subject: {
      title: "Jquery",
      teachers: [{
        first_name: "Jose",
        last_name: "Herrera",
        groups: ['Part-time', 'Full-Time'],
      }, {
        first_name: "Dani",
        last_name: "Lopez",
        groups: ['Part-Time'],
      }]
    }
  }]
};

// Student.create(data)
//   .then(data => { console.log('Documento insertado'); console.log(data) })
//   .catch(err => console.log(err))

// Student.find({ first_name: "Alan" })
//   .then(data => {
//     for (let mark of data[0].marks) {
//       console.log(mark)
//     }
//   })
//   .catch(err => console.log(err));

// Student.find({ first_name: 'Manuel' })
//   .then(data => {
//     data[0].marks.forEach(mark => console.log(mark.subject.title))
//   })
//   .catch(err => console.log(err))

Student.find({ first_name: "Javier" })
  .then(data => {
    data[0].marks.forEach(mark => console.log(mark.subject.teachers))
  })
  .catch(err => console.log(err))