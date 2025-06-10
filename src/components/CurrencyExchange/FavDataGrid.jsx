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
        }).format((amountInput * Number(row.Rate)).toFixed(2))}`,
    },
    {
      field: "rates",
      headerName: "Rates",
      description: "This column is not sortable.",
      sortable: false,
      width: 180,
      align: "center",
      valueGetter: (value, favList) =>
        `${base || ""} 1 = ${favList.Code || ""} 
        ${Intl.NumberFormat("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(Number(favList.Rate).toFixed(2))}`,
    },
  ];

  const rows = favList;

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          stickyHeader
          aria-label="sticky table"
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
