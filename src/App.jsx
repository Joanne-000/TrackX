import { indexLatest, indexHistorical } from "./services/currencyServices";
import Homepage from "./pages/Homepage";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import GCERDetails from "./pages/GCERDetails";
import TETDetails from "./pages/TETDetails";
import NavBar from "./components/NavBar";

export default function App() {
  const [base, setBase] = useState("SGD");
  const [rateData, setRateData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const dataLatest = await indexLatest(base);
      setRateData(dataLatest.rates);
    };
    fetchData();
  }, []);

  const handleHistorical = () => {
    const fetchData = async () => {
      const dataHistorical = await indexHistorical(base, "2025-03-02");
    };
    fetchData();
  };

  return (
    <>
      <button>Check Latest data</button>
      <button onClick={handleHistorical}>
        Check Historical data 2025-03-05
      </button>
      <br />
      <NavBar />

      <Routes>
        <Route path="/" element={<Homepage rateData={rateData} />}></Route>
        <Route
          path="/CurrencyExchange"
          element={
            <GCERDetails rateData={rateData} setRateData={setRateData} />
          }
        ></Route>
        {/* <Route path="/TripExpensesTracker" element={<TETDetails />}></Route> */}
      </Routes>
    </>
  );
}
