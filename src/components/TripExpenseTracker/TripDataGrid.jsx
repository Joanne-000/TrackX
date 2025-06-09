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
      valueGetter: (value, savedData) => savedData.fields.Date,
    },
    {
      field: "Code",
      headerName: "Currency Code",
      width: 120,
      align: "center",
      valueGetter: (value, savedData) => savedData.fields.Code,
    },
    {
      field: "Expenses",
      headerName: "Total Expenses",
      type: "number",
      width: 140,
      align: "right",
      valueGetter: (value, savedData) =>
        Number(savedData.fields.Expenses).toLocaleString("en-US", {
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
      valueGetter: (value, savedData) =>
        `${savedData.fields.Base || ""} ${Number(
          savedData.fields.Converted,
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
        `${savedData.fields.Base || ""} 1 = ${savedData.fields.Code || ""} ${savedData.fields.Rates || ""}`,
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
      />
    </Box>
  );
};

export default TripDataGrid;
