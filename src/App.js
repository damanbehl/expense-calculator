import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Mining GPU",
    amount: 699.84,
    date: new Date(2021, 4, 11),
  },
  {
    id: "e2",
    title: "Power Supply Unit",
    amount: 150,
    date: new Date(2021, 4, 14),
  },
  {
    id: "e3",
    title: "Groceries",
    amount: 100,
    date: new Date(2021, 4, 15),
  },
  {
    id: "e4",
    title: "Cleaning Supplies",
    amount: 20,
    date: new Date(2021, 4, 16),
  },
];

const App = () => {
  const [expArray, setExpenseArray] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    console.log(expense);
    expense = { ...expense, id: "e" + (expArray.length + 1) };
    setExpenseArray((prevState) => [expense, ...prevState]);
    //#CONCEPT: Interview Question, why won't the below code work
    // setExpenseArray((prevState) => prevState.push(expense));
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expArray} />
    </div>
  );
};

export default App;
