const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const marksRoute = require('./routes/marks');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/vtu-marks', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.use('/api/marks', marksRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
