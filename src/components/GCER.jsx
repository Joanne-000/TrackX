import RateTable from "./RateTable";
import { Link } from "react-router";

const GCER = () => {
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
      <Link to="/CurrencyExchange">
        <button>See more rates</button>
      </Link>
    </div>
  );
};

export default GCER;
