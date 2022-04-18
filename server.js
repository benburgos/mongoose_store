require('dotenv').config();

// Dependencies ///////////////////////////////////////////
const express = require('express');
const app = express();
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Request Logger /////////////////////////////////////////
const morgan = require('morgan');
app.use(morgan('tiny'));

// Middleware /////////////////////////////////////////////
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

// Routes /////////////////////////////////////////////////
// Index Route
app.get('/store', (req, res) => {
    res.send(`You're at the main page!`)
    console.log('--Index page accessed--')
});
// New Route
app.get('/store/new', (req, res) => {
    res.send(`You're at the page to create a new item!`)
    console.log('--New item form page accessed--')
});
// Create Route
// Show Route
// Edit Route
// Update Route
// Delete Route

// Listener ///////////////////////////////////////////////
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`You're live on port ${PORT}!`));