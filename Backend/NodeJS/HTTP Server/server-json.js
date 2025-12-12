//! Step 1: Import the http module
const http = require("http");

//! Step 2: Create the server
const server = http.createServer((req, res) => {
    //* Set the content type to JSON
    res.setHeader('Content-Type', 'application/json')
    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: "Welcome to the API..." }));
    } else if (req.url === '/users' && req.method === 'GET') {
        res.statusCode = 200;
        const users = [{ id: 1, name: "Smith", id: 2, name: 'Ward' }]
        res.end(JSON.stringify(users));
    } else if (req.url === '/products' && req.method === 'GET') {
        res.statusCode = 200;
        const products = [{ id: 101, name: "Mobile", price: 50000 }]
        res.end(JSON.stringify(products));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Error, page not found" }));
    }
});

//! Step 3: Define port
const PORT = 5000
//! Step 4: Listen/Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log("Press ctrl+C to stop the server");

});
