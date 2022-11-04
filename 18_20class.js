//Express Js
//install npm install express --save

const { query } = require('express');
const express = require('express');
const app = express();

app.get('', (req, res) => {
    var n;
    if (req.query.name === undefined) {
        n = "";
    } else {
        n = req.query.name;
    }
    res.send(`

    Hello, This is Home Page ${n}<br>
    <a href="http://localhost:5000">Home</a>,
    <a href="http://localhost:5000/about">About</a>,
    <a href="http://localhost:5000/help">Help</a>
    `);
})
app.get('/about', (req, res) => {
    var n;
    if (req.query.name === undefined) {
        n = "";
    } else {
        n = req.query.name;
    }
    res.send(`

    <input type="text" value="${n}" placeholder="Name" name="name">
    <input type="button" value="Click" name="Click"><br>
    <a href="http://localhost:5000">Home</a>,
    <a href="http://localhost:5000/about">About</a>,
    <a href="http://localhost:5000/help">Help</a>

    `);
})
app.get('/help', (req, res) => {
    res.send([
        {
            name: "bidyut",
            email: "mondalbidyut38@gmail.com",
            age: 23
        },
        {
            name: "bidyut",
            email: "mondalbidyut38@gmail.com",
            age: 23
        }
    ]);
})
app.listen(5000);