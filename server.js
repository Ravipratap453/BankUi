//server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const complaintRoutes = require('./routes/complaints');

dotenv.config();

const app = express();

app.use(cors({
    origin: '*', // Allow all origins (for testing)
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Complaint API');
});

// Use the routes
app.use('/api/complaints', complaintRoutes);

const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process with an error code
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
