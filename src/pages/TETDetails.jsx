import DetExpensesTable from "../components/TripExpenseTracker/DetExpensesTable";
import { Link } from "react-router";
import Button from "@mui/material/Button";

const styleDiv = {
  padding: "0px 30px",
};

const styleButton = {
  display: "flex",
  justifyContent: "center",
};

const TETDetails = ({ savedData, delSavedData }) => {
  return (
    <div style={styleDiv}>
      <h3>Trip Expenses Tracker</h3>

      <DetExpensesTable savedData={savedData} delSavedData={delSavedData} />
      <br />
      <div style={styleButton}>
        <Link to="/TripExpensesTracker/new">
          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{ fontSize: "0.7rem", backgroundColor: "rgb(65, 85, 112)" }}
          >
            Add Trip
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TETDetails;
