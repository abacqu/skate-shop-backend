// Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const cartController = require('./controllers/carts');
const boardController = require('./controllers/boards');

// Config App settings
require('dotenv').config();

const { PORT, MONGODB_URL } = process.env;

// Connect to MONGODB
mongoose.connect(MONGODB_URL)

// MONGODB status
mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (err) => console.log('Error with MongoDB' + err.message))

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/', boardController);
app.use('/', cartController);



// Listener
app.listen(PORT, () => console.log(`Express is listening on port ${PORT}`))
