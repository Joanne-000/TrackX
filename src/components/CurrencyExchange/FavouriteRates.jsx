import { useState } from "react";

const FavouriteRates = ({ favourites, rateData, amountInput, base }) => {
  return (
    <>
      {rateData &&
        favourites.map((item) => (
          <tr key={item}>
            <td>{item}</td>
            <td>
              {Intl.NumberFormat("en-US").format(
                (amountInput * rateData[item].toFixed(2)).toFixed(2),
              )}
            </td>
            <td>
              {base} 1 = {item}{" "}
              {Intl.NumberFormat("en-US").format(rateData[item].toFixed(2))}
            </td>
          </tr>
        ))}
    </>
  );
};

export default FavouriteRates;
