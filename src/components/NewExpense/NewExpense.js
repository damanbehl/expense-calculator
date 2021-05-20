import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";
import { useState } from "react";

const NewExpense = (props) => {
  const [formState, setFormState] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormState(false);
  };
  const toggleFormState = () => {
    setFormState(true);
  };
  const toggleFormFalse = () => {
    setFormState(false);
  };
  return (
    <div className="new-expense">
      {!formState && <button onClick={toggleFormState}>Add New Expense</button>}
      {formState && (
        <ExpenseForm
          onCancel={toggleFormFalse}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
