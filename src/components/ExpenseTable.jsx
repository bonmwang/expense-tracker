import { useState } from "react";

export default function ExpenseTable({ expenses }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <table className="expense-table">
        <thead>
            <tr>
                <th onClick={() => requestSort("description")}>
                    Description {sortConfig.key === "description" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                </th>
                <th onClick={() => requestSort("amount")}>
                    Amount {sortConfig.key === "amount" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                </th>
                <th>Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {sortedExpenses.map((expense, index) => (
                <tr key={expense.id || index}>
                    <td>{expense.description}</td>
                    <td>${parseFloat(expense.amount).toFixed(2)}</td>
                    <td>{new Date(expense.date).toLocaleDateString()}</td>
                    <td>
                        <button onClick={() => onDeleteExpense(expense.id)} className="delete-btn">
                            Delete
                        </button>
                    </td>
                </tr>   
            ))}
        </tbody>
    </table>
  );
}