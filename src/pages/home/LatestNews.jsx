import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const LatestNews = () => {
  return (
    <section className="sec-padding-t">
      <div className="container">
        <div className="page-head">
          <span className="page-sub-title">New Trends</span>
          <h2 className="page-title">Latest News</h2>
        </div>
      </div>
      <div className="container">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          items={3}
          nav={false}
          dots={false}
          autoplay={true}
          autoplayTimeout={3000}
        >
          {/*Item*/}
          <div className="item">
            <div className="blog-item">
              <div className="blog-item-image">
                <a href="blog_single.html" className="blog-img-link">
                  <img src="img/blog_img/001.jpg" alt="blog image" />
                </a>
              </div>
              <div className="blog-item-content">
                <div className="tag">
                  <a href="#">Fashion</a>
                  <a href="#">Cupple</a>
                </div>
                <h4 className="blog-title">
                  <a href="blog_single.html">
                    Effective Ways To Overcome Man Fashion’s
                  </a>
                </h4>
                <p className="info">
                  <span>
                    by <a href="#">Admin</a>
                  </span>
                  <span>23 June 2018</span>
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="item">
            <div className="blog-item">
              <div className="blog-item-image">
                <a href="blog_single.html" className="blog-img-link">
                  <img src="img/blog_img/002.jpg" alt="blog image" />
                </a>
              </div>
              <div className="blog-item-content">
                <div className="tag">
                  <a href="#">River</a>
                </div>
                <h4 className="blog-title">
                  <a href="blog_single.html">
                    Summer Kids Collection Launched 2019
                  </a>
                </h4>
                <p className="info">
                  <span>
                    by <a href="#">Admin</a>
                  </span>
                  <span>15 April 2018</span>
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="item">
            <div className="blog-item">
              <div className="blog-item-image">
                <a href="blog_single.html" className="blog-img-link">
                  <img src="img/blog_img/003.jpg" alt="blog image" />
                </a>
              </div>
              <div className="blog-item-content">
                <div className="tag">
                  <a href="#">Women</a>
                </div>
                <h4 className="blog-title">
                  <a href="blog_single.html">
                    Huge Saving Limited Offer period
                  </a>
                </h4>
                <p className="info">
                  <span>
                    by <a href="#">User</a>
                  </span>
                  <span>08 March 2018</span>
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="item">
            <div className="blog-item">
              <div className="blog-item-image">
                <a href="blog_single.html" className="blog-img-link">
                  <img src="img/blog_img/004.jpg" alt="blog image" />
                </a>
              </div>
              <div className="blog-item-content">
                <div className="tag">
                  <a href="#">Women</a>
                  <a href="#">Car</a>
                </div>
                <h4 className="blog-title">
                  <a href="blog_single.html">
                    Effective Ways To Overcome Man Fashion’s
                  </a>
                </h4>
                <p className="info">
                  <span>
                    by <a href="#">Admin</a>
                  </span>
                  <span>31 January 2018</span>
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="item">
            <div className="blog-item">
              <div className="blog-item-image">
                <a href="blog_single.html" className="blog-img-link">
                  <img src="img/blog_img/005.jpg" alt="blog image" />
                </a>
              </div>
              <div className="blog-item-content">
                <div className="tag">
                  <a href="#">Women</a>
                </div>
                <h4 className="blog-title">
                  <a href="blog_single.html">
                    Effective Ways To Overcome Man Fashion’s
                  </a>
                </h4>
                <p className="info">
                  <span>
                    by <a href="#">Admin</a>
                  </span>
                  <span>04 January 2018</span>
                </p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default LatestNews;
