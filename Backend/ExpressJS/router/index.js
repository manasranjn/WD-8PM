const express = require('express')
const app = express()
const router = require("./routes/allRoutes")

app.use('/api', router)

// http://localhost:3000/api/products


app.listen(3000, () => {
    console.log("Server is running");
})