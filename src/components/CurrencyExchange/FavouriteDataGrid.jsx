// import * as React from 'react';
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const FavouriteDataGrid = ({ favourites }) => {
  const columns = [
    {
      field: "Code",
      headerName: "Currency Code",
      width: 120,
      align: "center",
      valueGetter: (value, favourites) => favourites.Code,
    },
    {
      field: "converted",
      headerName: "Converted Amount",
      type: "number",
      width: 180,
      align: "right",
      valueGetter: (value, favourites) =>
        `${favourites.Base || ""} ${Number(favourites.Converted).toLocaleString(
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
      valueGetter: (value, favourites) =>
        `${favourites.Base || ""} 1 = ${favourites.Code || ""} ${favourites.Rates || ""}`,
    },
  ];

  const rows = favourites;

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

export default FavouriteDataGrid;
