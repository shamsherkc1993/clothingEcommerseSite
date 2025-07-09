import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Contact = () => {
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
                  <h1 className="breadcrumb-title">Contact Us</h1>
                  <nav className="breadcrumb-link">
                    <span>
                      <a href="home.html">Home</a>
                    </span>
                    <span>Contact Us</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Breadcrumb*/}
        {/*Contact Form & Info*/}
        <section className="sec-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 className="page-title">Get in touch</h2>
                <form className="Contact-form">
                  <div className="form-field-wrapper">
                    <label>
                      Your Name<span className="required">*</span>
                    </label>
                    <input
                      id="author"
                      className="input--lg form-full"
                      name="author"
                      placeholder="Enter Your Name"
                      defaultValue
                      size={30}
                      aria-required="true"
                      required
                      type="text"
                    />
                  </div>
                  <div className="form-field-wrapper">
                    <label>
                      Your Email<span className="required">*</span>
                    </label>
                    <input
                      id="author-email"
                      className="input--lg form-full"
                      name="author"
                      placeholder="Enter Your Email"
                      defaultValue
                      size={30}
                      aria-required="true"
                      required
                      type="email"
                    />
                  </div>
                  <div className="form-field-wrapper">
                    <label>
                      Your subject<span className="required">*</span>
                    </label>
                    <input
                      id="subject"
                      className="input--lg form-full"
                      name="author"
                      placeholder="Enter Subject"
                      defaultValue
                      size={30}
                      aria-required="true"
                      required
                      type="text"
                    />
                  </div>
                  <div className="form-field-wrapper">
                    <label>
                      Comments<span className="required">*</span>
                    </label>
                    <textarea
                      id="comment"
                      className="input--lg form-full"
                      name="comment"
                      placeholder="Message"
                      cols={45}
                      rows={8}
                      aria-required="true"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-field-wrapper">
                    <input
                      name="submit"
                      id="submit"
                      className="submit btn btn--lg btn--primary"
                      defaultValue="Send Message"
                      type="submit"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-5 offset-md-1">
                <h2 className="page-title">Contact info</h2>
                <div className="contact-information">
                  <div className="form-field-wrapper">
                    <label>Postal Address</label>
                    <p>
                      29 Shadow Brook Court Warwick,
                      <br />
                      RI 02886
                    </p>
                  </div>
                  <div className="form-field-wrapper">
                    <label>Mazaar Ltd</label>
                    <p>
                      389 Shady Ave.Winston Salem,
                      <br />
                      NC 27103
                    </p>
                  </div>
                  <div className="form-field-wrapper">
                    <label>Contact Information</label>
                    <p>
                      <i className="ti-email left" />
                      info@mazaarshop.com
                      <br />
                      <i className="ti-headphone-alt left" />
                      +74 5 9378 6234
                    </p>
                  </div>
                  <hr />
                  <div className="form-field-wrapper">
                    <label>Follow Us</label>
                    <ul className="social large">
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
            </div>
          </div>
        </section>
        {/*End Contact Form & Info*/}
        {/*Map*/}
        <section id="my-map" style={{ width: "100%", minHeight: 400 }} />
        {/*End Map*/}
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
