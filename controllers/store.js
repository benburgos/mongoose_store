const express = require('express');
const Book = require('../../booklist/models/book');
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

// Create Route
productRouter.post('/', (req, res) => {
    Product.create(req.body, (err, newProduct) => {
        res.redirect('/store');
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

// Edit Route
productRouter.get('/:id/edit', (req, res) => {
    res.send(`You're editing item ${req.params.id} here!`)
    console.log(`--Edit route was hit!--`);
});

// Update Route
productRouter.put('/:id', (req, res) => {
    res.send(`You sent in an update request for ${req.params.id}!`)
    console.log(`--Update route was hit from the EDIT page--`)
});

// Delete Route
productRouter.delete('/store/:id', (req, res) => {
    res.send(`You deleted item #${req.params.id}!`)
    console.log(`--Delete route was hit!--`)
})
///////////////////////////////////////////////////////////

module.exports = productRouter;