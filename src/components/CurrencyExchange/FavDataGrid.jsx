import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const FavDataGrid = ({ favList, amountInput, base }) => {
  const columns = [
    {
      field: "Code",
      headerName: "Currency Code",
      width: 120,
      align: "center",
      valueGetter: (value, row) => row.Code,
    },
    {
      field: "converted",
      headerName: "Converted Amount",
      type: "number",

      width: 150,
      align: "center",
      valueGetter: (value, row) =>
        `${Intl.NumberFormat("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(amountInput * Number(row.Rate))}`,
    },
    {
      field: "rates",
      headerName: "Rates",
      description: "This column is not sortable.",
      sortable: false,
      width: 180,
      align: "center",
      valueGetter: (value, row) =>
        `${base || ""} 1 = ${row.Code || ""} 
        ${Intl.NumberFormat("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(Number(row.Rate))}`,
    },
  ];

  const rows = favList;

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{
            background: "rgb(178, 199, 219)",
          }}
        />
      </Box>
    </>
  );
};

export default FavDataGrid;
