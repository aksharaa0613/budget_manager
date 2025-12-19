import { Link } from 'react-router-dom';
import { useAuth } from './Hooks/useAuth';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 100px)' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to Budget Planner</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Manage your finances with ease and track your expenses effectively.</p>
      
      {user ? (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hello, {user.name}!</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Ready to manage your budget?</p>
          <Link to="/dashboard" className="btn" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Go to Dashboard</Link>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Get started by creating an account or logging in.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/signup" className="btn" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Sign Up</Link>
            <Link to="/login" className="btn" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Login</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;