const Budget = require('../models/Budget');

exports.createBudget = async (req, res) => {
  try {
    const { month, year, amount, category } = req.body;
    
    const existingBudget = await Budget.findOne({
      userId: req.user.id,
      month,
      year
    });

    if (existingBudget) {
      return res.status(400).json({ message: 'Budget for this month already exists' });
    }

    const budget = await Budget.create({
      userId: req.user.id,
      month,
      year,
      amount,
      category
    });

    res.status(201).json({ success: true, budget });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({ userId: req.user.id }).sort({ year: -1, month: -1 });
    res.json({ success: true, budgets });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateBudget = async (req, res) => {
  try {
    const budget = await Budget.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );

    if (!budget) {
      return res.status(404).json({ message: 'Budget not found' });
    }

    res.json({ success: true, budget });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteBudget = async (req, res) => {
  try {
    const budget = await Budget.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!budget) {
      return res.status(404).json({ message: 'Budget not found' });
    }

    res.json({ success: true, message: 'Budget deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};