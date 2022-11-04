// Node JS in Hindi #39 Mongoose with node
//npm i mongoose
const url = "mongodb://localhost:27017";
const mongoose = require('mongoose');
const main = async () => {
    await mongoose.connect(`${url}/node_class`);
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number,
        color: String,
        category: String,
    });
    const ProductModel = mongoose.model('products_', ProductSchema);
    let data = new ProductModel({ name: "wickets", price: 1200, color: "black", category: "play" });
    let result = await data.save();
    console.log(result);
}
// main()