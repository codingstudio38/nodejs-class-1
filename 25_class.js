//middlewares
const express = require('express');
const app = express();
const Filter = require('./middleware');
const route = express.Router();
// app.use(reqFilter);
route.use(Filter);
app.get('', (req, res) => {
    res.send(`Home Page`);
});

route.get('/users', (req, res) => {
    res.send(`Users page`);
});
route.get('/contact', (req, res) => {
    res.send(`Contact page`);
});


app.get('/about', (req, res) => {
    res.send(`About page`);
});
app.use('/', route);
app.listen(5000);
