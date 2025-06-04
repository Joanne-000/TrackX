import GCER from "../components/GCER";
import TET from "../components/TET";
import { indexLatest } from "../services/currencyServices";
import { useEffect, useState } from "react";

const Homepage = ({ rateData, handleRefresh }) => {
  return (
    <>
      <GCER rateData={rateData} handleRefresh={handleRefresh} />
      <TET />
    </>
  );
};

export default Homepage;
