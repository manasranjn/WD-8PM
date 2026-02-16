const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const { connectDB } = require('./config/db')
const allRoutes = require('./routes/allRoutes')


connectDB()
app.use(express.json())
app.use(cors())
app.use('/api', allRoutes)






app.listen(process.env.PORT, () => {
    console.log("Server running");
})