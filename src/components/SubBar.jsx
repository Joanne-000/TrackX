import GCER from "../components/CurrencyExchange/GCER";
import TET from "../components/TripExpenseTracker/TET";
import { indexLatest } from "../services/currencyServices";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

const divHome = {
  padding: "20px 20px 0px",
};

const time = {
  padding: "10px",
  display: "flex",
  justifyContent: "end",
};

const baseCurr = {
  padding: "10px",
  display: "flex",
};
const SubBar = ({ rateData, handleRefresh, savedData, base }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const setNewTime = () => {
    setCurrentTime(new Date());
  };

  useEffect(() => {
    const interval = setInterval(setNewTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const dateString = currentTime.toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const timeString = currentTime.toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <>
      <div style={divHome}>
        <Grid container justifyContent="space-between">
          <Grid size={3}>
            <div style={baseCurr}>
              Base Currency:
              <select>
                <option>SGD</option>
              </select>
            </div>
          </Grid>
          <Grid size={6}></Grid>
          <Grid size={3} style={time}>
            Now: {dateString} {timeString}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SubBar;
