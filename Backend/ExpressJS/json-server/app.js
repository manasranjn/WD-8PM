const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send({ message: 'Hello, World!' });
});

app.post('/', (req, res) => {
    res.send({ message: 'POST request received!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});