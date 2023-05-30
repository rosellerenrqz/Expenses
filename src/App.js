import React, { useState } from "react";
import "./index.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 268.4,
    date: new Date(2023, 1, 2),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 268.4,
    date: new Date(2022, 1, 4),
  },
  {
    id: "e3",
    title: "Computer",
    amount: 268.4,
    date: new Date(2021, 11, 12),
  },
  {
    id: "e4",
    title: "Internet",
    amount: 268.4,
    date: new Date(2020, 10, 10),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addNewExpenseHandler = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <>
      <div>Let's get started!</div>
      <NewExpense onNewExpenseData={addNewExpenseHandler} />
      <Expenses items={INITIAL_EXPENSES} />
    </>
  );
}

export default App;
