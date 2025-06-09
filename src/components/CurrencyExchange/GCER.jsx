import React, { useState } from "react";
import RateTable from "./RateTable";
import { Link } from "react-router";
import Button from "@mui/material/Button";

const p = {
  padding: "0px 5px",
  display: "flex",
  margin: "0px",
  fontSize: "0.8rem",
};

const GCER = ({ rateData, handleRefresh, base, disabled, update }) => {
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

  const [amountInput, setAmountInput] = useState(1);
  const handleChange = (event) => {
    setAmountInput(Number(event.target.value));
  };

  return (
    <div>
      <h3>Global Currency Exchange Rate</h3>
      <br />
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
          {disabled
            ? "Data will be updated in every 30mins. Refresh in 5mins after the last update."
            : ""}
        </p>
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
