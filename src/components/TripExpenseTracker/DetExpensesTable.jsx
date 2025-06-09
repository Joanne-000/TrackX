import { destroy } from "../../services/expensesServices";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" width="80">
              Date
            </TableCell>
            <TableCell align="center" width="80">
              Currency Code
            </TableCell>
            <TableCell align="center" width="100">
              Total Expense
            </TableCell>
            <TableCell align="center" width="120">
              Converted Amount
            </TableCell>
            <TableCell align="center" width="150">
              Rates
            </TableCell>
            <TableCell align="center" width="30">
              Edit
            </TableCell>
            <TableCell align="center" width="30">
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {savedData &&
            savedData.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.fields.Date}</TableCell>
                <TableCell align="center">{data.fields.Code}</TableCell>
                <TableCell align="center">
                  {Intl.NumberFormat("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(Number(data.fields.Expenses).toFixed(2))}
                </TableCell>
                <TableCell align="center">
                  {`${data.fields.Base} ${Intl.NumberFormat("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(Number(data.fields.Converted).toFixed(2))}`}
                </TableCell>
                <TableCell align="center">
                  {`${data.fields.Base} 1 = ${data.fields.Code} ${data.fields.Rates}`}
                </TableCell>
                <TableCell>
                  <button id={data.id} onClick={handleClickEdit}>
                    Edit
                  </button>
                </TableCell>
                <TableCell>
                  <button id={data.id} onClick={handleClickDelete}>
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default DetExpensesTable;
