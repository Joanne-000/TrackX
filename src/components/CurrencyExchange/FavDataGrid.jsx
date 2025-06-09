// import * as React from 'react';
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const FavDataGrid = ({ favList, base }) => {
  const columns = [
    {
      field: "Code",
      headerName: "Currency Code",
      width: 120,
      align: "center",
      valueGetter: (value, favList) => favList.Code,
    },
    {
      field: "converted",
      headerName: "Converted Amount",
      type: "number",

      width: 180,
      align: "right",
      valueGetter: (value, rateData) =>
        `${rateData[favList.Code] || ""} ${Number(
          amountInput * rateData[favList.Code].toFixed(2),
        ).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`,
    },
    {
      field: "rates",
      headerName: "Rates",
      description: "This column is not sortable.",
      sortable: false,
      width: 180,
      align: "center",
      valueGetter: (value, savedData) =>
        `${base || ""} 1 = ${favList.Code || ""} ${rateData[favList.Code].toFixed(2) || ""}`,
    },
  ];

  const rows = favList;

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        stickyHeader
        aria-label="sticky table"
        rows={rows}
        columns={columns}
      />
    </Box>
  );
};

export default FavDataGrid;
