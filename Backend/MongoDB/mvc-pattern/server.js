const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
mongoose.connect(process.env.MONGO_URI)
    .then((res) => {
        console.log("DB Connected");
    }).catch((err) => {
        console.log(err);
    })

const studentRoutes = require('./routes/studentRoutes')
app.use('/', studentRoutes)




app.listen(process.env.PORT, () => {
    console.log("Server running");
})