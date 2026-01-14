const express = require('express');
const app = express();
const path = require('path');

//! Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//!Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', name: 'John Doe', age: 30, hobbies: ['Reading', 'Traveling', 'Coding'] })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page', address: '123 Main St, Anytown, USA', profession: 'Software Developer' })
});




app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});