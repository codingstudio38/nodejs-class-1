// Node JS in Hindi #40 CRUD with Mongoose
const url = "mongodb://localhost:27017/node_class";
const mongooseConnect = require('mongoose');
mongooseConnect.connect(url);
const mongodb = require('mongodb');
const ProductSchema = new mongooseConnect.Schema({
    name: String,
    price: Number,
    color: String,
    category: String,
});
const findindb = async () => {
    const ProductModel = mongooseConnect.model('products_', ProductSchema);
    let data = await ProductModel.find();
    // findOne,findById,{ _id: new mongodb.ObjectId('6354a79eb562db49bda79c17') }
    console.log(data);
}
// findindb()

const saveindb = async () => {
    const ProductModel = mongooseConnect.model('products_', ProductSchema);
    let data = new ProductModel({ name: "wickets", price: 1200, color: "black", category: "play" });
    let result = await data.save();
    console.log(result);
}
// saveindb()


const updatedindb = async () => {
    const ProductModel = mongooseConnect.model('products_', ProductSchema);
    let data = await ProductModel.updateOne({ _id: new mongodb.ObjectId('63554837f8c87bd717cff458') }, { $set: { price: 1300, color: "white" } });
    console.log(data);
}
// updatedindb()


const deleteindb = async () => {
    const ProductModel = mongooseConnect.model('products_', ProductSchema);
    let data = await ProductModel.deleteOne({ _id: new mongodb.ObjectId('63554837f8c87bd717cff458') });
    console.log(data);
}
// deleteindb()