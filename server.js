// Import and initialize dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const entries = require('./routes/api/entries.js');
const openWeather = require('./routes/openWeather/apiCalls.js')

// Initialize app
const app = express();

// Use body parsing
app.use(express.json());

// Connect to database
const db = process.env.mongoURI;
const settings = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.connect(db, settings)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/entries', entries);
app.use('/openWeather', openWeather);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));