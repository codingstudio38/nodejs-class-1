const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "node_class";


async function productsCollection() {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products_');
    return collection;
}
async function cmddb_Collection() {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('cmddb_');
    return collection;
}
module.exports = { productsCollection, cmddb_Collection };
