const mysql = require('mysql');
const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_classes'
})
connect.connect((err) => {
    if (err) {
        console.log("failed to connect mysql..!!"); return;
    }
})
module.exports = connect;