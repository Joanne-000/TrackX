import React, { useState, useEffect } from "react";
import RateTable from "./RateTable";
import { Link } from "react-router";
import Button from "@mui/material/Button";

const styleP = {
  padding: "0px 5px",
  display: "flex",
  margin: "0px",
  fontSize: "0.8rem",
};

const styleBase = {
  padding: "10px",
  display: "flex",
};

const styleAmount = {
  padding: "10px",
};

const GlobalCurrency = ({
  rateData,
  handleRefresh,
  base,
  disabled,
  update,
  setBase,
}) => {
  const [dropdown, setDropdown] = useState();

  useEffect(() => {
    if (rateData) {
      setDropdown(Object.keys(rateData).sort());
    }
  }, [rateData]);

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

  const handleDropdown = (event) => {
    setBase(event.target.value);
  };

  return (
    <div>
      <div style={styleBase}>
        Base Currency:
        <select onChange={handleDropdown} value={base}>
          {dropdown &&
            dropdown.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
        </select>
      </div>
      <div style={styleAmount}>
        Amount: {base + " "}
        <input
          type="number"
          min="1"
          value={amountInput}
          onChange={handleChange}
        />
        <Button
          onClick={handleRefresh}
          disabled={disabled}
          variant="contained"
          size="small"
          sx={{ fontSize: "0.6rem", backgroundColor: "rgb(65, 85, 112)" }}
        >
          Refresh
        </Button>
        <p style={styleP}>
          Last update: {dateString} {timeString}
        </p>
        <p style={styleP}>Data will be updated in every 30mins.</p>
        <p style={styleP}>
          {disabled ? "Refresh in 5mins after the last update." : ""}
        </p>
      </div>

      <br />
      <RateTable rateData={rateData} amountInput={amountInput} base={base} />
      <br />
      <div>
        <Link to="/CurrencyExchange">
          <Button
            variant="contained"
            size="small"
            sx={{ fontSize: "0.6rem", backgroundColor: "rgb(65, 85, 112)" }}
          >
            See more rates
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GlobalCurrency;
