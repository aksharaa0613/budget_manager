const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  month: {
    type: String,
    required: [true, 'Month is required']
  },
  year: {
    type: Number,
    required: [true, 'Year is required']
  },
  amount: {
    type: Number,
    required: [true, 'Budget amount is required'],
    min: 0
  },
  category: {
    type: String,
    default: 'General'
  }
}, { timestamps: true });

budgetSchema.index({ userId: 1, month: 1, year: 1 });

module.exports = mongoose.model('Budget', budgetSchema);
