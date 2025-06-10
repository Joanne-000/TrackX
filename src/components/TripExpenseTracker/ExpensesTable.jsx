import TripDataGrid from "./TripDataGrid";

const ExpensesTable = ({ savedData }) => {
  return (
    <>
      <div>
        <TripDataGrid savedData={savedData} />
      </div>
    </>
  );
};

export default ExpensesTable;
