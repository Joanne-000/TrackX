import ExpensesTable from "./ExpensesTable";
import { Link } from "react-router";

const TET = () => {
  return (
    <div>
      <h3>Trip Expenses Tracker</h3>
      <ExpensesTable />
      <br />
      <Link to="/TripExpensesTracker">
        <button>See details</button>
      </Link>
    </div>
  );
};

export default TET;
