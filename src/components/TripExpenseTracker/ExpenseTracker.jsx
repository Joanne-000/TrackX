import ExpensesTable from "./ExpensesTable";
import { Link } from "react-router";
import Button from "@mui/material/Button";

const ExpenseTracker = ({ savedData }) => {
  return (
    <div>
      <ExpensesTable savedData={savedData} />
      <br />
      <Link to="/TripExpensesTracker">
        <Button
          variant="contained"
          size="small"
          sx={{ fontSize: "0.6rem", backgroundColor: "rgb(65, 85, 112)" }}
        >
          See details
        </Button>
      </Link>
    </div>
  );
};

export default ExpenseTracker;
