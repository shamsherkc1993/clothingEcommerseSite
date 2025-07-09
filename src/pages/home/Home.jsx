import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Categories from "./Categories";
import ProductSlider from "./ProductSlider";
import BestSeller from "./BestSeller";
import Testimonials from "./Testimonials";
import LatestNews from "./LatestNews";
import Section1 from "./Section1";

const Home = () => {
  return (
    <div>
      <div className="promotion-box">
        <div className="container-fluid">
          <p className="promotion-text">
            Free Shipping on all orders over $100!
            <a className="link" href="#">
              Shop Now
            </a>
          </p>
          <span className="promotion-close">
            <i className="ti-close" />
          </span>
        </div>
      </div>
      <Header />
      <div className="page-container">
        <Section1 />
        <Categories />
        <ProductSlider />
        <BestSeller />
        <Testimonials />
        <LatestNews />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
