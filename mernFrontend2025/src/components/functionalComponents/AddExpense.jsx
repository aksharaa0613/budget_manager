import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useExpense } from './Hooks/useExpense';
import { useBudget } from './Hooks/useBudget';

const AddExpense = () => {
  const [searchParams] = useSearchParams();
  const budgetId = searchParams.get('budgetId');
  
  const [formData, setFormData] = useState({
    budgetId: budgetId || '',
    title: '',
    amount: '',
    category: 'Other',
    description: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { createExpense } = useExpense();
  const { budgets } = useBudget();
  const navigate = useNavigate();

  const categories = ['Food', 'Transportation', 'Entertainment', 'Shopping', 'Bills', 'Healthcare', 'Other'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await createExpense(formData);
    
    if (result.success) {
      navigate('/expenses');
    } else {
      setError(result.message);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Add New Expense</h2>
        {error && <div className="error">{error}</div>}
        
        <div className="form-group">
          <label>Budget:</label>
          <select name="budgetId" value={formData.budgetId} onChange={handleChange} required>
            <option value="">Select Budget</option>
            {budgets.map(budget => (
              <option key={budget._id} value={budget._id}>
                {budget.month} {budget.year} - ₹{budget.amount}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Category:</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
          />
        </div>
        
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Adding...' : 'Add Expense'}
        </button>
      </form>
    </div>
  );
};

export default AddExpense;