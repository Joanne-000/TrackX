import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useOutletContext } from "react-router";

const OnePageRates = ({ rateData, base }) => {
  const { charId } = useParams();
  const amountInput = useOutletContext();
  const [char, setChar] = useState();

  useEffect(() => {
    if (rateData) {
      const displayChar = Object.keys(rateData).filter(
        (item) => item[0] === charId,
      );
      console.log("aft", Object.keys(rateData).sort());
      setChar(displayChar);
    }
  }, [rateData, charId]);

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
        {char &&
          char.map((item) => (
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
      </tbody>
    </table>
  );
};

export default OnePageRates;
