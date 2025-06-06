import DetExpensesTable from "../components/TripExpenseTracker/DetExpensesTable";
import { Link } from "react-router";
import { useState } from "react";

const TETDetails = ({ savedData, delSavedData }) => {
  console.log(savedData);
  const handleChange = () => {
    console.log("clicked");
  };

  return (
    <div>
      <h3>Trip Expenses Tracker</h3>

      <DetExpensesTable savedData={savedData} delSavedData={delSavedData} />
      <br />
      <Link to="/TripExpensesTracker/new">
        <button type="submit">AddTrip</button>
      </Link>
    </div>
  );
};

export default TETDetails;
