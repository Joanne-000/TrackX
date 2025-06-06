import ExpensesTable from "./ExpensesTable";
import { Link } from "react-router";

const TET = ({ savedData }) => {
  return (
    <div>
      <h3>Trip Expenses Tracker</h3>
      <ExpensesTable savedData={savedData} />
      <br />
      <Link to="/TripExpensesTracker">
        <button>See details</button>
      </Link>
    </div>
  );
};

export default TET;
