import { useState } from "react";

export default function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: "",
    name: "",
    amount: "",
    date: new Date().toISOString().split('T')[0] // Default to today
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) return;
    onAddExpense(formData);
    setFormData({ ...formData, description: "", amount: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Amount ($)</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={formData.amount}
          onChange={(e) => setFormData({...formData, amount: e.target.value})}
          required
        />
      </div>
      
      <button type="submit" className="submit-btn">Add Expense</button>
    </form>
  );
}