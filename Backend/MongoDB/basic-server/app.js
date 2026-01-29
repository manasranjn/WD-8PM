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

const s1 = new Student({
    name: 'Gyana',
    age: 22,
    course: "MCA",
    section: 'A',
    mark: 425
})

s1.save()

mongoose.connect(process.env.MONGO_URI)
    .then((res) => {
        console.log("Server Connected");

    }).catch((err) => {
        console.log(err);

    })


app.listen(PORT, () => {
    console.log("Server running");
})