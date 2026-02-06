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
const subjectSchema = new mongoose.Schema(
    {
        title: String,
    },
    { timestamps: true }
);

//Compile
const Subject = mongoose.model("Subject", subjectSchema);

//Course Schema
const lernerSchema = new mongoose.Schema(
    {
        name: String,
    },
    { timestamps: true }
);
const Lerner = mongoose.model("Lerner", lernerSchema);

//Enrollment Schema
const enrollmentSchema = new mongoose.Schema(
    {
        lerner: { type: mongoose.Schema.Types.ObjectId, ref: "Lerner" },
        subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
        enrolledAt: { type: Date, default: Date.now() },
        status: { type: String, enum: ["active", "completed", "dropped"] },
    },
    { timestamps: true }
);
//Compile
const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

//? Create some courses
// Subject.create({
//     title: "Node.js",
// })
//     .then((course) => console.log(course))
//     .catch((e) => console.log(e));

//? Create student 
// Lerner.create({
//     name: "Adams",
// })
//     .then((student) => console.log(student))
//     .catch((e) => console.log(e));

//? Enroll the student in the course
// Enrollment.create({
//     lerner: "6986082ab51acdc21d19cdcb",
//     subject: "698607b0591f1310c5b46793",
//     status: "active",
// }).then((enrollment) => console.log(enrollment));

//!Get all enrollments for a student (with full course info)
Enrollment.find({ lerner: "6986082ab51acdc21d19cdcb" })
    .populate("subject", "title")
    .populate("lerner", "name")
    .then((enrollment) => console.log(enrollment))
    .catch((e) => console.log(e));

app.listen(PORT, () => {
    console.log("Server running");
})