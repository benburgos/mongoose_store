require('dotenv').config();

// Dependencies
const express = require('express');
const app = express();

// Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`You're live on port ${PORT}!`));