const About = () => {
  return (
    <div className="container">
      <h1>About Budget Planner</h1>
      <div className="card">
        <h2>Features</h2>
        <ul style={{ textAlign: 'left', margin: '1rem 0' }}>
          <li>Create and manage monthly budgets</li>
          <li>Track expenses by category</li>
          <li>View spending analytics</li>
          <li>Secure user authentication</li>
          <li>Real-time budget calculations</li>
        </ul>
        
        <h2>Technology Stack</h2>
        <ul style={{ textAlign: 'left', margin: '1rem 0' }}>
          <li><strong>Frontend:</strong> React with Vite</li>
          <li><strong>Backend:</strong> Node.js with Express</li>
          <li><strong>Database:</strong> MongoDB Atlas</li>
          <li><strong>Authentication:</strong> JWT</li>
          <li><strong>Deployment:</strong> Vercel (Frontend) + Render (Backend)</li>
        </ul>
      </div>
    </div>
  );
};

export default About;