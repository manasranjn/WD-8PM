const express = require("express")
const loginRouter = express.Router()

loginRouter.get("/", (req, res) => {
    res.send("Hello, this is login page")
})

loginRouter.post("/", (req, res) => {
    res.send("User created")
})

loginRouter.put("/", (req, res) => {
    res.send("User updated")
})

loginRouter.delete("/", (req, res) => {
    res.send("User deleted")
})

loginRouter.get('/:id', (req, res) => {
    res.send(`User id is ${req.params.id}`)
})

module.exports = loginRouter;