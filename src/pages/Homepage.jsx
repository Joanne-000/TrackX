import GlobalCurrency from "../components/CurrencyExchange/GlobalCurrency";
import ExpenseTracker from "../components/TripExpenseTracker/ExpenseTracker";
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
  setBase,
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
            <GlobalCurrency
              rateData={rateData}
              handleRefresh={handleRefresh}
              base={base}
              disabled={disabled}
              update={update}
              setBase={setBase}
            />
          </Grid>
          <Grid size={1}></Grid>
          <Grid size={7}>
            <ExpenseTracker savedData={savedData} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Homepage;
