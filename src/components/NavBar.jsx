import { NavLink } from "react-router";
import Button from "@mui/material/Button";

const styleNav = {
  padding: "20px 20px 0px 20px",
  display: "flex",
  justifyContent: "space-between",
  height: "60px",
  backgroundColor: "rgb(78, 101, 124)",
};

const styleNavDiv = {
  display: "flex",
  justifyContent: "flexEnd",
};

const styleH1 = {
  margin: "0px",
  fontSize: "2rem",
};

const NavBar = () => {
  return (
    <>
      <nav style={styleNav}>
        <Button>
          <NavLink to="/">
            <h1 style={styleH1}>TrackX</h1>
          </NavLink>
        </Button>
        <div style={styleNavDiv}>
          <Button style={styleNavDiv}>
            <NavLink to="/CurrencyExchange">Currency Exchange Rates</NavLink>
          </Button>
          <Button style={styleNavDiv}>
            <NavLink to="/TripExpensesTracker">Trip Expenses Tracker</NavLink>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
