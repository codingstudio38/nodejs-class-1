const { productsCollection, cmddb_Collection } = require('./mongodb');


const update = async () => {
    let db = await productsCollection();
    let data = await db.updateOne({ name: "wickets" }, {
        $set:
            { price: 1500, color: "blue" }
    });
    if (data.acknowledged) {
        console.log(data);
    } else {
        console.error(data);
    }
}
update()

// const updateMore = async () => {
//     let db = await productsCollection();
//     let data = await db.updateMany({ name: "wickets" }, {
//         $set:
//             { price: 1500, color: "blue" }
//     });
//     if (data.acknowledged) {
//         console.log(data);
//     } else {
//         console.error(data);
//     }
// }
// updateMore()