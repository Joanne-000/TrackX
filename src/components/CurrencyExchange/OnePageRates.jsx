import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useOutletContext } from "react-router";
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

const OnePageRates = ({ rateData, base }) => {
  const { charId } = useParams();
  const amountInput = useOutletContext();
  const [char, setChar] = useState();

  useEffect(() => {
    if (rateData) {
      const displayChar = Object.keys(rateData).filter(
        (item) => item[0] === charId,
      );
      setChar(displayChar);
    }
  }, [rateData, charId]);

  return (
    <>
      <div style={div}>
        <Table sx={{ width: "60%" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <strong>Currency Code</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Converted Amount</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Rates</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {char &&
              char.map((item) => (
                <TableRow key={item}>
                  <TableCell align="center">{item}</TableCell>
                  <TableCell align="center">
                    {Intl.NumberFormat("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(
                      (amountInput * rateData[item].toFixed(2)).toFixed(2),
                    )}
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
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default OnePageRates;
