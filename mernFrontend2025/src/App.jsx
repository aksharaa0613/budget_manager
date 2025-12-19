import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/functionalComponents/Hooks/useAuth';
import { useExpense } from './components/functionalComponents/Hooks/useExpense';
import Navbar from './components/functionalComponents/Navbar';
import Home from './components/functionalComponents/Home';
import Login from './components/functionalComponents/Login';
import Signup from './components/functionalComponents/Signup';
import Dashboard from './components/functionalComponents/Dashboard';
import BudgetList from './components/functionalComponents/BudgetList';
import AddBudget from './components/functionalComponents/AddBudget';
import AddExpense from './components/functionalComponents/AddExpense';
import About from './components/functionalComponents/About';
import './css/style.css';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App" style={{ width: '100%', minHeight: '100vh' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/budgets" element={<ProtectedRoute><BudgetList /></ProtectedRoute>} />
            <Route path="/add-budget" element={<ProtectedRoute><AddBudget /></ProtectedRoute>} />
            <Route path="/expenses" element={<ProtectedRoute><ExpenseList /></ProtectedRoute>} />
            <Route path="/add-expense" element={<ProtectedRoute><AddExpense /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

const ExpenseList = () => {
  const { expenses, loading, deleteExpense } = useExpense();

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      await deleteExpense(id);
    }
  };

  if (loading) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>My Expenses</h1>
        <Link to="/add-expense" className="btn">Add Expense</Link>
      </div>
      {expenses.length === 0 ? (
        <div className="card">No expenses found.</div>
      ) : (
        <div className="grid">
          {expenses.map(expense => (
            <div key={expense._id} className="card">
              <h3>{expense.title}</h3>
              <p><strong>Amount:</strong> ₹{expense.amount}</p>
              <p><strong>Category:</strong> {expense.category}</p>
              <p><strong>Date:</strong> {new Date(expense.date).toLocaleDateString()}</p>
              <button onClick={() => handleDelete(expense._id)} className="btn btn-danger">Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;