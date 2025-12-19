import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './Hooks/useAuth';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      navigate('/dashboard');
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
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </form>
    </div>
  );
};

export default Login;