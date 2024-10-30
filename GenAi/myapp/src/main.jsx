// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Make sure the path is correct
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // Importing global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
