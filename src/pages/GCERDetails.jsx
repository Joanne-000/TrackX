import { useState, useEffect } from "react";
import RatePagination from "../components/RatePagination";
import { Outlet } from "react-router";

const styleDiv = {
  padding: "0px 30px",
};

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
const GCERDetails = ({
  rateData,
  handleRefresh,
  base,
  disabled,
  update,
  setBase,
}) => {
  const [amountInput, setAmountInput] = useState(1);
  const [dropdown, setDropdown] = useState();

  useEffect(() => {
    if (rateData) {
      setDropdown(Object.keys(rateData).sort());
    }
  }, [rateData]);

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

  const handleDropdown = (event) => {
    console.log(event.target.value);
    setBase(event.target.value);
  };

  return (
    <div style={styleDiv}>
      <h3>Global Currency Exchange Rate</h3>
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
        <button onClick={handleRefresh} disabled={disabled}>
          Refresh
        </button>
        <br />
        <p style={styleP}>
          Last update: {dateString} {timeString}
        </p>
        <p style={styleP}>Data will be updated in every 30mins.</p>
        <p style={styleP}>
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
