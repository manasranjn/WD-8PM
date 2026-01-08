const express = require("express")
const userRouter = express.Router()

userRouter.get("/", (req, res) => {
    res.send("Hello, this is user page")
})

userRouter.post("/", (req, res) => {
    res.send("User created")
})

userRouter.put("/", (req, res) => {
    res.send("User updated")
})

userRouter.delete("/", (req, res) => {
    res.send("User deleted")
})

userRouter.get('/:id', (req, res) => {
    res.send(`User id is ${req.params.id}`)
})

module.exports = userRouter;