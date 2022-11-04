const express = require('express');
const app = express();
const { productsCollection, cmddb_Collection } = require('./mongodb');
const mongodb = require('mongodb');
const upload = require('express-fileupload');
const path = require('path');
const new_upload = path.join(__dirname, 'new_upload');
app.use(express.json());
app.use(upload());

app.get('/', async (req, resp) => {
    let data = await productsCollection();
    data = await data.find().toArray();
    resp.send(data);
})

app.post('/', async (req, resp) => {
    let db = await productsCollection();
    let data = await db.insertOne(req.body);
    if (data.acknowledged) {
        resp.send(data);
    } else {
        resp.send(data);
    }
})

app.put('/:id', async (req, resp) => {
    let db = await productsCollection();
    if (req.params.id) {
        let data = await db.updateOne({ _id: new mongodb.ObjectId(req.params.id) },
            {
                $set: req.body
            });
        resp.send(data);
    } else {
        resp.send({ status: "Failed..!!" });
    }
})
app.delete('/:id', async (req, resp) => {
    let db = await productsCollection();
    if (req.params.id) {
        let data = await db.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
        resp.send(data);
    } else {
        resp.send({ status: "Failed..!!" });
    }
})
app.post('/upload-file', (req, resp) => {
    if (req.files) {
        let fileIs = req.files.file_;
        let file_name = fileIs.name;
        fileIs.mv(`${new_upload}/${file_name}`, function (err) {
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