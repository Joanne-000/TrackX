import DetExpensesTable from "../components/TripExpenseTracker/DetExpensesTable";

const TETDetails = ({ savedData }) => {
  return (
    <div>
      <h3>Trip Expenses Tracker</h3>
      <DetExpensesTable savedData={savedData} />
      <br />
      <button>Add Trip</button>
    </div>
  );
};

export default TETDetails;
