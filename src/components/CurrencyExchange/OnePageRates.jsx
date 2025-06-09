import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useOutletContext } from "react-router";
import RatesDataGrid from "./FavouriteDataGrid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const OnePageRates = ({ rateData, base }) => {
  const { charId } = useParams();
  const amountInput = useOutletContext();
  const [char, setChar] = useState();

  useEffect(() => {
    if (rateData) {
      const displayChar = Object.keys(rateData).filter(
        (item) => item[0] === charId,
      );
      console.log("aft", Object.keys(rateData).sort());
      setChar(displayChar);
    }
  }, [rateData, charId]);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Currency Code</TableCell>
            <TableCell>Converted Amount</TableCell>
            <TableCell>Rates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {char &&
            char.map((item) => (
              <TableRow key={item}>
                <TableCell>{item}</TableCell>
                <TableCell>
                  {Intl.NumberFormat("en-US").format(
                    (amountInput * rateData[item].toFixed(2)).toFixed(2),
                  )}
                </TableCell>
                <TableCell>
                  {base} 1 = {item}{" "}
                  {Intl.NumberFormat("en-US").format(rateData[item].toFixed(2))}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default OnePageRates;
