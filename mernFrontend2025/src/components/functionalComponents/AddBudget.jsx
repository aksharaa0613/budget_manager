import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBudget } from './Hooks/useBudget';

const AddBudget = () => {
  const [formData, setFormData] = useState({
    month: '',
    year: new Date().getFullYear(),
    amount: '',
    category: 'General'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { createBudget } = useBudget();
  const navigate = useNavigate();

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await createBudget(formData);
    
    if (result.success) {
      navigate('/budgets');
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
        <h2>Add New Budget</h2>
        {error && <div className="error">{error}</div>}
        
        <div className="form-group">
          <label>Month:</label>
          <select name="month" value={formData.month} onChange={handleChange} required>
            <option value="">Select Month</option>
            {months.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label>Year:</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            min="2020"
            max="2030"
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
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Creating...' : 'Create Budget'}
        </button>
      </form>
    </div>
  );
};

export default AddBudget;