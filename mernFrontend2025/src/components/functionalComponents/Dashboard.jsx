import { useBudget } from './Hooks/useBudget';
import { useExpense } from './Hooks/useExpense';
import Stats from './Stats';

const Dashboard = () => {
  const { budgets, loading: budgetLoading } = useBudget();
  const { expenses, loading: expenseLoading } = useExpense();

  if (budgetLoading || expenseLoading) {
    return <div className="container">Loading...</div>;
  }

  const totalBudget = budgets.reduce((sum, budget) => sum + budget.amount, 0);
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remainingBudget = totalBudget - totalExpenses;

  return (
    <div className="container">
      <h1>Dashboard</h1>
      
      <Stats 
        totalBudget={totalBudget}
        totalExpenses={totalExpenses}
        remainingBudget={remainingBudget}
      />

      <div className="grid">
        <div className="card">
          <h3>Recent Budgets</h3>
          {budgets.slice(0, 3).map(budget => (
            <div key={budget._id} style={{ marginBottom: '1rem', padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px' }}>
              <strong>{budget.month} {budget.year}</strong>
              <div>₹{budget.amount}</div>
            </div>
          ))}
        </div>

        <div className="card">
          <h3>Recent Expenses</h3>
          {expenses.slice(0, 3).map(expense => (
            <div key={expense._id} style={{ marginBottom: '1rem', padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px' }}>
              <strong>{expense.title}</strong>
              <div>₹{expense.amount}</div>
              <small>{expense.category}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;