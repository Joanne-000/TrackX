import GCER from "../components/GCER";
import TET from "../components/TET";
import { indexLatest } from "../services/currencyServices";
import { useEffect, useState } from "react";

const Homepage = ({ rateData }) => {
  return (
    <>
      <GCER rateData={rateData} />
      <TET />
    </>
  );
};

export default Homepage;
