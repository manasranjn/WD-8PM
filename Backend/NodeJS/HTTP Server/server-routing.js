//! Step 1: Import the http module
const http = require("http");

//! Step 2: Create the server
const server = http.createServer((req, res) => {
    //* Set the content to HTML
    res.setHeader('Content-Type', 'text/html')
    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.end("<h1>Home Page</h1><p>Welcome to the homepage!</p>");
    } else if (req.url === '/about' && req.method === 'GET') {
        res.statusCode = 200;
        res.end("<h1>About Page</h1><p>Welcome to the about page!</p>");
    } else if (req.url === '/contact' && req.method === 'GET') {
        res.statusCode = 200;
        res.end("<h1>Contact Page</h1><p>Welcome to the contact page!</p>");
    } else {
        res.statusCode = 404;
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

//! Step 3: Define port
const PORT = 5000
//! Step 4: Listen/Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log("Press ctrl+C to stop the server");

});
