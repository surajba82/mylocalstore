const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const authenticate = require('./api/middleware/authenticate');

mongoose.connect('mongodb+srv://'+ process.env.MONGODB_USERNAME +':'+ process.env.MONGODB_PASSWORD +'@mystorecluster-oekf1.mongodb.net/mylocalstore?retryWrites=true&w=majority', {useNewUrlParser: true});

const storesRoutes = require('./api/routes/stores');

app.use(cors());
app.use(express.json());
app.use('/api/stores', storesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not Found'
    })
})

module.exports = app;