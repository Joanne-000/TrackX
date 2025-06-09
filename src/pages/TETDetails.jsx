import DetExpensesTable from "../components/TripExpenseTracker/DetExpensesTable";
import { Link } from "react-router";
import { useState } from "react";

const div = {
  padding: "0px 30px",
};

const button = {
  display: "flex",
  justifyContent: "center",
};

const TETDetails = ({ savedData, delSavedData }) => {
  console.log(savedData);
  const handleChange = () => {
    console.log("clicked");
  };

  return (
    <div style={div}>
      <h3>Trip Expenses Tracker</h3>

      <DetExpensesTable savedData={savedData} delSavedData={delSavedData} />
      <br />
      <div style={button}>
        <Link to="/TripExpensesTracker/new">
          <button type="submit">AddTrip</button>
        </Link>
      </div>
    </div>
  );
};

export default TETDetails;
