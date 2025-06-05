import GCER from "../components/CurrencyExchange/GCER";
import TET from "../components/TripExpenseTracker/TET";
import { indexLatest } from "../services/currencyServices";
import { useEffect, useState } from "react";

const Homepage = ({ rateData, handleRefresh, savedData }) => {
  return (
    <>
      <GCER rateData={rateData} handleRefresh={handleRefresh} />
      <TET savedData={savedData} />
    </>
  );
};

export default Homepage;
