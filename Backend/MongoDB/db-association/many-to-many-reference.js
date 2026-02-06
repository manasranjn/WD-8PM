const express = require('express')
const app = express()
const MONGO_URL = 'mongodb+srv://manasranjanbera:u8uWFJKVSLYOnYoS@server1.wgkspjs.mongodb.net/db-association?appName=Server1'
const PORT = 3500
const mongoose = require('mongoose')

mongoose.connect(MONGO_URL)
    .then((res) => {
        console.log("DB Connected");
    }).catch((err) => {
        console.log('Connection failed');
    })

//Course Schema
const courseSchema = new mongoose.Schema(
    {
        title: String,
        students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
    },
    { timestamps: true }
);

//Compile
const Course = mongoose.model("Course", courseSchema);

//Student Schema
const studentSchema = new mongoose.Schema(
    {
        name: String,
        courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    },
    { timestamps: true }
);

//Compile
const Student = mongoose.model("Student", studentSchema);

//? Create some courses
// Course.create({
//     title: "React native complete guide",
// })
//     .then((course) => console.log(course))
//     .catch((e) => console.log(e));

//?Create student and enroll (courses)
// Student.create({
//     name: "Smith ",
//     courses: ["69860299edb099b21594b2fb", "698602bc34cf688058d10ecd"],
// })
//     .then((studentWithCourses) => console.log(studentWithCourses))
//     .catch((e) => console.log(e));

// Student.find().populate("courses", 'title')
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })

//!Get student and their enrolled courses
// Student.findById("69860323cfec5a1653ca91a8")
//     .populate("courses", "title") //Only show title
//     .then((course) => console.log(course))
//     .catch((e) => console.log(e));

//? Update courses to reference the student
// Course.updateMany(
//     { _id: { $in: ["698602431b167bfaa9472691", "69860299edb099b21594b2fb"] } },
//     { $push: { students: "69860323cfec5a1653ca91a8" } })
//     .then((course) => console.log(course))
//     .catch((e) => console.log(e));

//!Get courses and their enrolled students
// Course.findById("698602431b167bfaa9472691")
//     .populate("students", "name")
//     .then((course) => console.log(course))
//     .catch((e) => console.log(e));

app.listen(PORT, () => {
    console.log("Server running");
})