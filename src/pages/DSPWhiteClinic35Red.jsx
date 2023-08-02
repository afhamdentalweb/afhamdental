import React, { useEffect } from "react";
import Navbar from "../components/DSPWhiteClinic35Red/Navbar";
import Header from "../components/DSPWhiteClinic35Red/Header";
import Introduction from "../components/DSPWhiteClinic35Red/Introduction";
import Reason from "../components/DSPWhiteClinic35Red/Reason";
import ProductsPackage from "../components/DSPWhiteClinic35Red/ProductsPackage";
import SpecialPrice from "../components/DSPWhiteClinic35Red/SpecialPrice";
import HowToUse from "../components/DSPWhiteClinic35Red/HowToUse";
import Consultation from "../components/DSPWhiteClinic35Red/Consultation";
import ContactUs from "../components/DSPWhiteClinic35Red/ContactUs";
import OrderNow from "../components/DSPWhiteClinic35Red/OrderNow";
import FormOrder from "../components/DSPWhiteClinic35Red/FormOrder";

const DSPWhiteClinic35Red = () => {
  useEffect(() => {
    document.title = "DSP White Clinic 35% H²O² Red | Afham Dental ";
  });

  return (
    <>
      <div className="bg-blue-pattern bg-left-top bg-cover">
        <Navbar />
        <Header />
      </div>
      <Introduction />
      <Reason />
      <ProductsPackage />
      <SpecialPrice />
      <FormOrder />
      <HowToUse />
      <Consultation />
      <ContactUs />
      <OrderNow />
    </>
  );
};

export default DSPWhiteClinic35Red;
