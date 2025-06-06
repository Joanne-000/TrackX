import { indexLatest, indexHistorical } from "./services/currencyServices";
import { indexAirtable } from "./services/expensesServices";
import Homepage from "./pages/Homepage";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import GCERDetails from "./pages/GCERDetails";
import TETDetails from "./pages/TETDetails";
import NavBar from "./components/NavBar";
import AddTrip from "./components/TripExpenseTracker/AddExpense";
import EditTrip from "./components/TripExpenseTracker/EditExpense";

export default function App() {
  const [base, setBase] = useState("SGD");
  const [rateData, setRateData] = useState();
  const [savedData, setSavedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const dataLatest = await indexLatest(base);
      setRateData(dataLatest.rates);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const dataSaved = await indexAirtable();
      setSavedData(dataSaved.records);
    };
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataSaved = await indexAirtable();
    setSavedData(dataSaved.records);
  };

  const handleHistorical = () => {
    const fetchData = async () => {
      const dataHistorical = await indexHistorical(base, "2025-03-02");
    };
    fetchData();
  };

  const handleRefresh = () => {
    const fetchData = async () => {
      const dataLatest = await indexLatest(base);
      setRateData(dataLatest.rates);
    };
    fetchData();
  };

  const addSavedData = (formData) => {
    setSavedData({ ...savedData, formData });
  };

  const editSavedData = (formData) => {
    setSavedData({ ...savedData, formData });
  };

  const delSavedData = (id) => {
    setSavedData(savedData.filter((obj) => obj.id !== id));
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
        <Route
          path="/"
          element={
            <Homepage
              rateData={rateData}
              handleRefresh={handleRefresh}
              savedData={savedData}
            />
          }
        ></Route>
        <Route
          path="/CurrencyExchange"
          element={
            <GCERDetails rateData={rateData} handleRefresh={handleRefresh} />
          }
        ></Route>
        <Route
          path="/TripExpensesTracker"
          element={
            <TETDetails savedData={savedData} delSavedData={delSavedData} />
          }
        ></Route>
        <Route
          path="/TripExpensesTracker/new"
          element={<AddTrip addSavedData={addSavedData} />}
        ></Route>
        <Route
          path="/TripExpensesTracker/:tripId/edit"
          element={<EditTrip editSavedData={editSavedData} />}
        ></Route>
      </Routes>
    </>
  );
}
