import DetRateTable from "../components/CurrencyExchange/OnePageRates";
import { useState } from "react";
import { indexLatest } from "../services/currencyServices";
import RatePagination from "../components/RatePagination";
import { Outlet } from "react-router";

const div = {
  padding: "0px 30px",
};

const p = {
  padding: "0px 5px",
  display: "flex",
  margin: "0px",
  fontSize: "0.8rem",
};

const GCERDetails = ({ rateData, handleRefresh, base, disabled, update }) => {
  const [amountInput, setAmountInput] = useState(1);

  const handleChange = (event) => {
    setAmountInput(event.target.value);
  };

  const dateString = update.toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const timeString = update.toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div style={div}>
      <h3>Global Currency Exchange Rate</h3>
      <div>
        Amount: {base + " "}
        <input
          type="number"
          min="1"
          value={amountInput}
          onChange={handleChange}
        />
        <button onClick={handleRefresh} disabled={disabled}>
          Refresh
        </button>
        <br />
        <p style={p}>
          Last update: {dateString} {timeString}
        </p>
        <p style={p}>Data will be updated in every 30mins.</p>
        <p style={p}>
          {disabled ? "Refresh in 5mins after the last update." : ""}
        </p>
      </div>
      <br />
      <RatePagination rateData={rateData} />
      <Outlet context={amountInput} />
    </div>
  );
};

export default GCERDetails;
