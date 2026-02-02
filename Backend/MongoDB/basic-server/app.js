const express = require('express')
const { default: mongoose } = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = 3500

// const URI = process.env.MONGO_URI
// console.log(URI);

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
    section: String,
    mark: Number
})

const Student = mongoose.model('Student', studentSchema)

//! Create data
const s1 = new Student({
    name: 'Gyana',
    age: 22,
    course: "MCA",
    section: 'A',
    mark: 425
})
// s1.save()

//! Create data
// Student.create({
//     name: "Anshu",
//     age: 22,
//     course: "B.Tech",
//     section: 'B',
//     mark: 93
// }).then((res) => {
//     console.log("Data Created");
// }).catch((err) => {
//     console.log("Failed to create");
// })

//! Find all data
// Student.find()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })

//! Find one data
// Student.findOne({ name: "Anshu" })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })

//! Find one data by id
// Student.findById("697b7d9d40220ca0cfa7822a")
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })


//! Update 
// Student.updateOne({ _id: '697b7d9d40220ca0cfa7822a' }, { section: "C" })
//     .then((res) => {
//         console.log(res);
//     }).catch((rej) => {
//         console.log(rej);
//     })

//! Delete
// Student.deleteOne({ course: 'M.Tech' })
//     .then((res) => {
//         console.log(res);
//     }).catch((rej) => {
//         console.log(rej);
//     })

// Student.findByIdAndDelete('6980b7c92deadae0d975aeb3')
//     .then((res) => {
//         console.log(res);
//     }).catch((rej) => {
//         console.log(rej);
//     })

mongoose.connect(process.env.MONGO_URI)
    .then((res) => {
        console.log("Server Connected");

    }).catch((err) => {
        console.log(err);

    })

app.listen(PORT, () => {
    console.log("Server running");
})