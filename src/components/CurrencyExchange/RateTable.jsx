import { useState } from "react";
import FavouriteRates from "./FavouriteRates";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FavDataGrid from "./FavDataGrid";
import { useEffect } from "react";

const RateTable = ({ rateData, amountInput, base }) => {
  const [favourites, setFavourites] = useState(["MYR", "USD", "CNY", "AUD"]);
  const [favList, setfavList] = useState();

  useEffect(() => {
    if (rateData) {
      const favList = [];
      for (let i = 0; i < favourites.length; i++) {
        const favCode = {
          id: i,
          Code: favourites[i],
          Rate: rateData[favourites[i]],
        };
        favList.push(favCode);
      }
      setfavList(favList);
    }
  }, [rateData, favourites]);

  console.log(favList);
  return (
    <>
      <div>
        <FavDataGrid base={base} favList={favList} amountInput={amountInput} />
      </div>
    </>
  );
};

export default RateTable;
