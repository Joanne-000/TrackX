import { destroy } from "../../services/expensesServices";

const DetExpensesTable = ({ savedData, delSavedData }) => {
  console.log(savedData);

  const handleClickEdit = () => {
    console.log("edit");
  };
  const handleClickDelete = (event) => {
    destroy(event.target.id);
    delSavedData(event.target.id);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Currency Code</th>
          <th>Total Expense</th>
          <th>Converted Amount</th>
          <th>Rates</th>
          <th>Edit</th>
          <th>Delete</th>
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
                {/* {data.fields.BaseCode}{" "}
                {Intl.NumberFormat("en-US").format(
                  data.fields.Converted.toFixed(2),
                  )} */}
                amount
              </td>
              <td>
                rates
                {/* {`${data.fields.BaseCode} 1 = ${data.fields.Code} ${data.fields.CurrencyRate}`} */}
              </td>
              <td>
                <button id={data.id} onClick={handleClickEdit}>
                  Edit
                </button>
              </td>
              <td>
                <button id={data.id} onClick={handleClickDelete}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default DetExpensesTable;
