import React, { useState } from 'react';
import './App.css';

function App() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [productCost, setProductCost] = useState(0);

  function monthsToAfford() {
    const netIncome = income - expenses;
    const months = Math.ceil(productCost / netIncome);

    if (months <= 6) {
      return `${months} months 😊`;
    } else if (months >= 12) {
      return `${months} months 😅`;
    } else if (months >= 24) {
      return `${months} months 😔`;
    } else {
      return `${months} months`;
    }
  }

  return (
    <div className="app">
      <h1>Can I Afford It?</h1>
      <div className="inputs">
        <div className="input-group">
          <label>Monthly Income:</label>
          <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Monthly Expenses:</label>
          <input type="number" value={expenses} onChange={(e) => setExpenses(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Product Cost:</label>
          <input type="number" value={productCost} onChange={(e) => setProductCost(e.target.value)} />
        </div>
      </div>
      <div className="output">
        <p>It will take {monthsToAfford()} to afford this product. {monthsToAfford().includes("months") ? "Please adjust your income or expenses." : null}</p>
      </div>
    </div>
  );
}

export default App;
