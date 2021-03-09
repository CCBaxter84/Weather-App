// Import and initialize mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const entrySchema = new Schema({
  city: {
    type: String,
    required: true
  },
  dateTime: {
    type: Date,
    default: Date.now
  },
  temperature: {
    type: Number,
    required: true
  },
  feelsLike: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  windSpeed: {
    type: Number,
    required: true
  }
});

// Export model based off schema
module.exports = Entry = mongoose.model('entry', entrySchema);