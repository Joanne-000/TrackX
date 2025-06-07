import DetRateTable from "../components/CurrencyExchange/OnePageRates";
import { useState } from "react";
import { indexLatest } from "../services/currencyServices";
import RatePagination from "../components/RatePagination";
import { Outlet } from "react-router";

const GCERDetails = ({ rateData, handleRefresh }) => {
  const [amountInput, setAmountInput] = useState(1);

  const handleChange = (event) => {
    setAmountInput(event.target.value);
  };
  return (
    <div>
      <h3>Global Currency Exchange Rate</h3>
      <p>Last update: date & time</p>
      <br />
      <div>
        Amount:
        <input type="number" value={amountInput} onChange={handleChange} />
        <button onClick={handleRefresh}>Refresh</button>
      </div>
      <br />
      <RatePagination rateData={rateData} />
      <Outlet context={amountInput} />
    </div>
  );
};

export default GCERDetails;
