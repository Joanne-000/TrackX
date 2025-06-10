import "./app.css";
import { indexLatest } from "./services/currencyServices";
import { indexAirtable } from "./services/expensesServices";
import Homepage from "./pages/Homepage";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import GCERDetails from "./pages/GCERDetails";
import TETDetails from "./pages/TETDetails";
import NavBar from "./components/NavBar";
import TimeBar from "./components/TimeBar";
import AddTrip from "./components/TripExpenseTracker/AddTrip";
import EditTrip from "./components/TripExpenseTracker/EditExpense";
import OnePageRates from "./components/CurrencyExchange/OnePageRates";
import React from "react";
import Box from "@mui/material/Box";

export default function App() {
  const [base, setBase] = useState("SGD");
  const [rateData, setRateData] = useState();
  const [savedData, setSavedData] = useState();
  const [disabled, setDisabled] = useState(true);
  const [update, setUpdate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      const dataLatest = await indexLatest(base);
      setRateData(dataLatest.rates);
      console.log("refresh");
      setDisabled(true);
      setUpdate(new Date());
    };

    const setRefreshDisabled = () => {
      setDisabled(false);
    };

    fetchData();
    const intervalFetch = setInterval(fetchData, 1800000);
    const clearIntervalFetch = () => {
      clearInterval(intervalFetch);
    };

    const intervalRefresh = setInterval(setRefreshDisabled, 300000);
    const clearIntervalRefresh = () => {
      clearInterval(intervalRefresh);
    };

    return clearIntervalFetch, clearIntervalRefresh;
  }, [base]);

  useEffect(() => {
    const fetchData = async () => {
      const dataSaved = await indexAirtable();
      setSavedData(dataSaved.records);
    };
    fetchData();
  }, []);

  const handleRefresh = () => {
    const fetchData = async () => {
      const dataLatest = await indexLatest(base);
      setRateData(dataLatest.rates);
    };
    fetchData();
  };

  const addSavedData = (formData) => {
    setSavedData([...savedData, formData]);
  };

  const editSavedData = (formData) => {
    setSavedData([...savedData, formData]);
  };

  const delSavedData = (id) => {
    setSavedData(savedData.filter((obj) => obj.id !== id));
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          background: "rgb(159, 182, 206)",
        }}
      >
        <NavBar />
        <TimeBar />

        <br />

        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                base={base}
                rateData={rateData}
                handleRefresh={handleRefresh}
                savedData={savedData}
                disabled={disabled}
                update={update}
                setBase={setBase}
              />
            }
          ></Route>
          <Route
            path="/CurrencyExchange"
            element={
              <GCERDetails
                rateData={rateData}
                handleRefresh={handleRefresh}
                base={base}
                disabled={disabled}
                update={update}
                setBase={setBase}
              />
            }
          >
            <Route
              path=":charId"
              element={<OnePageRates rateData={rateData} base={base} />}
            ></Route>
          </Route>

          <Route
            path="/TripExpensesTracker"
            element={
              <TETDetails savedData={savedData} delSavedData={delSavedData} />
            }
          ></Route>
          <Route
            path="/TripExpensesTracker/new"
            element={
              <AddTrip addSavedData={addSavedData} rateData={rateData} />
            }
          ></Route>
          <Route
            path="/TripExpensesTracker/:tripId/edit"
            element={<EditTrip editSavedData={editSavedData} />}
          ></Route>
        </Routes>
      </Box>
    </>
  );
}
