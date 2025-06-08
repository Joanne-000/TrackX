import { useState } from "react";
import RateTable from "./RateTable";
import { Link } from "react-router";

const GCER = ({ rateData, handleRefresh, base }) => {
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
        Amount:
        <input
          type="number"
          min="1"
          value={amountInput}
          onChange={handleChange}
        />
        <button onClick={handleRefresh}>Refresh</button>
      </div>
      <br />
      <RateTable rateData={rateData} amountInput={amountInput} base={base} />
      <br />
      <Link to="/CurrencyExchange">
        <button>See more rates</button>
      </Link>
    </div>
  );
};

export default GCER;
