import { useState } from "react";

const DetailRates = ({ allRates, rateData, amountInput }) => {
  return (
    <>
      {allRates.map((item) => (
        <tr>
          <td>{item}</td>
          <td>{(amountInput * rateData[item].toFixed(2)).toFixed(2)}</td>
          <td>SGD</td>
          <td>1</td>
          <td>=</td>
          <td>{item}</td>
          <td>{rateData[item].toFixed(2)}</td>
        </tr>
      ))}
    </>
  );
};

export default DetailRates;
