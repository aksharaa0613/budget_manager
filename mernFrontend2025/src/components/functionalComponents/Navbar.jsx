import { Link } from 'react-router-dom';
import { useAuth } from './Hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {user ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/budgets">Budgets</Link></li>
            <li><Link to="/expenses">Expenses</Link></li>
            <li><span style={{ color: 'white', padding: '0.75rem 1.5rem' }}>Welcome, {user.name}</span></li>
            <li><button onClick={logout} className="btn" style={{ background: 'rgba(255,255,255,0.2)', border: 'none' }}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;