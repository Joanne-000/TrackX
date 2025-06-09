import { useState } from "react";
import FavouriteRates from "./FavouriteRates";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const RateTable = ({ rateData, amountInput, base }) => {
  const [favourites, setFavourites] = useState(["MYR", "USD", "CNY", "AUD"]);
  const favList = [];
  const favCode = {};

  for (let i = 0; i < favourites.length; i++) {
    favCode.id = i;
    favCode.Code = favourites[i];
    favList.push(favCode);
  }

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" width="150">
              Currency Code
            </TableCell>
            <TableCell align="center" width="180">
              Converted Amount
            </TableCell>
            <TableCell align="center" width="200">
              Rates
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <FavouriteRates
            base={base}
            favourites={favourites}
            rateData={rateData}
            amountInput={amountInput}
          />
        </TableBody>
      </Table>
    </>
  );
};

export default RateTable;
