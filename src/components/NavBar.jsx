import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">
          <h1>TrackX</h1>
        </NavLink>
        <p>Your Currencies Exchange and Trip Expenses Tracker</p>
      </div>
      <div>
        <NavLink to="/CurrencyExchange">
          <div>Currency Exchange Rates</div>
        </NavLink>
        <NavLink to="/TripExpensesTracker">
          <div>Trip Expenses Tracker</div>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
