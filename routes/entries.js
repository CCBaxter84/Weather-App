// Import and initialize express router
const express = require('express');
const router = express.Router();

// Import and init mongoose model
const Entry = require('../models/entry.js');

// @route   GET /entries/:city
// @desc    Get all entries from database based off city
// @access  Public
router.get('/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const entries = await Entry.find({ city: city }).sort({ date: 1 });
    res.status(200).json(entries);
  } catch(err) {
    res.status(500).json({ msg: err });
  }
});

// @route   POST /entries
// @desc    Add a new entry to the database
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newEntry = new Entry({
      temperature: req.body.temperature,
      feelsLike: req.body.feelsLike,
      humidity: req.body.humidity,
      city: req.body.city,
      windSpeed: req.body.windSpeed
    });
    const entry = await newEntry.save();
    res.status(201).json({ msg: 'Entry added to database' });
  } catch(err) {
    res.status(500).json({ msg: err });
  }
});

// @route   PUT /entries
// @desc    Update an existing entry in the database
// @access  Public

// @route   DELETE /entries
// @desc    Delete a specific entry based on id
// @access  Public

// Export router
module.exports = router;