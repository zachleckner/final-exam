// Start EJS
const express = require('express');
const app = express();

// Start MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

// Start Cookies
const cookieParser = require('cookie-parser');

// Importing schemas
const skema1 = require('./models/skema');
const skema2 = require('./models/skema');
const skema3 = require('./models/skema');
const skema4 = require('./models/skema');
const skema5 = require('./models/skema');

// Set up view engine and static file serving
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

// Define routes to render pages
app.get('/page1', (req, res) => {
    res.render('pages/page1'); 
});

app.get('/page2', (req, res) => {
    res.render('pages/page2'); 
});

app.get('/page3', (req, res) => {
    res.render('pages/page3'); 
});

// Define GET routes for each schema

app.get('/skema1', async (req, res) => {
    try {
        const data = await skema1.find({});
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Define POST routes for each schema
app.post('/skema10', async (req, res) => {
    try {
        const { username, gNumber, email } = req.body; // Destructure the data from the request body
        // Create a new document using the Schema1 model
        const createdData = await skema1.create({
            data1: username,
            data2: gNumber,
            data3: email
            // You can add more fields here if needed
        });
        res.status(201).json(createdData);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Replace with skema
const users = { username: 'user1', password: 'password1' }; 

app.get('/', function (req, res) {
    res.redirect('/page1');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});