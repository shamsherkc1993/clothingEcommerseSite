import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Section1 = () => {
  return (
    <section id="intro" className="intro">
      {/*Slider Hero*/}
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        items={1}
        nav={false}
        dots={false}
        autoplay={true}
        autoplayTimeout={3000}
      >
        {/*Item*/}
        <div
          className="item height-9 sm-height-600px"
          data-slide_theme="light-slide"
        >
          <div
            className="background-image"
            data-background="img/bg_img/img_001.jpg"
            style={{ backgroundImage: "url('img/bg_img/img_001.jpg')" }}
            data-bg-posx="center"
            data-bg-posy="top"
            data-bg-overlay={0}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="intro-caption intro-caption-middel text-left intro-caption-fade sec-padding--lg">
                  <p className="intro-subtitle"># Women Fashion</p>
                  <h1 className="intro-title">
                    New Women Collection
                    <br />
                    Made for her
                  </h1>
                  <a href="#" className="btn btn--primary space--1">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Item*/}
        <div
          className="item section-dark height-9 sm-height-600px"
          data-slide_theme="dark-slide"
        >
          <div
            className="background-image"
            data-background="img/bg_img/img_002.jpg"
            style={{ backgroundImage: "url('img/bg_img/img_002.jpg')" }}
            data-bg-posx="center"
            data-bg-posy="top"
            data-bg-overlay={1}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 ml-md-auto">
                <div className="intro-caption intro-caption-middel text-left intro-caption-fade sec-padding--lg">
                  <p className="intro-subtitle"># Man Fashion</p>
                  <h1 className="intro-title">
                    Mens Fashion 2019
                    <br />
                    &amp; Collection
                  </h1>
                  <a href="#" className="btn btn--primary space--1">
                    Shop Now
                  </a>
                </div>
                &gt;
              </div>
            </div>
          </div>
        </div>
        {/*Item*/}
        <div
          className="item height-9 sm-height-600px"
          data-slide_theme="light-slide"
        >
          <div
            className="background-image"
            data-background="img/bg_img/img_003.jpg"
            style={{ backgroundImage: "url('img/bg_img/img_003.jpg')" }}
            data-bg-posx="right"
            data-bg-posy="top"
            data-bg-overlay={0}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="intro-caption intro-caption-middel text-left intro-caption-fade sec-padding--lg">
                  <p className="intro-subtitle">Up To 50% Off</p>
                  <h1 className="intro-title">
                    New Arrival Autumn
                    <br />
                    Collection
                  </h1>
                  <a href="#" className="btn btn--primary space--1">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Item*/}
        <div
          className="item section-dark height-9 sm-height-600px"
          data-slide_theme="dark-slide"
        >
          <div
            className="background-image bg--primary"
            data-background="img/bg_img/img_004.jpg"
            style={{ backgroundImage: "url('img/bg_img/img_004.jpg')" }}
            data-bg-posx="center"
            data-bg-posy="top"
            data-bg-overlay={6}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 mx-md-auto">
                <div className="intro-caption intro-caption-middel text-center intro-caption-fade sec-padding--lg">
                  <p className="intro-subtitle"># Weekend Special Sale</p>
                  <img
                    className="intro-caption-img"
                    src="img/slide_img/caption_001.png"
                    alt="Summer Sale"
                  />
                  <a href="#" className="btn btn--white space--1">
                    Get Offers
                  </a>
                </div>
                &gt;
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
      {/*End Slider Hero*/}
    </section>
  );
};

export default Section1;
