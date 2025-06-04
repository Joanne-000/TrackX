import DetailRates from "./DetRates";

const DetRateTable = ({ rateData, amountInput }) => {
  const allRates = Object.keys(rateData).sort();

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
        <DetailRates
          allRates={allRates}
          rateData={rateData}
          amountInput={amountInput}
        />
      </tbody>
    </table>
  );
};

export default DetRateTable;
