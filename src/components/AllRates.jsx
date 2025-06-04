import { useState } from "react";

const AllRates = ({ allRates, rateData, amountInput }) => {
  return (
    <>
      {rateData &&
        allRates.map((item) => (
          <tr key={item}>
            <td>{item}</td>
            <td>
              {Intl.NumberFormat("en-US").format(
                (amountInput * rateData[item].toFixed(2)).toFixed(2),
              )}
            </td>
            <td>SGD</td>
            <td>1</td>
            <td>=</td>
            <td>{item}</td>
            <td>
              {Intl.NumberFormat("en-US").format(rateData[item].toFixed(2))}
            </td>
          </tr>
        ))}
    </>
  );
};

export default AllRates;
