import { indexLatest, indexHistorical } from "./services/currencyServices";
import Homepage from "./pages/Homepage";

import { Route, Routes } from "react-router";
import GCERDetails from "./pages/GCERDetails";
import TETDetails from "./pages/TETDetails";
import NavBar from "./components/NavBar";

export default function App() {
  const handleLatest = () => {
    const fetchData = async () => {
      const dataLatest = await indexLatest();
      console.log("dataLatest", dataLatest);
    };
    fetchData();
  };

  const handleHistorical = () => {
    const fetchData = async () => {
      const dataHistorical = await indexHistorical("2025-03-02");
      console.log("dataHistorical", dataHistorical);
    };
    fetchData();
  };

  return (
    <>
      <button onClick={handleLatest}>Check Latest data</button>
      <button onClick={handleHistorical}>
        Check Historical data 2025-03-05
      </button>
      <br />
      <NavBar />

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/CurrencyExchange" element={<GCERDetails />}></Route>
        <Route path="/TripExpensesTracker" element={<TETDetails />}></Route>
      </Routes>
    </>
  );
}
