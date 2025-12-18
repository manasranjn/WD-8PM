const express = require('express')

const app = express()

//Home
app.get('/', (req, res) => {
    res.send("Welcome to our Store")
});

//Products
app.get('/products', (req, res) => {
    res.send("This is products page")
});

//About Us
app.get('/about', (req, res) => {
    res.send("This is about us page")
});

//Contact us
app.get('/contact', (req, res) => {
    res.send("This is contact us page")
});

//Catyegories / Query Parameters
app.get('/categories', (req, res) => {
    res.send("This is categories page")
    console.log(req.query);

});

// Route parameters
app.get("/products/:id", (req, res) => {
    console.log(req.params.id);
    res.send(`You requested product with ID = ${req.params.id}`);
});


app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');

})