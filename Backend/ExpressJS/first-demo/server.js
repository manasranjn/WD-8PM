const express = require('express')
const app = express()
const PORT = 5000

app.get('/', (req, res) => {

    res.send('Hello World!')
})

app.get("/books", (req, res) => {
    res.send("normal route")
})
app.get("/books/:id", (req, res) => {
    res.send(`book id is ${req.params.id}`)
})

app.get('/search', (req, res) => {
    console.log(req.query);

    res.send(`Search for: ${req.query.price} and ${req.query.rating} and ${req.query.color}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})