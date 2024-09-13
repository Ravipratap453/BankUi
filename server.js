//server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const complaintRoutes = require('./routes/complaints');

dotenv.config();

const app = express();
// app.use(cors());
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

// const mongoURI = process.env.MONGODB_URI;
// mongoose.connect(mongoURI, {})
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});


