// Initialize express router & import axios
const express = require('express');
const axios = require('axios');
require('dotenv').config();
const router = express.Router();

// Fn for converting to Fahrenheit
const kelvinConverter = temp => {
  return Math.round((temp - 273.15) * 9 / 5 + 32, 2);
};

// Define routes
// @route   GET /openWeather/:city
// @desc    Get all useful current weather data for given city
// @access  Public
router.get('/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.apiKey}`);
    const usefulData = {
      temperature: kelvinConverter(data.main.temp),
      feelsLike: kelvinConverter(data.main.feels_like),
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      city: data.name

    }
    res.status(200).json({ data: usefulData });
  } catch (error) {
    res.status(500).json({ msg:error });
  }
});

// Export router
module.exports = router;