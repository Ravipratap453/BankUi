// routes/complaints.js
const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");
const SmsMessage = require('../models/SmsMessage');

router.post("/newComplaint", async (req, res) => {
  const { fullName, complaint, upiPayment, creditCardPayment, netBankingPayment } = req.body;

  if (!fullName || !complaint) {
    return res.status(400).json({ msg: "Please enter all required fields" });
  }

  try {
    const newComplaint = new Complaint({ fullName, complaint, upiPayment, creditCardPayment, netBankingPayment });
    const savedComplaint = await newComplaint.save();
    res.status(201).json(savedComplaint);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/allComplaint", async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post('/saveSms', async (req, res) => {
  const { smsList } = req.body; // Destructure the smsList from the request body
  
  try {
    // Insert the list of SMS messages into the database
    const savedMessages = await SmsMessage.insertMany(smsList);

    return res.status(201).json({
      message: 'SMS data saved successfully',
      savedMessages,
    });
  } catch (error) {
    console.error('Error saving SMS data:', error);
    return res.status(500).json({
      error: 'Failed to save SMS data',
    });
  }
});

module.exports = router;
