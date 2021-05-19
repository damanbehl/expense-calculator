import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [selectedFYear, setSelectedFYear] = useState("2019");
  const selectedFYearHandler = (selectedYear) => {
    console.log("expenses.js");
    console.log(selectedYear);
    setSelectedFYear(selectedYear);
  };
  return (
    // <div>
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedFYear}
        onSelectFilterYear={selectedFYearHandler}
      />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
    // </div>
  );
};

export default Expenses;
