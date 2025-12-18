const express = require('express');
const app = express();
const port = 8000;

// app.get('/users', (req, res) => {
//     res.send('Users Home Page');
// })

// app.post('/users', (req, res) => {
//     res.send('User Created');
// });

// app.delete('/users', (req, res) => {
//     res.send('User Deleted');
// });

//! Route chaining for /users
app.route('/users')
    .get((req, res) => {
        res.send('Users Home Page');
    })
    .post((req, res) => {
        res.send('User Created');
    })
    .delete((req, res) => {
        res.send('User Deleted');
    });

//! Route parameters
// app.get('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send(`User Details for ID: ${userId}`);
// });

// app.post('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send(`User with ID: ${userId} Created`);
// });

// app.put('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send(`User with ID: ${userId} Updated`);
// });

// app.delete('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send(`User with ID: ${userId} Deleted`);
// });

//! Route chaining with route parameters
app.route('/users/:id')
    .get((req, res) => {
        const userId = req.params.id;
        res.send(`User Details for ID: ${userId}`);
    })
    .post((req, res) => {
        const userId = req.params.id;
        res.send(`User with ID: ${userId} Created`);
    })
    .put((req, res) => {
        const userId = req.params.id;
        res.send(`User with ID: ${userId} Updated`);
    })
    .delete((req, res) => {
        const userId = req.params.id;
        res.send(`User with ID: ${userId} Deleted`);
    });


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
