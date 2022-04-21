const express = require('express');
const Product = require('../models/products');
const productSeedData = require('../models/productSeed');
const productRouter = express.Router();

// Routes /////////////////////////////////////////////////
// Index Route
productRouter.get('/', (req, res) => {
    Product.find({}, (err, allProducts) => {
        res.render('index.ejs', {
            products: allProducts
        })
    })
});

// Seed Route
productRouter.get('/seed', (req, res) => {
    console.log('--Data was seeded!--')
    Product.deleteMany({}, (err, deletedProducts) => {
        Product.create(productSeedData, (err, data) => {
            res.redirect('/store')
        });
    });
});

// New Route
productRouter.get('/new', (req, res) => {
    res.render('new.ejs');
});

// Delete Route
productRouter.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, deletedProducts) => {
        res.redirect('/store');
    });
});

// Update Route
productRouter.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedBook) => {
        res.redirect(`/store/${req.params.id}`);
    });
});

// Create Route
productRouter.post('/', (req, res) => {
    Product.create(req.body, (err, newProduct) => {
        res.redirect('/store');
    });
});

// Edit Route
productRouter.get('/:id/edit', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('edit.ejs', {
            product: foundProduct
        });
    });
});

// Show Route
productRouter.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('show.ejs', {
            product: foundProduct
        });
    });
});



///////////////////////////////////////////////////////////

module.exports = productRouter;
