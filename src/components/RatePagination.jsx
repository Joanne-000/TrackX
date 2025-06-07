import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router";

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

  // const navBar = ["A","b","c"]

  return (
    <nav>
      {navBar &&
        navBar.map((char) => (
          <NavLink to={`/CurrencyExchange/${char}`} key={char}>
            <div>{char}</div>
          </NavLink>
        ))}
    </nav>
  );
};

export default RatePagination;
