const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: String,
        img: String,
        price: Number,
        qty: Number
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;