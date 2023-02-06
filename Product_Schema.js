const { mongooseConnect, mongodb } = require('./MongooseConfig');
const ProductSchema = new mongooseConnect.Schema({
    name: String,
    price: Number,
    color: String,
    category: String,
}, {
    timestamps: true,
});
const ProductModel = mongooseConnect.model('products_', ProductSchema);
module.exports = { ProductModel }; 
