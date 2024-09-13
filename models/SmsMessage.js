// models/SmsMessage.js
const mongoose = require('mongoose');

const SmsMessageSchema = new mongoose.Schema({
  address: { type: String, required: true },   // Sender or receiver's phone number
  body: { type: String, required: true },      // SMS message body
  date: { type: String, required: true },      // Date the message was received
  status: { type: String, default: 'unread' }, // Optional field for message status
});

module.exports = mongoose.model('SmsMessage', SmsMessageSchema);