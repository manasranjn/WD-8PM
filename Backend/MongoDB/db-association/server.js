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

const MobileSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 10000,
        max: 100000
    },
    description: {
        type: String,
    },
    ram: {
        type: String,
        enum: ['6GB', '8GB', '12GB'],
        required: true,
    },
    // brandDetails: BrandSchema
})

const Mobile = mongoose.model('Mobile', MobileSchema)

// Mobile.create({
//     model: "Vivo X200T",
//     price: 68999,
//     description: "Good camera",
//     ram: '8GB'
// }).then((res) => {
//     console.log("Mobile Created");
// }).catch((err) => {
//     console.log(err.message);
// })

const BrandSchema = new mongoose.Schema({
    brandName: String,
    established: Number,
    location: String
})
// const Brand = mongoose.model("Brand", BrandSchema)

// Brand.create({
//     brandName: "Vivo",
//     established: 1990,
//     location: "China"
// })

app.listen(PORT, () => {
    console.log("Server running");
})