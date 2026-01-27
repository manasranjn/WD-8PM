const express = require('express')
const { default: mongoose } = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = 3500

// const URI = process.env.MONGO_URI
// console.log(URI);

mongoose.connect(process.env.MONGO_URI)
    .then((res) => {
        console.log("Server Connected");

    }).catch((err) => {
        console.log(err);

    })


app.listen(PORT, () => {
    console.log("Server running");
})