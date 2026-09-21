const express = require("express");

const app = express();

const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Student Server");
});

// Students route
app.get("/students", (req, res) => {

    const students = [
        "Vinay",
        "charan",
        "vijay",
        "srikar",
        "harshad"
    ];

    res.json(students);
});

// About route
app.get("/about", (req, res) => {

    res.send(`
        <h1>About Application</h1>
        <p>This is a simple Express.js Student Server.</p>
        <p>Created using Node.js and Express.js.</p>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});