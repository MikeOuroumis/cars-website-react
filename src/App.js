import "./App.css";
import Navbar from "./components/Navbar.jsx";
import React from "react";
import Hero from "./components/hero";
import PerfectlyProtect from "./components/perfectly-protect-section";
import Since1986 from "./components/since-1986-section";
import CustomerFavoriteSection from "./components/shop-customer-favorites";
import BrandsSection from "./components/brands-section";
import FeaturedCollectionsSection from "./components/featured-collections-section";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="homepage-container">
        <Navbar />
        <Hero />
        <PerfectlyProtect />
        <Since1986 />
        <CustomerFavoriteSection />
        <BrandsSection />
        <FeaturedCollectionsSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
