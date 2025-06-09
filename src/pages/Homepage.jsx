import GCER from "../components/CurrencyExchange/GCER";
import TET from "../components/TripExpenseTracker/TET";
import { indexLatest } from "../services/currencyServices";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

const divHome = {
  padding: "0px 20px",
};
const Homepage = ({
  rateData,
  handleRefresh,
  savedData,
  base,
  disabled,
  update,
}) => {
  return (
    <>
      <div style={divHome}>
        <Grid container justifyContent="space-around">
          <Grid size={4}>
            <GCER
              rateData={rateData}
              handleRefresh={handleRefresh}
              base={base}
              disabled={disabled}
              update={update}
            />
          </Grid>
          <Grid size={1}></Grid>
          <Grid size={7}>
            <TET savedData={savedData} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Homepage;
