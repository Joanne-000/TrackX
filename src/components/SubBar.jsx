import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";

const divHome = {
  padding: "0px 20px 0px",
};

const time = {
  padding: "10px",
  display: "flex",
  justifyContent: "end",
  fontSize: "1rem",
};

const baseCurr = {
  padding: "10px",
  display: "flex",
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
  );
};

export default SubBar;
