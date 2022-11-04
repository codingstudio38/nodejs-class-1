// Node JS in Hindi # 21 Make HTML page
//Node JS in Hindi # 22 Remove extension from URL and 404 Page class 22
//Node JS in Hindi # 23 EJS Template Engine class 23
//Node JS in Hindi # 24 Dynamic Page with ejs class 24
const { query } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const public = path.join(__dirname, 'public');
// app.use(express.static(public))

app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.sendFile(`${public}/index.html`);
});
app.get('/about', (req, res) => {
    res.sendFile(`${public}/about.html`);
});
app.get('/profile', (req, res) => {
    const user = {
        name: "bidyut",
        email: "mondalbidyut38@gmail.com",
        age: 23,
        skills: ['php', 'laravel', 'codeigniter 4', 'angular', 'reactjs', 'node']
    };
    res.render('profile', { user });
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('*', (req, res) => {
    res.sendFile(`${public}/404.html`);
});
app.listen(5000);