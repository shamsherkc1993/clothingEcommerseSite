import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg--dark">
      {/*Footer Widget Bar*/}
      <section className="footer-widget-area">
        <div className="container">
          <div className="row">
            <div className="footer-widget col-lg-3 col-12 mb-lg-0 mb-4 pr-lg-4">
              <img
                className="footer-logo mb-4"
                src="img/logo--light.png"
                alt="Mullar"
              />
              <p>
                Mazaar is a Mulltipurpose Ecommerce Template, The spread of
                computers and layout programmes thus made dummy text better
                known.
              </p>
              <ul>
                <li>
                  <i className="fa fa-phone" />
                  <span>+42 (0) 123 456 7890</span>
                </li>
                <li>
                  <i className="fa fa-envelope-open" />
                  <span>sales@mazaar.com</span>
                </li>
              </ul>
            </div>
            <div className="footer-widget col-sm-4 col-md-4 col-lg-2 col-12 mb-lg-0 mb-4">
              <h6 className="footer-widget-title">Information</h6>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">My account</a>
                </li>
                <li>
                  <a href="#">Wishlist</a>
                </li>
              </ul>
            </div>
            <div className="footer-widget col-sm-4 col-md-4 col-lg-2 col-12 mb-lg-0 mb-4">
              <h6 className="footer-widget-title">Usefull Links</h6>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Shipping Information</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Condition</a>
                </li>
                <li>
                  <a href="#">Cart</a>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
                <li>
                  <a href="#">My account</a>
                </li>
                <li>
                  <a href="#">Order Tracking</a>
                </li>
              </ul>
            </div>
            <div className="footer-widget col-sm-4 col-md-4 col-lg-2 col-12 mb-lg-0 mb-4">
              <h6 className="footer-widget-title">Our Link</h6>
              <ul>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">Fashion</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Brand</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Beauty</a>
                </li>
              </ul>
            </div>
            <div className="footer-widget col-lg-3 col-12 mb-lg-0 mb-3">
              <h6 className="footer-widget-title">Signup for Newsletter</h6>
              <form className="pt-2">
                <p>
                  Sign up for our newsletter to get the latest news,
                  announcements and special
                </p>
                <div className="form-field-wrapper">
                  <input
                    className="newsletter-input form-full"
                    placeholder="Email Address"
                    type="email"
                  />
                  <button
                    className="newsletter-btn btn btn--primary"
                    type="submit"
                  >
                    Go
                  </button>
                </div>
              </form>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin-square" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Footer Copyright Bar*/}
      <section className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-left">
              <p className="footer-copyright">
                © 2018 Mazaar Shop, Template by{" "}
                <a href="http://nileforest.com/" target="_blank">
                  Nileforest
                </a>
              </p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <img src="img/payment_logos.png" alt="payment logos" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
