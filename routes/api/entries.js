// Import and initialize express router
const express = require('express');
const router = express.Router();

// Import and init mongoose model
const Entry = require('../../models/entry.js');

// @route   GET /entries/:city
// @desc    Get all entries from database based off city
// @access  Public
router.get('/:city', async (req, res) => {
  try {
    const city = req.params.city.toLowerCase();
    const entries = await Entry.find({ city: city }).sort({ date: 1 });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ msg: error });
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
      city: req.body.city.toLowerCase(),
      windSpeed: req.body.windSpeed
    });
    const entry = await newEntry.save();
    res.status(201).json({ msg: 'Entry added to database' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// @route   PATCH /entries
// @desc    Update an existing entry in the database
// @access  Public
router.patch('/:id', async (req, res) => {
  try {
    const field = Object.keys(req.body)[0];
    const value = Object.values(req.body)[0];
    const response = await Entry.updateOne({ _id: req.params.id }, { [field]: value });
    res.status(202).json({ msg: 'Entry updated' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// @route   DELETE /entries
// @desc    Delete a specific entry based on id
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const entryToDelete = await Entry.findById(req.params.id);
    const entry = await entryToDelete.delete();
    res.status(200).json({ msg: 'Entry deleted from database'});
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// Export router
module.exports = router;