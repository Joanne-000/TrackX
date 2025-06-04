import { useState } from "react";
import RateTable from "./RateTable";
import { Link } from "react-router";

const GCER = ({ rateData, handleRefresh }) => {
  const [amountInput, setAmountInput] = useState(1);

  const handleChange = (event) => {
    setAmountInput(Number(event.target.value));
  };

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
        <input type="number" value={amountInput} onChange={handleChange} />
        <button onClick={handleRefresh}>Refresh</button>
      </div>
      <br />
      <RateTable rateData={rateData} amountInput={amountInput} />
      <br />
      <Link to="/CurrencyExchange">
        <button>See more rates</button>
      </Link>
    </div>
  );
};

export default GCER;
