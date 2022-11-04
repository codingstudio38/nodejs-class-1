const { productsCollection, cmddb_Collection } = require('./mongodb');

// const deletedata = async () => {
//     let db = await productsCollection();
//     let data = await db.deleteOne({ name: "wickets" });
//     if (data.acknowledged) {
//         console.log(data);
//     } else {
//         console.error(data);
//     }
// }
// deletedata()

const deletedataMore = async () => {
    let db = await productsCollection();
    let data = await db.deleteMany({ name: "wickets" });
    if (data.acknowledged) {
        console.log(data);
    } else {
        console.error(data);
    }
}
// deletedataMore()