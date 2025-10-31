import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ✅ Wrap App inside BrowserRouter */}
    <BrowserRouter basename="/TripBuddy-main-">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
