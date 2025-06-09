import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const FavouriteRates = ({ favourites, rateData, amountInput, base }) => {
  return (
    <>
      {rateData &&
        favourites.map((item) => (
          <TableRow key={item}>
            <TableCell align="center"> {item}</TableCell>
            <TableCell align="center">
              {Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format((amountInput * rateData[item].toFixed(2)).toFixed(2))}
            </TableCell>
            <TableCell align="center">
              {base} 1 = {item}{" "}
              {Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(rateData[item].toFixed(2))}
            </TableCell>
          </TableRow>
        ))}
    </>
  );
};

export default FavouriteRates;
