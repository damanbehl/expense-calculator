import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [selectedFYear, setSelectedFYear] = useState("2019");
  const selectedFYearHandler = (selectedYear) => {
    console.log("selected year\t" + selectedYear);
    setSelectedFYear(selectedYear);
  };

  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === selectedFYear;
  });

  let expensesContent = <p>No Expenses found for this year!</p>;

  if (filteredItems.length > 0) {
    expensesContent = filteredItems.map((item) => (
      <ExpenseItem
        key={item.id}
        id={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }

  return (
    // <div>
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedFYear}
        onSelectFilterYear={selectedFYearHandler}
      />
      {expensesContent}
    </Card>
    // </div>
  );
};

export default Expenses;
