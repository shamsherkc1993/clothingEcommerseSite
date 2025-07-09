import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcumb from "./Breadcumb";
import Mainproductcontent from "./Mainproductcontent";

const Productlisting = () => {
  return (
    <>
      <Header />
      <div className="page-container">
        <Breadcumb />
        <Mainproductcontent />
      </div>
      <Footer />
    </>
  );
};

export default Productlisting;
