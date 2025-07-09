import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className="page-contaiter">
        {/*Breadcrumb*/}
        <section className="breadcrumb">
          <div
            className="background-image"
            data-background="img/bg_img/bg_001.jpg"
            data-bg-posx="center"
            data-bg-posy="center"
            data-bg-overlay={4}
          />
          <div className="breadcrumb-content">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="breadcrumb-title">About Us</h1>
                  <nav className="breadcrumb-link">
                    <span>
                      <a href="home.html">Home</a>
                    </span>
                    <span>About Us</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Breadcrumb*/}
        {/*About*/}
        <section className="sec-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-7 col-lg-6 d-flex mb-sm-5">
                <div className="align-self-center">
                  <h2>Welcome to Mazaar Store!</h2>
                  <p className="large">
                    Mazaar Shop is a premium HTML template designed and
                    develoved from the ground up with the sole purpose of
                    helping you create an astonishing, the beautiful and user
                    friendly website that will boost your product’s sales.
                  </p>
                  <p className="color--dark text--bold">
                    The theme design package provides a complete Ecommerce theme
                    set for your online store according to your desired theme.
                    This includes all Ecommerce themes that are required for
                    your online store's successful implementation.
                  </p>
                  <a href="#" className="btn btn--primary space-t--1">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-5 col-lg-6">
                <img src="img/categories/collection_006.jpg" alt />
              </div>
            </div>
          </div>
        </section>
        {/*End About*/}
      </div>

      <Footer />
    </div>
  );
};

export default About;
