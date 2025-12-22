const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send({
        message: 'Hello, World!',
        name: 'John Doe',
        age: 30,
        city: 'New York'
    });
    // console.log(req.method);

});

app.post('/', (req, res) => {
    res.send({ message: 'POST request received!' });
    // console.log(req.method);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});