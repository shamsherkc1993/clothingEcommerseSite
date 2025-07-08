import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonials = () => {
  return (
    <section className="sec-padding bg--secondary">
      <div className="container">
        <div className="page-head">
          <span className="page-sub-title">Testimonials</span>
          <h2 className="page-title">Our Customer Say</h2>
        </div>
      </div>
      {/*Customer Review*/}
      <div className="container-fluid customer-review-section">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          items={4}
          nav={false}
          dots={false}
          autoplay={true}
          autoplayTimeout={2000}
          autoplayHoverPause={true}
        >
          <div className="item">
            <div className="review-item">
              <a href="#" className="review-author-name">
                Ronald Dahi
              </a>
              <div className="review-ratting">
                <div
                  className="star-rating"
                  itemProp="reviewRating"
                  itemScope
                  itemType="http://schema.org/Rating"
                  title="Rated 4 out of 5"
                >
                  <span style={{ width: "60%" }} />
                </div>
                <a href="#" className="product-rating-count">
                  <span className="count">(3)</span>
                </a>
              </div>
              <h5 className="review-title">Excellent Product</h5>
              <p className="review-description">
                Yeah, I am crazy. Ok. May be I am. But I prefer to be crazy than
                being a dummy.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="review-item">
              <a href="#" className="review-author-name">
                Logan Villeda
              </a>
              <div className="review-ratting">
                <div
                  className="star-rating"
                  itemProp="reviewRating"
                  itemScope
                  itemType="http://schema.org/Rating"
                  title="Rated 4 out of 5"
                >
                  <span style={{ width: "100%" }} />
                </div>
                <a href="#" className="product-rating-count">
                  <span className="count">(5)</span>
                </a>
              </div>
              <h5 className="review-title">Great</h5>
              <p className="review-description">Thumbs Up! 👍</p>
            </div>
          </div>
          <div className="item">
            <div className="review-item">
              <a href="#" className="review-author-name">
                Mariam Phegley
              </a>
              <div className="review-ratting">
                <div
                  className="star-rating"
                  itemProp="reviewRating"
                  itemScope
                  itemType="http://schema.org/Rating"
                  title="Rated 4 out of 5"
                >
                  <span style={{ width: "100%" }} />
                </div>
                <a href="#" className="product-rating-count">
                  <span className="count">(5)</span>
                </a>
              </div>
              <h5 className="review-title">Our Love it. Thanks</h5>
              <p className="review-description">
                There's plenty of money out there. They print more every day.
                But this ticket, there's only five of them in the whole world.!
              </p>
            </div>
          </div>
          <div className="item">
            <div className="review-item">
              <a href="#" className="review-author-name">
                Joana Soltis
              </a>
              <div className="review-ratting">
                <div
                  className="star-rating"
                  itemProp="reviewRating"
                  itemScope
                  itemType="http://schema.org/Rating"
                  title="Rated 4 out of 5"
                >
                  <span style={{ width: "100%" }} />
                </div>
                <a href="#" className="product-rating-count">
                  <span className="count">(5)</span>
                </a>
              </div>
              <h5 className="review-title">Love This Product</h5>
              <p className="review-description">
                I love feeding my dog a healthy food that he loves to eat! He
                has severe food intolerances to red meat and dairy!
              </p>
            </div>
          </div>
          <div className="item">
            <div className="review-item">
              <a href="#" className="review-author-name">
                Francie Maris
              </a>
              <div className="review-ratting">
                <div
                  className="star-rating"
                  itemProp="reviewRating"
                  itemScope
                  itemType="http://schema.org/Rating"
                  title="Rated 4 out of 5"
                >
                  <span style={{ width: "100%" }} />
                </div>
                <a href="#" className="product-rating-count">
                  <span className="count">(5)</span>
                </a>
              </div>
              <h5 className="review-title">My Favorite Product!</h5>
              <p className="review-description">My Favorite Product!</p>
            </div>
          </div>
        </OwlCarousel>
      </div>
      {/*End Customer Review*/}
      {/*Testimonials*/}
      <div className="container customer-testimonials-section">
        <div className="row">
          <div className="col-lg-8 mx-lg-auto">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              items={1}
              nav={false}
              dots={false}
              autoplay={true}
              autoplayTimeout={80000}
            >
              <div className="item">
                <div className="testimonials-item">
                  <div className="testimonials-icon">
                    <i className="ti-quote-left" />
                  </div>
                  <p className="testimonials-quote">
                    “There's plenty of money out there. They print more every
                    day. But this ticket, there's only five of them in the whole
                    world, and that's all there's ever going to be. Only a dummy
                    would give this up for something as common money. Are you a
                    dummy?”
                  </p>
                  <div className="testimonials-people">
                    <h6 className="testimonials-people-title">
                      Anthony T. Hincks
                    </h6>
                    <span className="testimonials-people-sub_title">
                      (Apple Founder)
                    </span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonials-item">
                  <div className="testimonials-icon">
                    <i className="ti-quote-left" />
                  </div>
                  <p className="testimonials-quote">
                    “So, what if, instead of thinking about solving your whole
                    life, you just think about adding additional good things.
                    One at a time. Just let your pile of good things grow”
                  </p>
                  <div className="testimonials-people">
                    <h6 className="testimonials-people-title">Nicki Golden</h6>
                    <span className="testimonials-people-sub_title">
                      (Microsoft Ceo)
                    </span>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
      {/*End Testimonials*/}
    </section>
  );
};

export default Testimonials;
