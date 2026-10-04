// Q8: Express.js Middleware & Request Logger

const express = require('express');
const app = express();
const PORT = 3000;

/*
================================================================
WHAT IS MIDDLEWARE?
Middleware functions are functions that have access to the request object (req),
the response object (res), and the next middleware function (next) in the
application’s request-response cycle.

REQUEST-RESPONSE CYCLE:
Client Request ---> [ Middleware 1: Logger ] ---> [ Route Handler ] ---> Client Response
                                | (calls next())
================================================================
*/

// Custom Logging Middleware
const requestLogger = (req, res, next) => {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`[LOG] ${timestamp} | Method: ${req.method} | URL: ${req.url}`);
  
  // next() passes control to the next middleware or route handler
  next();
};

// Apply logger middleware to all incoming requests
app.use(requestLogger);

// Sample Routes
app.get('/', (req, res) => {
  res.send('<h2>Home Page</h2><p>Request was successfully logged in terminal!</p>');
});

app.get('/about', (req, res) => {
  res.send('<h2>About Page</h2><p>Middleware handles every incoming route.</p>');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Try visiting http://localhost:3000/ or http://localhost:3000/about to see logs below:');
});