const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

//instance express
const app = express();

//set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Use express ejs layouts
app.use(expressLayouts);
app.set("layout", "layout");

//Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //pass data from a form

//Routes
app.get("/", (req, res) => {
    res.render("index", {
        title: "This is Home Page",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Page",
    });
});

app.get("/variables", (req, res) => {
    res.render("variables", {
        title: "EJS Variables",
        user: {
            name: "ABCD",
            age: 25,
            email: "abcd@gmail.com",
            isActive: true,
        },
    });
});

app.get("/conditionals", (req, res) => {
    res.render("conditionals", {
        title: "EJS Conditionals",
        user: {
            isLoggedIn: true,
            isAdmin: true,
            hasItems: false,
        },
    });
});

app.get("/loop", (req, res) => {
    res.render("loop", {
        title: "EJS Loops",
        fruits: ["Apple", "Banana", "Orange", "Mango", "Grapes"],
    });
});

//Render the contact form
app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "EJS Contact Form",
    });
});

//Logic for data processing
app.post("/contact", (req, res) => {
    console.log("Form submitted", req.body);
    res.render("contact-success", {
        title: "Message Sent",
        formData: req.body,
    });
});
//Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server is running on the port ${PORT}`));