const express = require('express');
const { createExpense, getExpenses, updateExpense, deleteExpense } = require('../controllers/expenseController');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);

router.post('/', createExpense);
router.get('/', getExpenses);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);

module.exports = router;