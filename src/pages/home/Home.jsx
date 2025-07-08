import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "./Banner";
import Categories from "./Categories";
import ProductSlider from "./ProductSlider";
import BestSeller from "./BestSeller";
import Testimonials from "./Testimonials";
import LatestNews from "./LatestNews";
import BrandSlider from "./BrandSlider";

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
        <Banner />
        <Categories />
        <ProductSlider />
        <BestSeller />
        <Testimonials />
        <LatestNews />
        <BrandSlider />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
