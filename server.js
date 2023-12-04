// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;


// Serve static files from React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Your restaurant data
const restaurantData = require('./restaurantData.json');

// API endpoint for getting restaurant data
app.get('/api/restaurants', (req, res) => {
  res.json(restaurantData);
});

// Handles any requests that don't match the ones above (important for SPA)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
