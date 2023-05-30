import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
// import Practice from "./Practice";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const expenseDataHandler = (enteredExpenses) => {
    const expenseData = {
      ...enteredExpenses,
      id: Math.random().toString(),
    };
    props.newExpenseData(expenseData);
    setIsVisible(false);
  };

  const showExpenseHandler = () => {
    setIsVisible(true);
  };

  const hideExpenseHandler = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Card className="new-expense">
        {/* <Practice /> */}
        {!isVisible && (
          <button onClick={showExpenseHandler}>Add New Expense</button>
        )}
        {isVisible && (
          <ExpenseForm
            onSaveExpenseData={expenseDataHandler}
            onCancel={hideExpenseHandler}
          />
        )}
      </Card>
    </>
  );
};

export default NewExpense;
