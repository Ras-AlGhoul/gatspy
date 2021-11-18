const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    productId: String,
    title: String ,
    desciption: String ,
    quantity: Number,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
