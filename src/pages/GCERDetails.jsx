import DetRateTable from "../components/DetRateTable";
import { useState } from "react";
import { indexLatest } from "../services/currencyServices";

const GCERDetails = ({ rateData, setRateData }) => {
  const [amountInput, setAmountInput] = useState(1);

  const handleRefresh = () => {
    const fetchData = async () => {
      const dataLatest = await indexLatest(base);
      setRateData(dataLatest.rates);
    };
    fetchData();
  };

  const handleChange = (event) => {
    setAmountInput(event.target.value);
  };

  return (
    <div>
      <h3>Global Currency Exchange Rate</h3>
      <p>Last update: date & time</p>
      <br />
      <div>
        From:
        <select>
          <option>SGD</option>
        </select>
      </div>
      <br />
      Amount:
      <input type="number" value={amountInput} onChange={handleChange} />
      <button onClick={handleRefresh}>Refresh</button>
      <br />
      <DetRateTable rateData={rateData} amountInput={amountInput} />
    </div>
  );
};

export default GCERDetails;
