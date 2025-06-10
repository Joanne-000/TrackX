import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router";
import Button from "@mui/material/Button";

const styleNav = {
  padding: "10px 10px 0px 10px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  height: "120px",
};

const styleChar = {
  color: "black",
};

const RatePagination = ({ rateData }) => {
  const [navBar, setNavBar] = useState();

  useEffect(() => {
    if (rateData) {
      const navKeys = Object.keys(rateData);
      const navChar = [];
      for (const firstChar of navKeys) {
        navChar.push(firstChar[0]);
      }
      const navList = navChar.reduce((acc, char) => {
        if (!acc.includes(char)) {
          acc.push(char);
        }
        acc.sort();
        return acc;
      }, []);
      setNavBar(navList);
    }
  }, [rateData]);

  return (
    <nav style={styleNav}>
      {navBar &&
        navBar.map((char) => (
          <NavLink to={`/CurrencyExchange/${char}`} key={char}>
            <Button style={styleChar}>
              <strong>{char}</strong>
            </Button>
          </NavLink>
        ))}
    </nav>
  );
};

export default RatePagination;
