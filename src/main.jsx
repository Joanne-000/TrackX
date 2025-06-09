import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./app.css";

createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <CssBaseline />
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
    ,
  </React.Fragment>,
);
