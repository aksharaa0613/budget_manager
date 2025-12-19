import { useState, useEffect } from 'react';
import { api } from './useFetch';

export const useExpense = (budgetId = null) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const url = budgetId ? `/expenses?budgetId=${budgetId}` : '/expenses';
      const response = await api.get(url);
      setExpenses(response.data.expenses);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch expenses');
    } finally {
      setLoading(false);
    }
  };

  const createExpense = async (expenseData) => {
    try {
      const response = await api.post('/expenses', expenseData);
      setExpenses(prev => [response.data.expense, ...prev]);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Failed to create expense' };
    }
  };

  const updateExpense = async (id, expenseData) => {
    try {
      const response = await api.put(`/expenses/${id}`, expenseData);
      setExpenses(prev => prev.map(expense => 
        expense._id === id ? response.data.expense : expense
      ));
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Failed to update expense' };
    }
  };

  const deleteExpense = async (id) => {
    try {
      await api.delete(`/expenses/${id}`);
      setExpenses(prev => prev.filter(expense => expense._id !== id));
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Failed to delete expense' };
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, [budgetId]);

  return {
    expenses,
    loading,
    error,
    createExpense,
    updateExpense,
    deleteExpense,
    refetch: fetchExpenses
  };
};