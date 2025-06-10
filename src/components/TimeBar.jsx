import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";

const divHome = {
  padding: "0px 20px 0px",
  backgroundColor: "rgb(78, 101, 124)",
  color: "white",
};

const time = {
  padding: "10px",
  display: "flex",
  justifyContent: "end",
  fontSize: "1rem",
};

const p = {
  padding: "0px 10px 20px",
  display: "flex",
  margin: "0px",
  fontSize: "0.8rem",
};

const SubBar = () => {
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
    <div style={divHome}>
      <Grid container justifyContent="space-between">
        <Grid size={6}>
          <p style={p}>Your Currencies Exchange and Trip Expenses Tracker</p>
        </Grid>
        <Grid size={3}></Grid>
        <Grid size={3} style={time}>
          Now: {dateString} {timeString}
        </Grid>
      </Grid>
    </div>
  );
};

export default SubBar;
