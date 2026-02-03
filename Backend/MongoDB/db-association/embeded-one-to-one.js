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
})

const mobileSchema = new mongoose.Schema({
    model: String,
    price: Number,
    ram: String,
    brand: BrandSchema
},
    {
        timestamps: true
    }
)

const Mobile = mongoose.model("Mobile", mobileSchema)

Mobile.create({
    model: "Samsung S25",
    price: 129999,
    ram: "12GB",
    brand: {
        brandName: "Samsung",
        established: 1980,
        location: "Japan"
    }
}).then((res) => {
    console.log("Product Created");
}).catch((err) => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log("Server running");
})