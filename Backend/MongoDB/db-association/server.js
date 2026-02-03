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

const BrandSchema = new mongoose.Schema({
    brandName: String,
    established: Number,
    location: String
},
    {
        timestamps: true
    })

const Brand = mongoose.model("Brand", BrandSchema)

// Brand.create({
//     brandName: "Apple",
//     established: 1990,
//     location: "USA"
// })

const mobileSchema = new mongoose.Schema({
    model: String,
    price: Number,
    ram: String,
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand"
    }
},
    {
        timestamps: true
    }
)

const Mobile = mongoose.model("Mobile", mobileSchema)

// Mobile.create({
//     model: "iPhone 17",
//     price: 125999,
//     ram: "8GB",
//     brand: "69820d89052c72c7e37d69fc"
// }).then((res) => {
//     console.log("Product Created");
// }).catch((err) => {
//     console.log(err);
// })


// Mobile.find().populate("brand")
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })
// Mobile.find().populate({ path: "brand", select: "brandName" })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })
Mobile.find().populate({ path: "brand", select: "-brandName" })
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })

app.listen(PORT, () => {
    console.log("Server running");
})