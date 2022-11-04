// Node JS in Hindi # 31 Read Data from MongoDB
const { productsCollection, cmddb_Collection } = require('./mongodb');

// productsColection().then((res) => {
//     res.find().toArray().then((data) => {
//         console.log(data);
//     })
// })

async function products() {
    let data = await productsCollection();
    // data = await data.find({name:"ball"}).toArray();
    data = await data.find().toArray();
    console.log(data);
}
products();

// async function cmddbData() {
//     let data = await cmddb_Collection();
//     data = await data.find().toArray();
//     console.log(data);
// }
// cmddbData()



