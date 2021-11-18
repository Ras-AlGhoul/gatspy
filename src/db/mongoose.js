const mongoose = require('mongoose');
const Product = require('./models/products');

mongoose.connect('mongodb://127.0.0.1:27017/products-api', {})
.then(() => console.log('connected succefully'))
.catch(err => console.log(err.message));

const product = new Product({
    productId: 'bike',
    title: 'gameboy' ,
    desciption: 'data data data' ,
    quantity: 24,
})

product.save().then(res => console.log(res))