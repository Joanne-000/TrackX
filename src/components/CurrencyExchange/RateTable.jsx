import { useState } from "react";
import FavouriteRates from "./FavouriteRates";

const RateTable = ({ rateData, amountInput, base }) => {
  const [favourites, setFavourites] = useState(["MYR", "USD", "CNY", "AUD"]);

  return (
    <table>
      <thead>
        <tr>
          <th>Currency Code</th>
          <th>Converted Amount</th>
          <th>Rates</th>
        </tr>
      </thead>
      <tbody>
        <FavouriteRates
          base={base}
          favourites={favourites}
          rateData={rateData}
          amountInput={amountInput}
        />
      </tbody>
    </table>
  );
};

export default RateTable;
