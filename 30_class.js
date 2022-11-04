// Node JS in Hindi # 30 Connect MongoDB with Node js
// npm install mongo

const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "node_class";
async function getdata() {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products_');
    let respons = await collection.find().toArray();
    console.log(respons);
}

getdata();