// Node JS in Hindi #48 connect with mysql
//npm i mysql
const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_classes'
})
con.connect((err) => {
    if (err) {
        console.log("failed to connect mysql..!!");
    } else {
        console.log("connected..");
    }
})
con.query("SELECT * FROM `products_`", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});