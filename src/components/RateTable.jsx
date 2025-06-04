import { useState } from "react";
import FavouriteRates from "./FavouriteRates";

const RateTable = ({ rateData, amountInput }) => {
  const [favourites, setFavourites] = useState(["MYR", "USD", "CNY", "AUD"]);

  return (
    <table>
      <thead>
        <tr>
          <th>Currency Code</th>
          <th>Converted Amount</th>
          <th></th>
          <th></th>
          <th>Rates</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <FavouriteRates
          favourites={favourites}
          rateData={rateData}
          amountInput={amountInput}
        />
      </tbody>
    </table>
  );
};

export default RateTable;
