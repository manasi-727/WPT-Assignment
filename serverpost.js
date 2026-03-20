const http = require('http');

// Define port
const PORT = 5050;

// Create the server
const server = http.createServer((req, res) => {
    
    // Set response header
    res.setHeader('Content-Type', 'text/html');

    // Routing
    if ((req.url === '/' || req.url === '/index') && req.method === 'GET') {
        res.statusCode = 200;
        res.end('<h1>index page</h1>');
    } 
    else if (req.url === '/home' && req.method === 'GET') {
        res.statusCode = 200;
        res.end('<h1>Home Page</h1>');
    } 
    else if (req.url === '/aboutus' && req.method === 'POST') {
        res.statusCode = 200;
        res.end('<h1>About US</h1>');
    } 
    else {
        res.statusCode = 404;
        res.end('<h1>404: Not Found</h1>');
    }
});

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
