const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api', require('./routes/authRoutes'));

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
