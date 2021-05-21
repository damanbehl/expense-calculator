import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedFYear, setSelectedFYear] = useState("2019");
  const selectedFYearHandler = (selectedYear) => {
    console.log("selected year\t" + selectedYear);
    setSelectedFYear(selectedYear);
  };

  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === selectedFYear;
  });

  return (
    // <div>
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedFYear}
        onSelectFilterYear={selectedFYearHandler}
      />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
    // </div>
  );
};

export default Expenses;
