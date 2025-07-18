import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PricingCards from "../Features/PricingComponent/PricingCards";
import FAQ from "../Features/PricingComponent/FAQ";

const PricingPage = () => {
  return (
    <>
      <PricingCards />
      <FAQ />
    </>
  );
};

export default PricingPage;
