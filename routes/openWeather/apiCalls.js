// Initialize express router & import axios
const express = require('express');
const axios = require('axios');
require('dotenv').config();
const router = express.Router();

// Define routes
// @route   GET /openWeather/:city
// @desc    Get all entries from OpenWeather API for specific city
// @access  Public
router.get('/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.apiKey}`);
    res.status(200).json({ data });
  } catch(error) {
    res.status(500).json({ msg:error });
  }
});

// Export router
module.exports = router;