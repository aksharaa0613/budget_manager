import { useState, useEffect } from 'react';
import { api } from './useFetch';

export const useBudget = () => {
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBudgets = async () => {
    try {
      setLoading(true);
      const response = await api.get('/budgets');
      setBudgets(response.data.budgets);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch budgets');
    } finally {
      setLoading(false);
    }
  };

  const createBudget = async (budgetData) => {
    try {
      const response = await api.post('/budgets', budgetData);
      setBudgets(prev => [response.data.budget, ...prev]);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Failed to create budget' };
    }
  };

  const updateBudget = async (id, budgetData) => {
    try {
      const response = await api.put(`/budgets/${id}`, budgetData);
      setBudgets(prev => prev.map(budget => 
        budget._id === id ? response.data.budget : budget
      ));
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Failed to update budget' };
    }
  };

  const deleteBudget = async (id) => {
    try {
      await api.delete(`/budgets/${id}`);
      setBudgets(prev => prev.filter(budget => budget._id !== id));
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Failed to delete budget' };
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  return {
    budgets,
    loading,
    error,
    createBudget,
    updateBudget,
    deleteBudget,
    refetch: fetchBudgets
  };
};