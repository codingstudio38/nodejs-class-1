const connect = require('./MySQL_Config');
const path = require('path');
const upload = require('express-fileupload');
const public = path.join(__dirname, 'public');
const express = require('express');
const app = express();
app.use(express.json());
app.use(upload());
app.get('/', async (req, resp) => {
    let query_ = "SELECT * FROM `products_`";
    connect.query(query_, (err, result) => {
        if (err) {
            resp.send(err);
        } else {
            resp.send(result);
        }
    });

})
app.post('/', async (req, resp) => {
    let data = req.body;
    let query_ = "INSERT INTO `products_` set ?";
    connect.query(query_, data, (err, result, fields) => {
        if (err) {
            resp.send(err);
        } else {
            resp.send(result);
        }
    });
})
app.put('/:id', async (req, resp) => {
    let data = [req.body.price, req.body.name, req.body.color, req.body.category, req.params.id];
    let query_ = "UPDATE `products_` SET `price` = ?, name=?, color=?, category=? where id=?";
    connect.query(query_, data, (err, result, fields) => {
        if (err) throw err;
        resp.send(result);
    });
})

app.delete('/:id', async (req, resp) => {
    let query_ = "DELETE FROM `products_` where id=" + req.params.id;
    connect.query(query_, (err, result, fields) => {
        // if (err) throw err;
        if (err) {
            resp.send(err);
        } else {
            resp.send(result);
        }
    });
})
app.get('/upload', (req, resp) => {
    resp.sendFile(`${public}/upload.html`);
})
// npm i express-fileupload
app.post('/upload', (req, resp) => {
    if (req.files) {
        let fileIs = req.files.file_;
        let file_name = fileIs.name;
        fileIs.mv('./new_upload/' + file_name, function (err) {
            if (err) {
                resp.send(err);
            } else {
                resp.send("File uploaded.");
            }
        })
    } else {
        resp.send("Nothing for uploaded.");
    }
})
app.listen(5000);