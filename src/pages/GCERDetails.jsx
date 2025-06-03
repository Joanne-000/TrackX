import RateTable from "../components/RateTable";

const GCERDetails = () => {
  return (
    <div>
      <h3>Global Currency Exchange Rate</h3>
      <p>Last update: date & time</p>
      <br />
      <div>
        From:
        <select>
          <option>SGD</option>
        </select>
      </div>
      <br />
      <div>
        Amount:
        <input type="number" defaultValue={1} />
      </div>
      <br />
      <RateTable />
      <br />
      <button>Add more rates</button>
    </div>
  );
};

export default GCERDetails;
