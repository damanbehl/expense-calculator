import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
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
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
