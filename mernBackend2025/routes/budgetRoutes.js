const express = require('express');
const { createBudget, getBudgets, updateBudget, deleteBudget } = require('../controllers/budgetController');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);

router.post('/', createBudget);
router.get('/', getBudgets);
router.put('/:id', updateBudget);
router.delete('/:id', deleteBudget);

module.exports = router;