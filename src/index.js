import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Navbar from "./Navbar";
import HomePage from "./home/HomePage";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Navbar />
    <HomePage />
    <Footer />
  </React.StrictMode>
);