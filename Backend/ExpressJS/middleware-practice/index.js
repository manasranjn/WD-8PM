const express = require("express");
const morgan = require("morgan");

//!Express instance
const app = express();
const PORT = 3000;

//In-memory user database
const users = [
    { id: 1, username: "alice", role: "user" },
    { id: 2, username: "bob", role: "admin" },
];

//Built-in middleware
app.use(express.json()); //Passing JSON
//Third-party middleware
app.use(morgan("dev")); //logging

//Custom middleware
app.use((req, res, next) => {
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] ${req.method} ${req.url}`);
    next();
});

//Public routes /users
app.get("/users", (req, res) => {
    res.json(users);
});

//Application-Level middleware for Admin Route
const adminAuthMiddleware = (req, res, next) => {
    const isAdmin = false;
    if (!isAdmin) {
        return res.json({ message: "Access denied. Admins only" });
    }
    next(); //Allow access if admin
};

//Admin Route
app.get("/admin", adminAuthMiddleware, (req, res) => {
    res.json({ message: "Welcome to the Admin Dashboard" });
});

//!Start the server
app.listen(PORT, console.log(`Server is running on ${PORT}`));
