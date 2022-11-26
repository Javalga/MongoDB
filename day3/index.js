let mongoose = require('mongoose');
let Mark = require('./markMDB')

mongoose.connect("mongodb+srv://jaalga:dnfISz8EU5bZiJB9@cluster0.sv2p0ua.mongodb.net/students2",
  { useNewUrlParser: false, useUnifiedTopology: false });

// Mark.create(
//   {
//     date: "2022-09-30",
//     mark: 6,
//     student_first_name: "Mateo",
//     student_last_name: "Lagos",
//     group_name: "Part time",
//     subject_name: "JS",
//     teachers: [{
//       teacher_first_name: "Jose",
//       teacher_last_name: "Herrera"
//     }, {
//       teacher_first_name: "Dani",
//       teacher_last_name: "Vera"
//     }],
//   }
// )
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Mark.aggregate([{ $match: { subject_name: "HTML" } }, { $project: { student_first_name: 1, student_last_name: 1, mark: { $avg: "$mark" } } }])
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Mark.aggregate([{ $count: "id" }])
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Mark.aggregate([{ $project: { student_first_name: 1, student_last_name: 1 } }])
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Mark.aggregate([{ $unwind: "$teachers" }, { $project: { subject_name: 1, teachers: 1 } }])
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Mark.aggregate([{ $group: { "_id": { "Group Name": "$group_name" }, "Amount": { "$sum": 1 } } }, { $sort: { "Group_name": -1 } }])
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Mark.aggregate([{ $project: { subject_name: 1, avg_mark: { $avg: "$mark" } } }, { $match: { "avg_mark": { "$gt": 5 } } }, { $limit: 5 }])
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Mark.aggregate(
//     [
//         { $unwind: "$teachers" },
//         { $group: { "$group_name": { $count: "teachers" } } },

//     ]
// )
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// Mark.aggregate(
//     [
//         {
//             $group: {
//                 _id: "$subject_name", "count": { "$sum": { "$size": "$teachers" } }
//             }
//         },

//     ]
// )
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// reto 2


// Mark.aggregate([
//   {
//     $project:
//     {
//       student_first_name: 1,
//       student_last_name: 1,
//       mark: 1
//     }
//   },
//   {
//     $match:
//     {
//       "$or":
//         [
//           {
//             "mark":
//             {
//               "$gt": 1
//             }
//           },
//           {
//             "$and":
//               [
//                 {
//                   "date": {
//                     "$gt": new Date("2020-01-01")
//                   }
//                 },
//                 {
//                   "date": {
//                     "$lt": new Date("2022-01-01")
//                   }
//                 }
//               ]
//           }
//         ]
//     }
//   }
// ])
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// Mark.aggregate([
//   {
//     $match:
//     {
//       "date": {
//         "$gt": new Date("2021-12-31")
//       }
//     }
//   },
//   {
//     $group:
//     {
//       _id: "$subject_name",
//       avg_mark: { "$avg": "$mark" }
//     }
//   }
// ])
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// Mark.aggregate([
//   {
//     $match:
//     {
//       "date":
//       {
//         "$gte": new Date("2022-01-01")
//       }
//     }
//   },
//   {
//     $group:
//     {
//       _id: "$student_first_name", avg_mark: { "$avg": "$mark" }
//     }
//   }
// ])
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// Mark.aggregate([
//   {
//     $unwind: "$teachers"
//   },
//   {
//     $match:
//     {
//       "teachers.teacher_first_name": "Menchu"
//     }
//   },
//   {
//     $project:
//     {
//       student_first_name: 1,
//       student_last_name: 1,
//     }
//   },
//   {
//     $group:
//     {
//       _id: "$student_first_name", "subjects_name": { "$sum": 1 }
//     }
//   },
// ])
//   .then(data => console.log(data))
//   .catch(err => console.log(err))