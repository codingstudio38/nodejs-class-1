const { productsCollection, cmddb_Collection } = require('./mongodb');

// const insertZMore = async () => {
//     let db = await productsCollection();
//     data = await db.insertMany([
//         { name: "wickets", price: 1200, color: "black", category: "play" },
//         { name: "wickets", price: 1200, color: "black", category: "play" }
//     ]);
//     // console.log(data);
//     if (data.acknowledged) {
//         console.log(data.insertedIds);
//     } else {
//         console.error(data);
//     }
// }
// insertZMore()
const insert = async () => {
    let db = await productsCollection();
    let data = await db.insertOne(
        { name: "wickets", price: 1200, color: "black", category: "play" });
    if (data.acknowledged) {
        console.log(data.insertedId);
    } else {
        console.error(data);
    }
}

insert();