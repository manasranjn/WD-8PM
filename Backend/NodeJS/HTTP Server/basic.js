//! Step 1: Import the http module
const http = require("http");

//! Step 2: Create the server
const server = http.createServer((req, res) => {
    //? req → request from client
    //? res → response from server

    //* Log request details
    console.log(`Received ${req.method} request for:${req.url}`);

    //* Set response header and status code
    res.writeHead(200, { "Content-Type": "text/plain" });
    //* Send response to client
    res.end("Hello, welcome to my Node.js server!");
});

//! Step 3: Define port
const PORT = 5000

//! Step 4: Listen/Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log("Press ctrl+C to stop the server");
});
