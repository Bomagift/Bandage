import React from "react";
import Header from "../E-commerce/Header";
import Navbar from "../E-commerce/Navbar"
import  "./LandingPage.css"
import FunitureGridpage from "../E-commerce/FunitureGridpage";
import BestsellerHeading from "../E-commerce/BestsellerHeading";
import ProductDashboard from "../E-commerce/ProductDashboard";
import Feature from "../E-commerce/Feature";
function LandingPage() {
  return (
    <div className="landingPage-container">
      <Header />
      <Navbar/>
      <FunitureGridpage/>
      <BestsellerHeading/>
      <ProductDashboard/>
      <BestsellerHeading/>
<Feature/>
    </div>
  );
}

export default LandingPage;
