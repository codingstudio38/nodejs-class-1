const { mongooseConnect, mongodb } = require('./MongooseConfig');
const Products = new mongooseConnect.Schema({
    name: { type: String, required: false, trim: true, default: null },
    price: { type: String, required: false, trim: true, default: null },
    category: { type: String, required: false, trim: true, default: null },
    photo: { type: String, required: false, trim: true, default: null },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: false, default: null },

});
const NewProductModel = mongooseConnect.model('new_products', Products);
module.exports = NewProductModel;
