import GCER from "../components/CurrencyExchange/GCER";
import TET from "../components/TripExpenseTracker/TET";
import Grid from "@mui/material/Grid";

const divHome = {
  padding: "0px 30px",
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
            <h3>Global Currency Exchange Rate</h3>
          </Grid>
          <Grid size={1}></Grid>
          <Grid size={7}>
            <h3>Trip Expenses Tracker</h3>
          </Grid>
        </Grid>

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
