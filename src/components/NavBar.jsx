import { NavLink } from "react-router";
import Button from "@mui/material/Button";
import SubBar from "./SubBar";

const nav = {
  padding: "20px 20px 0px 20px",
  display: "flex",
  justifyContent: "space-between",
  height: "60px",
  backgroundColor: "rgb(78, 101, 124)",
};

const navDiv = {
  display: "flex",
  justifyContent: "flexEnd",
};

const h1 = {
  margin: "0px",
  fontSize: "2rem",
};

const p = {
  padding: "0px 30px 20px",
  display: "flex",
  margin: "0px",
  fontSize: "0.8rem",
  backgroundColor: "rgb(78, 101, 124)",
};

const NavBar = () => {
  return (
    <>
      <nav style={nav}>
        <Button>
          <NavLink to="/">
            <h1 style={h1}>TrackX</h1>
          </NavLink>
        </Button>
        <div style={navDiv}>
          <Button style={navDiv}>
            <NavLink to="/CurrencyExchange">Currency Exchange Rates</NavLink>
          </Button>
          <Button style={navDiv}>
            <NavLink to="/TripExpensesTracker">Trip Expenses Tracker</NavLink>
          </Button>
        </div>
      </nav>
      <p style={p}>Your Currencies Exchange and Trip Expenses Tracker</p>
      <SubBar />
    </>
  );
};

export default NavBar;
