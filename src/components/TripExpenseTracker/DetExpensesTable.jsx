import { destroy } from "../../services/expensesServices";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const div = {
  padding: "0px 30px",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
};

const DetExpensesTable = ({ savedData, delSavedData }) => {
  const handleClickEdit = () => {
    console.log("Oops, Edit button is currently developing.");
  };
  const handleClickDelete = (event) => {
    destroy(event.target.id);
    delSavedData(event.target.id);
  };

  return (
    <>
      <div style={div}>
        <Table sx={{ width: "70%" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center" width="100">
                <strong>Date</strong>
              </TableCell>
              <TableCell align="center" width="100">
                <strong> Currency Code</strong>
              </TableCell>
              <TableCell align="center" width="100">
                <strong>Total Expense</strong>
              </TableCell>
              <TableCell align="center" width="120">
                <strong>Converted Amount</strong>
              </TableCell>
              <TableCell align="center" width="150">
                <strong>Rates</strong>
              </TableCell>
              <TableCell align="center" width="30">
                <strong>Edit</strong>
              </TableCell>
              <TableCell align="center" width="30">
                <strong>Delete</strong>
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
                    {`${data.fields.Base} 1 = ${data.fields.Code} ${Intl.NumberFormat(
                      "en-US",
                      {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      },
                    ).format(Number(data.fields.Rates).toFixed(2))}`}
                  </TableCell>
                  <TableCell>
                    <button id={data.id} onClick={handleClickEdit} disabled>
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
      </div>
    </>
  );
};

export default DetExpensesTable;
