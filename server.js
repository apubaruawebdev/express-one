const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const pageRoute = require('./routes/pageRoute');

// Environment Variable
dotenv.config();
const PORT = process.env.PORT || 4000;

// init express
const app = express();

// Manage Data
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// static folder
app.use(express.static('public'));

// routes
app.use( pageRoute );


// server listen
app.listen(PORT, () => {
    console.log(`Server is Running on Port ${ PORT }`.bgGreen.black);
})