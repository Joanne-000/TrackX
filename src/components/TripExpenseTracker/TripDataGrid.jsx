// import * as React from 'react';
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const TripDataGrid = ({ savedData }) => {
  const columns = [
    {
      field: "Date",
      headerName: "Date",
      width: 120,
      align: "left",
      valueGetter: (value, row) => row.fields.Date,
    },
    {
      field: "Code",
      headerName: "Currency Code",
      width: 120,
      align: "center",
      valueGetter: (value, row) => row.fields.Code,
    },
    {
      field: "Expenses",
      headerName: "Total Expenses",
      type: "number",
      width: 140,
      align: "right",
      valueGetter: (value, row) =>
        Number(row.fields.Expenses).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
    },
    {
      field: "converted",
      headerName: "Converted Amount",
      type: "number",

      width: 180,
      align: "right",
      valueGetter: (value, row) =>
        `${row.fields.Base || ""} ${Number(row.fields.Converted).toLocaleString(
          "en-US",
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          },
        )}`,
    },
    {
      field: "rates",
      headerName: "Rates",
      description: "This column is not sortable.",
      sortable: false,
      width: 180,
      align: "center",
      valueGetter: (value, row) =>
        `${row.fields.Base || ""} 1 = ${row.fields.Code || ""} ${row.fields.Rates || ""}`,
    },
  ];

  const rows = savedData;

  return (
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
  );
};

export default TripDataGrid;
