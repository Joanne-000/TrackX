const DetRateTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Currency Code</th>
          <th>Currency Name</th>
          <th>Rates</th>
        </tr>
      </thead>
      <tbody>
        {/* {data.map((rate, index) => (
            <tr key={index}>
              <td>{rate.curr}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
            </tr>
          ))} */}
        <tr>
          <td>MYR</td>
          <td>Malaysian Ringgit</td>
          <td>3.31</td>
        </tr>
        <tr>
          <td>JPY</td>
          <td>Japanese Yen</td>
          <td>110.94</td>
        </tr>
        <tr>
          <td>USD</td>
          <td>US Dollar</td>
          <td>0.77</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetRateTable;
