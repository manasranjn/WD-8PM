const express = require("express")
const productsRouter = express.Router()

productsRouter.get("/", (req, res) => {
    res.send("Hello, this is login page")
})

productsRouter.post("/", (req, res) => {
    res.send("User created")
})

productsRouter.put("/", (req, res) => {
    res.send("User updated")
})

productsRouter.delete("/", (req, res) => {
    res.send("User deleted")
})

productsRouter.get('/:id', (req, res) => {
    res.send(`User id is ${req.params.id}`)
})

module.exports = productsRouter;