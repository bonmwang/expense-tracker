import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addExpense = (newExpense) => {
    setExpenses(prev => [...prev, {...newExpense, id: Date.now()}]);
  };

  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(expense => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(expense => 
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalExpenses = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>💰 Expense Tracker</h1>
      </header>

      <main className="app-main">
        <section className="form-section">
          <ExpenseForm onAddExpense={addExpense} />
        </section>

        <section className="controls-section">
          <searchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </section>

        <section className="table-section">
          <ExpenseTable expenses={filteredExpenses} onDeleteExpense={deleteExpense}/>
        </section>
      </main>

      <footer className="app-footer">
        <p>
          Total Expenses: ${totalExpenses.toFixed(2)}
        </p>
      </footer>
    </div>
  );
}

export default App;