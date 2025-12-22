const express = require("express");

//!Express app
const app = express();
const PORT = 3000;

//Middleware (Global)
app.use((req, res, next) => {
    console.log("Middleware is called");
    next();
});

//Home route
app.get("/", (req, res) => {
    res.send("Home page");
});
// About
app.get("/about", (req, res) => {
    res.send("About Page");
});

//!Start the server
app.listen(PORT, console.log("Server is up and running"));
