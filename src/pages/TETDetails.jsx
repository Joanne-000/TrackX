import DetExpensesTable from "../components/TripExpenseTracker/DetExpensesTable";
import { Link } from "react-router";

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
          <button type="submit">AddTrip</button>
        </Link>
      </div>
    </div>
  );
};

export default TETDetails;
