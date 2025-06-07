const ExpensesTable = ({ savedData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Currency Code</th>
          <th>Total Expense</th>
          <th>Converted Amount</th>
          <th>Rates</th>
        </tr>
      </thead>
      <tbody>
        {savedData &&
          savedData.map((data) => (
            <tr key={data.id}>
              <td>{data.fields.Date}</td>
              <td>{data.fields.Code}</td>
              <td>
                {Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(Number(data.fields.Expenses).toFixed(2))}
              </td>
              <td>
                {data.fields.BaseCode}{" "}
                {Intl.NumberFormat("en-US").format(
                  Number(data.fields.Converted).toFixed(2),
                )}
              </td>
              <td>
                {`${data.fields.Base} 1 = ${data.fields.Code} ${data.fields.Rates}`}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ExpensesTable;
