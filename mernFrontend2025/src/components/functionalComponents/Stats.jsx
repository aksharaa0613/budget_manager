const Stats = ({ totalBudget, totalExpenses, remainingBudget }) => {
  return (
    <div className="stats">
      <div className="stat-card">
        <h3>Total Budget</h3>
        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>
          ₹{totalBudget.toFixed(2)}
        </p>
      </div>
      
      <div className="stat-card">
        <h3>Total Expenses</h3>
        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#dc3545' }}>
          ₹{totalExpenses.toFixed(2)}
        </p>
      </div>
      
      <div className="stat-card">
        <h3>Remaining</h3>
        <p style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          color: remainingBudget >= 0 ? '#28a745' : '#dc3545' 
        }}>
          ₹{remainingBudget.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Stats;