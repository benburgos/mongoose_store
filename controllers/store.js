const express = require('express');
const Product = require('../models/products');
const productSeedData = require('../models/productSeed');
const productRouter = express.Router();

// Routes /////////////////////////////////////////////////
// Index Route
productRouter.get('/store', (req, res) => {
    res.send(`You're at the main page!`)
    console.log('--Index page accessed--')
});

// Seed Route
productRouter.get('/store/seed', (req, res) => {console.log('--Data was seeded!--')});

// New Route
productRouter.get('/store/new', (req, res) => {
    res.send(`You're at the page to create a new item!`)
    console.log('--New item form page accessed--')
});

// Create Route
productRouter.post('/store', (req, res) => {
    res.send(`You sent in a new item!`)
    console.log(`--Create route was hit from the NEW page--`)
});

// Show Route
productRouter.get('/store/:id', (req, res) => {
    res.send(`You're look at item details for ${req.params.id} here!`)
    console.log(`--Show route was accessed!`)
});

// Edit Route
productRouter.get('/store/:id/edit', (req, res) => {
    res.send(`You're editing item ${req.params.id} here!`)
    console.log(`--Edit route was hit!--`);
});

// Update Route
productRouter.put('/store/:id', (req, res) => {
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