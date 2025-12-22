const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

//!Express app
const app = express();
const PORT = 5000;

//======================
//1.Built-in Middleware
//======================
app.use(express.json()); //Parse JSON
app.use(express.static("public"));

//======================
//2.Third-party Middleware
//======================
// app.use(morgan("dev")); //Log HTTP request
// app.use(cors()); //Allow Cross-Origin Requests

//======================
//3.Custom Middleware
//======================
// app.use((req, res, next) => {
//     console.log(`Custom Logger: ${req.method}-${req.url}`);
//     req.requestTime = new Date();
//     next();
// });

//4.Application-Level Middleware
// app.get(
//     "/admin",
//     (req, res, next) => {
//         console.log("Checking admin access...");
//         //You could authentication
//         next();
//     },
//     (req, res) => {
//         res.json({ message: "Welcome to Admin Panel!" });
//     }
// );


//5.Router-Level Middleware
const userRouter = express.Router();
userRouter.use((req, res, next) => {
    console.log("User router middleware called");
    next();
});
userRouter.get("/profile", (req, res) => {
    res.json({ message: "User profile" });
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Home page" });
});
app.get("/about", (req, res) => {
    console.log(req.requestTime);
    res.json({ message: "Welcome to about page" });
});

app.use("/", userRouter);
//!Start the server
app.listen(PORT, console.log("Server is up and running"));
