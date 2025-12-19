const Expense = require('../models/Expense');

exports.createExpense = async (req, res) => {
  try {
    const { budgetId, title, amount, category, description } = req.body;

    const expense = await Expense.create({
      userId: req.user.id,
      budgetId,
      title,
      amount,
      category,
      description
    });

    res.status(201).json({ success: true, expense });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const { budgetId } = req.query;
    const filter = { userId: req.user.id };
    
    if (budgetId) {
      filter.budgetId = budgetId;
    }

    const expenses = await Expense.find(filter)
      .populate('budgetId', 'month year')
      .sort({ date: -1 });

    res.json({ success: true, expenses });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json({ success: true, expense });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json({ success: true, message: 'Expense deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};