import { useState } from "react";

import FavDataGrid from "./FavDataGrid";
import { useEffect } from "react";

const RateTable = ({ rateData, amountInput, base }) => {
  const [favourites, setFavourites] = useState([
    "MYR",
    "USD",
    "CNY",
    "AUD",
    "JPY",
    "KRW",
  ]);
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

  return (
    <>
      <div>
        <FavDataGrid base={base} favList={favList} amountInput={amountInput} />
      </div>
    </>
  );
};

export default RateTable;
