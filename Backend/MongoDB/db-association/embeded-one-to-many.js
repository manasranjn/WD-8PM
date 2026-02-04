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

const productSchema = new mongoose.Schema({
    pName: String,
    description: String,
    price: Number
})

const sellerSchema = new mongoose.Schema({
    name: String,
    email: String,
    products: [productSchema]
})

const Seller = mongoose.model("Seller", sellerSchema)

// Seller.create({
//     name: "Smith",
//     email: "smith@gmail.com",
//     products: [
//         { pName: "Mobile", description: "...", price: 45999 },
//         { pName: "Laptop", description: "...", price: 85999 },
//         { pName: "Fridge", description: "...", price: 39999 },
//     ]
// }).then((res) => {
//     console.log("Product created");
// }).catch((err) => {
//     console.log("Failed to create product");
// })

// Seller.find().then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err);
// })

app.listen(PORT, () => {
    console.log("Server running");
})