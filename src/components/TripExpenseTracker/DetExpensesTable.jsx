const DetExpensesTable = ({ savedData }) => {
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
              <td>{Intl.NumberFormat("en-US").format(data.fields.Expenses)}</td>
              <td>
                {data.fields.BaseCode}{" "}
                {Intl.NumberFormat("en-US").format(
                  data.fields.Converted.toFixed(2),
                )}
              </td>
              <td>{`${data.fields.BaseCode} 1 = ${data.fields.Code} ${data.fields.CurrencyRate}`}</td>
              <button>Edit</button>
              <button>Delete</button>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default DetExpensesTable;
