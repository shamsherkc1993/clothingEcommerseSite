import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const BrandSlider = () => {
  return (
    <section className="sec-padding">
      <div className="container">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          items={7}
          nav={false}
          dots={false}
          autoplay={true}
          autoplayTimeout={3000}
        >
          {/*Item*/}
          <div className="item">
            <div className="brand-item">
              <a>
                <img src="img/brand/001.png" alt="brand" />
              </a>
            </div>
          </div>
          {/*Item*/}
          <div className="item">
            <div className="brand-item">
              <a>
                <img src="img/brand/002.png" alt="brand" />
              </a>
            </div>
          </div>
          {/*Item*/}
          <div className="item">
            <div className="brand-item">
              <a>
                <img src="img/brand/003.png" alt="brand" />
              </a>
            </div>
          </div>
          {/*Item*/}
          <div className="item">
            <div className="brand-item">
              <a>
                <img src="img/brand/004.png" alt="brand" />
              </a>
            </div>
          </div>
          {/*Item*/}
          <div className="item">
            <div className="brand-item">
              <a>
                <img src="img/brand/005.png" alt="brand" />
              </a>
            </div>
          </div>
          {/*Item*/}
          <div className="item">
            <div className="brand-item">
              <a>
                <img src="img/brand/006.png" alt="brand" />
              </a>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default BrandSlider;
