import "./App.css";
import Navbar from "./components/Navbar.jsx";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import Home from "./components/home";
import Services from "./components/services";
import Hero from "./components/hero";
import Button from "react-bootstrap/Button";
import PerfectlyProtect from "./components/perfectly-protect-section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Since1986 from "./components/since-1986-section";
import CustomerFavoriteSection from "./components/shop-customer-favorites";

function App() {
  return (
    <>
      <div className="homepage-container">
        <Navbar />
        <Hero />
        <PerfectlyProtect />
        <Since1986 />
        <CustomerFavoriteSection />
        {/*  */}
      </div>
    </>
  );
}

export default App;
