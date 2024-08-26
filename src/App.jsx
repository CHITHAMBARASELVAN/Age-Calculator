import React, { useState } from 'react';
import './App.css';

function App() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (fromDate && toDate) {
      const from = new Date(fromDate);
      const to = new Date(toDate);
      let calculatedAge = to.getFullYear() - from.getFullYear();
      const monthDiff = to.getMonth() - from.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && to.getDate() < from.getDate())) {
        calculatedAge--;
      }
      setAge(calculatedAge);
    }
  };

  const clearFields = () => {
    setFromDate('');
    setToDate('');
    setAge(null);
  };

  return (
    <div className="app-container">
      <h1>Age Calculator</h1>
      <div className="date-inputs">
        <label>
          From Date:
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </label>
        <label>
          To Date:
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </label>
      </div>
      <div className="button-group">
        <button className="action-button" onClick={calculateAge}>Calculate</button>
        <button className="action-button" onClick={clearFields}>Clear</button>
      </div>
      {age !== null && <p className="result">Calculated Age: {age} years</p>}
    </div>
  );
}

export default App;
