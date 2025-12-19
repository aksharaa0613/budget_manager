import { Link } from 'react-router-dom';
import { useBudget } from './Hooks/useBudget';

const BudgetList = () => {
  const { budgets, loading, deleteBudget } = useBudget();

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this budget?')) {
      await deleteBudget(id);
    }
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>My Budgets</h1>
        <Link to="/add-budget" className="btn">Add New Budget</Link>
      </div>

      {budgets.length === 0 ? (
        <div className="card">
          <p>No budgets found. Create your first budget to get started!</p>
          <Link to="/add-budget" className="btn">Create Budget</Link>
        </div>
      ) : (
        <div className="grid">
          {budgets.map(budget => (
            <div key={budget._id} className="card">
              <h3>{budget.month} {budget.year}</h3>
              <p><strong>Amount:</strong> ₹{budget.amount}</p>
              <p><strong>Category:</strong> {budget.category}</p>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <Link to={`/expenses?budgetId=${budget._id}`} className="btn">
                  View Expenses
                </Link>
                <button 
                  onClick={() => handleDelete(budget._id)} 
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BudgetList;