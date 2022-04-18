require('dotenv').config();

// Dependencies ///////////////////////////////////////////
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const storeController = require('./controllers/store')
const app = express();
///////////////////////////////////////////////////////////

// Request Logger /////////////////////////////////////////
const morgan = require('morgan');
app.use(morgan('tiny'));
///////////////////////////////////////////////////////////

// Database Connection ////////////////////////////////////
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
/* ----------------------------------------------------- */
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + 'is Mongo not running?'));
db.on('connected', () => console.log('Mongo Connected!'));
db.on('disconnected', () => console.log('Mongo disconnected!'));
///////////////////////////////////////////////////////////

// Middleware /////////////////////////////////////////////
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(methodOverride("_method"));
app.use('/store', storeController)
///////////////////////////////////////////////////////////

// Listener ///////////////////////////////////////////////
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`You're live on port ${PORT}!`));