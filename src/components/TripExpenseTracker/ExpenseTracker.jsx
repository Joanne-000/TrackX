import ExpensesTable from "./ExpensesTable";
import { Link } from "react-router";

const ExpenseTracker = ({ savedData }) => {
  return (
    <div>
      <ExpensesTable savedData={savedData} />
      <br />
      <Link to="/TripExpensesTracker">
        <button>See details</button>
      </Link>
    </div>
  );
};

export default ExpenseTracker;
