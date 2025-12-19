const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  budgetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Budget',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Expense title is required'],
    trim: true
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: 0
  },
  category: {
    type: String,
    default: 'Other'
  },
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    trim: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);
