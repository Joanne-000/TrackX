const ExpensesTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Currency Code</th>
          <th>Total Expense</th>
          <th>Converted Amount - SGD</th>
          <th></th>
          <th>Rates</th>
          <th></th>
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
          <td>Mar-25</td>
          <td>JPY</td>
          <td>1,107,500.00</td>
          <td>10,000.00</td>
          <td>SGD 1</td>
          <td>JPY</td>
          <td>110.75</td>
        </tr>
        <tr>
          <td>Oct-24</td>
          <td>CNY</td>
          <td>32,280.00</td>
          <td>6,000.00</td>
          <td>SGD 1</td>
          <td>CNY</td>
          <td>5.38</td>
        </tr>
        <tr>
          <td>May-24</td>
          <td>EUR</td>
          <td>4,760.00</td>
          <td>7,000.00</td>
          <td>SGD 1</td>
          <td>EUR</td>
          <td>0.68</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpensesTable;
