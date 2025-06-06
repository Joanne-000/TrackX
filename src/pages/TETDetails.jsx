import DetExpensesTable from "../components/TripExpenseTracker/DetExpensesTable";
import { Link } from "react-router";

const TETDetails = ({ savedData, delSavedData }) => {
  const handleChange = () => {
    console.log("clicked");
  };

  return (
    <div>
      <h3>Trip Expenses Tracker</h3>
      <div>
        Base Currency:
        <select onChange={handleChange}>
          <option>SGD</option>
        </select>
      </div>
      <br />
      <DetExpensesTable savedData={savedData} delSavedData={delSavedData} />
      <br />
      <Link to="/TripExpensesTracker/new">
        <button>AddTrip</button>
      </Link>
    </div>
  );
};

export default TETDetails;
