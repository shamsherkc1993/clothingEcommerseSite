import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SingleProduct = () => {
  return (
    <div>
      <Header />
      <div>
        &lt;&gt;
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
                  <h1 className="breadcrumb-title">Man Clothing Fashion</h1>
                  <nav className="breadcrumb-link">
                    <span>
                      <a href="home.html">Home</a>
                    </span>
                    <span>
                      <a href="home.html">Categories</a>
                    </span>
                    <span>Back In Stock Clothes</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Breadcrumb*/}
        {/*Product Content*/}
        <section className="sec-padding--md">
          {/* Product */}
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="product-page-gallery">
                  <div className="product-gallery-media mfp-gallery-popup">
                    <div className="product-media-slider">
                      <div
                        className="product-gallery-image mfp-gallery-popup-link"
                        data-mfp-src="img/products/13/01.jpg"
                      >
                        <img src="img/products/13/01.jpg" alt="mazaar" />
                      </div>
                    </div>
                  </div>
                  <div className="product-gallery-media-thumb">
                    <div className="product-media-thumb-slider d-flex">
                      <a className="product-gallery-image">
                        <img src="img/products/13/01.jpg" alt="mazaar" />
                      </a>
                      <a className="product-gallery-image">
                        <img src="img/products/13/02.jpg" alt="mazaar" />
                      </a>
                      <a className="product-gallery-image">
                        <img src="img/products/13/03.jpg" alt="mazaar" />
                      </a>
                      <a className="product-gallery-image">
                        <img src="img/products/13/04.jpg" alt="mazaar" />
                      </a>
                      <a className="product-gallery-image">
                        <img src="img/products/13/05.jpg" alt="mazaar" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="product-page-content">
                  {/*Brand Name*/}
                  {/*<div class="tag brand-name"><a href="#">Mazaar</a></div>*/}
                  {/*Product Title*/}
                  <h3 className="product-item-title">
                    Man Ruched Floral Applique Tee
                  </h3>
                  {/*Product Ratting*/}
                  <div className="product-rating">
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
                      <span className="count">3</span> Reviews
                    </a>
                  </div>
                  {/*Product Price*/}
                  <p className="product-item-price">
                    <span className="product-price-amount">
                      <del>
                        <span className="product-price-currency-symbol">$</span>
                        59.99
                      </del>
                      <ins>
                        <span className="product-price-currency-symbol">$</span>
                        39.99
                      </ins>
                    </span>
                  </p>
                  {/*Product Description*/}
                  <div className="product-description">
                    <p>
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries. who seeks after it and wants to
                      have it, simply because it is pain.
                    </p>
                  </div>
                  {/*Product Variations Form*/}
                  <form className="product-variations-form" autoComplete="off">
                    {/*Select Color*/}
                    <div className="product-variations-child">
                      <label>Color</label>
                      <div className="product-color-choose">
                        <div>
                          <input
                            data-image="black"
                            type="radio"
                            id="black"
                            name="color"
                            defaultValue="black"
                            defaultChecked
                          />
                          <label htmlFor="black">
                            <span style={{ backgroundColor: "#333333" }} />
                          </label>
                        </div>
                        <div>
                          <input
                            data-image="blue"
                            type="radio"
                            id="blue"
                            name="color"
                            defaultValue="blue"
                          />
                          <label htmlFor="blue">
                            <span style={{ backgroundColor: "#7eabe9" }} />
                          </label>
                        </div>
                        <div>
                          <input
                            data-image="orange"
                            type="radio"
                            id="orange"
                            name="color"
                            defaultValue="orange"
                          />
                          <label htmlFor="orange">
                            <span style={{ backgroundColor: "#f27123" }} />
                          </label>
                        </div>
                        <div>
                          <input
                            data-image="gray"
                            type="radio"
                            id="gray"
                            name="color"
                            defaultValue="gray"
                          />
                          <label htmlFor="gray">
                            <span style={{ backgroundColor: "#d1d1d1" }} />
                          </label>
                        </div>
                        <div>
                          <input
                            data-image="green"
                            type="radio"
                            id="green"
                            name="color"
                            defaultValue="green"
                          />
                          <label htmlFor="green">
                            <span style={{ backgroundColor: "#27af9a" }} />
                          </label>
                        </div>
                      </div>
                    </div>
                    {/*Select Size*/}
                    <div className="product-variations-child">
                      <label>Size</label>
                      <div className="product-select-size">
                        <label htmlFor="size_xs">
                          <input
                            type="checkbox"
                            id="size_xs"
                            name="size"
                            defaultValue="xs"
                          />
                          XS
                        </label>
                        <label htmlFor="size_sm">
                          <input
                            type="checkbox"
                            id="size_sm"
                            name="size"
                            defaultValue="sm"
                            disabled
                          />
                          Small
                        </label>
                        <label htmlFor="size_md">
                          <input
                            type="checkbox"
                            id="size_md"
                            name="size"
                            defaultValue="md"
                          />
                          Mediam
                        </label>
                        <label htmlFor="size_lg">
                          <input
                            type="checkbox"
                            id="size_lg"
                            name="size"
                            defaultValue="lg"
                          />
                          Large
                        </label>
                        <label htmlFor="size_xl">
                          <input
                            type="checkbox"
                            id="size_xl"
                            name="size"
                            defaultValue="xl"
                          />
                          XL
                        </label>
                        <label htmlFor="size_xxl">
                          <input
                            type="checkbox"
                            id="size_xxl"
                            name="size"
                            defaultValue="xxl"
                          />
                          XXL
                        </label>
                      </div>
                      <a
                        className="product-size-guide mfp-link-popup"
                        href="img/size-chart.png"
                      >
                        <i className="fa fa-question-circle left" />
                        Size guide
                      </a>
                    </div>
                    {/*Quantity and Adda to cart*/}
                    <div className="product-variations-child">
                      <label>Qty</label>
                      <div id="quantity_1234" className="product-quantity">
                        <span
                          data-value="-"
                          className="quantity-btn quantityMinus"
                        >
                          <i className="ti-minus" />
                        </span>
                        <input
                          className="quantity input--lg"
                          step={1}
                          min={1}
                          max={9}
                          name="quantity"
                          defaultValue={1}
                          title="Quantity"
                          type="number"
                        />
                        <span
                          data-value="+"
                          className="quantity-btn quantityPlus"
                        >
                          <i className="ti-plus" />
                        </span>
                      </div>
                      <button
                        type="submit"
                        name="add-to-cart"
                        value="add_to_cart"
                        className="single_add_to_cart_button btn btn--primary"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </form>
                  {/*Product Add to Button Links*/}
                  <div className="product-add-to-button">
                    <a className="product-add-to-whishlist" href="#">
                      <i className="ti-heart left" />
                      Add to Wishlist
                    </a>
                    <a className="product-add-to-whishlist" href="#">
                      <i className="ti-reload left" />
                      Add to Compare
                    </a>
                  </div>
                  {/*Product Meta*/}
                  <div className="product-meta">
                    <span>
                      Sku:<span>TMDEMO017</span>
                    </span>
                    <span>
                      Categories:<a href="#">Accessories</a>,
                      <a href="#">Fashion</a>,<a href="#">Man</a>
                    </span>
                    <span>
                      Tags:<a href="#">Man</a>,<a href="#">Cap</a>,
                      <a href="#">Shirt</a>,<a href="#">Gray</a>
                    </span>
                  </div>
                  {/*Product Share*/}
                  <div className="product-share">
                    <span>Share:</span>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=http://nileforest.com/"
                      target="_blank"
                    >
                      <i className="fa fa-facebook left" aria-hidden="true" />
                      Facebook
                    </a>
                    <a
                      href="http://twitter.com/share?url=http://nileforest.com/"
                      target="_blank"
                    >
                      <i className="fa fa-twitter left" aria-hidden="true" />
                      Twitter
                    </a>
                    <a
                      href="http://pinterest.com/pin/create/button/?url=http://nileforest.com/exampleImage.jpg"
                      target="_blank"
                    >
                      <i
                        className="fa fa-pinterest-p left"
                        aria-hidden="true"
                      />
                      Pinterest
                    </a>
                    <a
                      href="http://plus.google.com/share?url=http://nileforest.com/"
                      target="_blank"
                    >
                      <i
                        className="fa fa-google-plus left"
                        aria-hidden="true"
                      />
                      plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Product */}
          {/*Product Tabs*/}
          <div className="container">
            <div className="product-tabs-wrapper">
              {/*Tabs*/}
              <ul className="product-tabs-nav nav" role="tablist">
                <li>
                  <a
                    className="active"
                    href="#tab_description"
                    role="tab"
                    data-toggle="tab"
                    aria-expanded="false"
                  >
                    Description
                  </a>
                </li>
                <li>
                  <a
                    className
                    href="#tab_information"
                    role="tab"
                    data-toggle="tab"
                    aria-expanded="true"
                  >
                    Additional information
                  </a>
                </li>
                <li>
                  <a className href="#tab_reviews" role="tab" data-toggle="tab">
                    Reviews (3)
                  </a>
                </li>
                <li>
                  <a className href="#tab_custom" role="tab" data-toggle="tab">
                    Custom Tab
                  </a>
                </li>
              </ul>
              {/*End Tabs*/}
              {/*Tabs Content*/}
              <div
                id="product-accordian-Content"
                className="product-Content-tabs"
              >
                {/*Description*/}
                <div
                  id="tab_description"
                  role="tabpanel"
                  className="tab-pane fade show active"
                >
                  {/*Header*/}
                  <div id="accrodianOne" className="product-Content-toggle">
                    <a
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Description
                    </a>
                  </div>
                  {/*Body*/}
                  <div
                    id="collapseOne"
                    className="product-tab-Content-body collapse show"
                    aria-labelledby="accrodianOne"
                    data-parent="#product-accordian-Content"
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <p>
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <p>
                      There is no one who loves pain itself, who seeks after it
                      and wants to have it, simply because it is pain.
                    </p>
                  </div>
                </div>
                {/*Additional information*/}
                <div
                  id="tab_information"
                  role="tabpanel"
                  className="tab-pane fade"
                >
                  {/*Header*/}
                  <div id="accrodianTwo" className="product-Content-toggle">
                    <a
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Additional information
                    </a>
                  </div>
                  {/*Body*/}
                  <div
                    id="collapseTwo"
                    className="product-tab-Content-body collapse"
                    aria-labelledby="accrodianTwo"
                    data-parent="#product-accordian-Content"
                  >
                    <div className="detail-table">
                      <table>
                        <tbody>
                          <tr>
                            <th>Color</th>
                            <td>Black, Blue, Orange, Gray, White, Green</td>
                          </tr>
                          <tr>
                            <th>Size</th>
                            <td>XS, Small, Large, Mediam, Small, XL, XXL</td>
                          </tr>
                          <tr>
                            <th>Weight</th>
                            <td>5 kg</td>
                          </tr>
                          <tr>
                            <th>Dimensions</th>
                            <td>60 x 40 x 60 cm</td>
                          </tr>
                          <tr>
                            <th>Washcare</th>
                            <td>Dry Clean</td>
                          </tr>
                          <tr>
                            <th>Composition</th>
                            <td>100% Polyester</td>
                          </tr>
                          <tr>
                            <th>Lining composition</th>
                            <td>Polyester</td>
                          </tr>
                          <tr>
                            <th>Other info</th>
                            <td>
                              Ullamcorper nisl mus integer mollis vestibulu
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/*Reviews */}
                <div id="tab_reviews" role="tabpanel" className="tab-pane fade">
                  {/*Header*/}
                  <div id="accrodianThree" className="product-Content-toggle">
                    <a
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Reviews (3)
                    </a>
                  </div>
                  {/*Body*/}
                  <div
                    id="collapseThree"
                    className="product-tab-Content-body collapse"
                    aria-labelledby="accrodianThree"
                    data-parent="#product-accordian-Content"
                  >
                    <div className="row">
                      {/*Add a Review*/}
                      <div className="col-md-6">
                        <div className="review-form-wrapper">
                          <h4 className="review-title">Add a Review</h4>
                          <p>
                            Your email address will not be published. Required
                            fields are marked *
                          </p>
                          <form id="comment-form" className="comment-form">
                            <div className="form-field-wrapper">
                              <label>Your Rating</label>
                              <p className="stars selected">
                                <span>
                                  <a
                                    className="star-1"
                                    href="javascript:void(0)"
                                  />
                                  <a
                                    className="star-2"
                                    href="javascript:void(0)"
                                  />
                                  <a
                                    className="star-3"
                                    href="javascript:void(0)"
                                  />
                                  <a
                                    className="star-4"
                                    href="javascript:void(0)"
                                  />
                                  <a
                                    className="star-5"
                                    href="javascript:void(0)"
                                  />
                                </span>
                              </p>
                            </div>
                            <div className="form-field-wrapper">
                              <label>
                                Your Review<span className="required">*</span>
                              </label>
                              <textarea
                                id="comment"
                                name="comment"
                                className="form-full"
                                cols={45}
                                rows={10}
                                aria-required="true"
                                required
                                defaultValue={""}
                              />
                            </div>
                            <div className="form-field-wrapper">
                              <label>
                                Name<span className="required">*</span>
                              </label>
                              <input
                                id="author"
                                name="author"
                                className="form-full"
                                defaultValue
                                size={30}
                                aria-required="true"
                                required
                                type="text"
                              />
                            </div>
                            <div className="form-field-wrapper">
                              <label>
                                Email<span className="required">*</span>
                              </label>
                              <input
                                id="email"
                                name="email"
                                className="form-full"
                                defaultValue
                                size={30}
                                aria-required="true"
                                required
                                type="email"
                              />
                            </div>
                            <div className="form-field-wrapper">
                              <input
                                name="submit"
                                id="submit"
                                className="btn btn--primary"
                                defaultValue="Submit"
                                type="submit"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                      {/*Comments*/}
                      <div className="col-md-6">
                        <div className="comments">
                          <h4 className="review-title">
                            3 Review for <span>This Product</span>
                          </h4>
                          <ul className="commentlist">
                            {/*Item*/}
                            <li className="comment-item">
                              <img
                                className="avtar"
                                src="img/avtar.jpg"
                                alt="avtar"
                              />
                              <div className="comment-text">
                                <div
                                  className="star-rating"
                                  itemProp="reviewRating"
                                  itemScope
                                  itemType="http://schema.org/Rating"
                                  title="Rated 4 out of 5"
                                >
                                  <span style={{ width: "80%" }} />
                                </div>
                                <p className="meta">
                                  <strong>James Koster</strong>
                                  <span>–</span>
                                  <time dateTime>August 21, 2018</time>
                                </p>
                                <div className="description">
                                  <p>
                                    when an unknown printer took a galley of
                                    type and scrambled it to make a type
                                    specimen book. It has survived not only five
                                    centuries
                                  </p>
                                </div>
                              </div>
                            </li>
                            {/*Item*/}
                            <li className="comment-item">
                              <img
                                className="avtar"
                                src="img/avtar.jpg"
                                alt="avtar"
                              />
                              <div className="comment-text">
                                <div
                                  className="star-rating"
                                  itemProp="reviewRating"
                                  itemScope
                                  itemType="http://schema.org/Rating"
                                  title="Rated 4 out of 5"
                                >
                                  <span style={{ width: "100%" }} />
                                </div>
                                <p className="meta">
                                  <strong>Michel</strong>
                                  <span>–</span>
                                  <time dateTime>August 21, 2018</time>
                                </p>
                                <div className="description">
                                  <p>Wow Special!</p>
                                </div>
                              </div>
                            </li>
                            {/*Item*/}
                            <li className="comment-item">
                              <img
                                className="avtar"
                                src="img/avtar.jpg"
                                alt="avtar"
                              />
                              <div className="comment-text">
                                <div
                                  className="star-rating"
                                  itemProp="reviewRating"
                                  itemScope
                                  itemType="http://schema.org/Rating"
                                  title="Rated 4 out of 5"
                                >
                                  <span style={{ width: "60%" }} />
                                </div>
                                <p className="meta">
                                  <em>Your comment is awaiting approval</em>
                                </p>
                                <div className="description">
                                  <p>When an unknown printer took a galley!</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Custom Tab*/}
                <div id="tab_custom" role="tabpanel" className="tab-pane fade">
                  {/*Header*/}
                  <div id="accrodianFour" className="product-Content-toggle">
                    <a
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Custom Tab
                    </a>
                  </div>
                  {/*Body*/}
                  <div
                    id="collapseFour"
                    className="product-tab-Content-body collapse"
                    aria-labelledby="accrodianFour"
                    data-parent="#product-accordian-Content"
                  >
                    <div className="row">
                      {/*Add a Review*/}
                      <div className="col-md-5 mb-0 mb-sm-3">
                        <img src="img/blank.png" alt="banner" />
                      </div>
                      {/*Comments*/}
                      <div className="col-md-7 d-flex">
                        <div className="align-self-center">
                          <span className="page-sub-title">New Arrival</span>
                          <h3>Spring Collection 2019</h3>
                          <p className="large">
                            Vibrant color with floral pattern becoming the
                            fashion
                            <br />
                            trending in this summer.
                          </p>
                          <a
                            href="#"
                            className="btn btn--primary btn--sm space-t--1"
                          >
                            More Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Tabs Content*/}
            </div>
          </div>
          {/*End Product Tabs*/}
          {/*Related Product*/}
          <div className="container sec-padding--md">
            <div className="page-head">
              <h2 className="page-title">Related Products</h2>
            </div>
            <div className="product-item-4 owl-carousel owl-theme product-slider">
              {/*Item*/}
              <div className="item">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <a className="product-item-img-link">
                      <img src="img/products/02/01.jpg" alt="Product Item" />
                    </a>
                    {/*Add to Link*/}
                    <div className="add-to-link">
                      <a className="btn btn--primary btn--sm">Add To Cart</a>
                    </div>
                    {/*Hover Icons*/}
                    <div className="hover-product-icon">
                      <div className="product-icon-btn-wrap">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Quick View"
                        >
                          <i className="ti-search" />
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Whishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Compare"
                        >
                          <i className="ti-reload" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*Product Content*/}
                  <div className="product-item-content">
                    <div className="tag">
                      <a href="#">Minimal</a>
                    </div>
                    <a href="#" className="product-item-title">
                      <span>Short Sleeve Blouse</span>
                    </a>
                    <p className="product-item-price">
                      <span className="product-price-amount">
                        <span className="product-price-currency-symbol">$</span>
                        59.99
                      </span>
                    </p>
                    <div className="product-rating">
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
                        <span className="count">3</span> Reviews
                      </a>
                    </div>
                    <p className="product-description">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
              {/*Item*/}
              <div className="item">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <a className="product-item-img-link">
                      <img src="img/products/12/01.jpg" alt="Product Item" />
                    </a>
                    {/*Add to Link*/}
                    <div className="add-to-link">
                      <a className="btn btn--primary btn--sm">Select Option</a>
                    </div>
                    {/*Hover Icons*/}
                    <div className="hover-product-icon">
                      <div className="product-icon-btn-wrap">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Quick View"
                        >
                          <i className="ti-search" />
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Whishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Compare"
                        >
                          <i className="ti-reload" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*Product Content*/}
                  <div className="product-item-content">
                    <div className="tag">
                      <a href="#">Minimal</a>
                    </div>
                    <a href="#" className="product-item-title">
                      <span>Short Sleeve Blouse</span>
                    </a>
                    <p className="product-item-price">
                      <span className="product-price-amount">
                        <del>
                          <span className="product-price-currency-symbol">
                            $
                          </span>
                          59.99
                        </del>
                        <ins>
                          <span className="product-price-currency-symbol">
                            $
                          </span>
                          39.99
                        </ins>
                      </span>
                    </p>
                    <div className="product-rating">
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
                        <span className="count">3</span> Reviews
                      </a>
                    </div>
                    <p className="product-description">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
              {/*Item*/}
              <div className="item">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <a className="product-item-img-link">
                      <img src="img/products/08/01.jpg" alt="Product Item" />
                    </a>
                    {/*Add to Link*/}
                    <div className="add-to-link">
                      <a className="btn btn--primary btn--sm">Add To Cart</a>
                    </div>
                    {/*Hover Icons*/}
                    <div className="hover-product-icon">
                      <div className="product-icon-btn-wrap">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Quick View"
                        >
                          <i className="ti-search" />
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Whishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Compare"
                        >
                          <i className="ti-reload" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*Product Content*/}
                  <div className="product-item-content">
                    <div className="tag">
                      <a href="#">Minimal</a>
                    </div>
                    <a href="#" className="product-item-title">
                      <span>Short Sleeve Blouse</span>
                    </a>
                    <p className="product-item-price">
                      <span className="product-price-amount">
                        <span>
                          <span className="product-price-currency-symbol">
                            $
                          </span>
                          59.99
                        </span>
                      </span>
                      –
                      <span className="product-price-amount">
                        <span>
                          <span className="product-price-currency-symbol">
                            $
                          </span>
                          84.99
                        </span>
                      </span>
                    </p>
                    <div className="product-rating">
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
                        <span className="count">3</span> Reviews
                      </a>
                    </div>
                    <p className="product-description">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
              {/*Item*/}
              <div className="item">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <a className="product-item-img-link">
                      <img src="img/products/04/01.jpg" alt="Product Item" />
                    </a>
                    {/*Add to Link*/}
                    <div className="add-to-link">
                      <a className="btn btn--primary btn--sm">Add To Cart</a>
                    </div>
                    {/*Hover Icons*/}
                    <div className="hover-product-icon">
                      <div className="product-icon-btn-wrap">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Quick View"
                        >
                          <i className="ti-search" />
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Whishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Compare"
                        >
                          <i className="ti-reload" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*Product Content*/}
                  <div className="product-item-content">
                    <div className="tag">
                      <a href="#">Minimal</a>
                    </div>
                    <a href="#" className="product-item-title">
                      <span>Short Sleeve Blouse</span>
                    </a>
                    <p className="product-item-price">
                      <span className="product-price-amount">
                        <span className="product-price-currency-symbol">$</span>
                        59.99
                      </span>
                    </p>
                    <div className="product-rating">
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
                        <span className="count">3</span> Reviews
                      </a>
                    </div>
                    <p className="product-description">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
              {/*Item*/}
              <div className="item">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <a className="product-item-img-link">
                      <img src="img/products/05/01.jpg" alt="Product Item" />
                    </a>
                    {/*Add to Link*/}
                    <div className="add-to-link">
                      <a className="btn btn--primary btn--sm">Add To Cart</a>
                    </div>
                    {/*Hover Icons*/}
                    <div className="hover-product-icon">
                      <div className="product-icon-btn-wrap">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Quick View"
                        >
                          <i className="ti-search" />
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Whishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Compare"
                        >
                          <i className="ti-reload" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*Product Content*/}
                  <div className="product-item-content">
                    <div className="tag">
                      <a href="#">Minimal</a>
                    </div>
                    <a href="#" className="product-item-title">
                      <span>Short Sleeve Blouse</span>
                    </a>
                    <p className="product-item-price">
                      <span className="product-price-amount">
                        <span className="product-price-currency-symbol">$</span>
                        59.99
                      </span>
                    </p>
                    <div className="product-rating">
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
                        <span className="count">3</span> Reviews
                      </a>
                    </div>
                    <p className="product-description">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
              {/*Item*/}
              <div className="item">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <a className="product-item-img-link">
                      <img src="img/products/06/01.jpg" alt="Product Item" />
                    </a>
                    {/*Add to Link*/}
                    <div className="add-to-link">
                      <a className="btn btn--primary btn--sm">Add To Cart</a>
                    </div>
                    {/*Hover Icons*/}
                    <div className="hover-product-icon">
                      <div className="product-icon-btn-wrap">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Quick View"
                        >
                          <i className="ti-search" />
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Whishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Compare"
                        >
                          <i className="ti-reload" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*Product Content*/}
                  <div className="product-item-content">
                    <div className="tag">
                      <a href="#">Minimal</a>
                    </div>
                    <a href="#" className="product-item-title">
                      <span>Short Sleeve Blouse</span>
                    </a>
                    <p className="product-item-price">
                      <span className="product-price-amount">
                        <del>
                          <span className="product-price-currency-symbol">
                            $
                          </span>
                          59.99
                        </del>
                        <ins>
                          <span className="product-price-currency-symbol">
                            $
                          </span>
                          39.99
                        </ins>
                      </span>
                    </p>
                    <div className="product-rating">
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
                        <span className="count">3</span> Reviews
                      </a>
                    </div>
                    <p className="product-description">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
              {/*Item*/}
              <div className="item">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <a className="product-item-img-link">
                      <img src="img/products/07/01.jpg" alt="Product Item" />
                    </a>
                    {/*Add to Link*/}
                    <div className="add-to-link">
                      <a className="btn btn--primary btn--sm">Add To Cart</a>
                    </div>
                    {/*Hover Icons*/}
                    <div className="hover-product-icon">
                      <div className="product-icon-btn-wrap">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Quick View"
                        >
                          <i className="ti-search" />
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Whishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Compare"
                        >
                          <i className="ti-reload" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*Product Content*/}
                  <div className="product-item-content">
                    <div className="tag">
                      <a href="#">Minimal</a>
                    </div>
                    <a href="#" className="product-item-title">
                      <span>Short Sleeve Blouse</span>
                    </a>
                    <p className="product-item-price">
                      <span className="product-price-amount">
                        <span className="product-price-currency-symbol">$</span>
                        59.99
                      </span>
                    </p>
                    <div className="product-rating">
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
                        <span className="count">3</span> Reviews
                      </a>
                    </div>
                    <p className="product-description">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
              {/*Item*/}
              <div className="item">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <a className="product-item-img-link">
                      <img src="img/products/08/01.jpg" alt="Product Item" />
                    </a>
                    {/*Add to Link*/}
                    <div className="add-to-link">
                      <a className="btn btn--primary btn--sm">Select Option</a>
                    </div>
                    {/*Hover Icons*/}
                    <div className="hover-product-icon">
                      <div className="product-icon-btn-wrap">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Quick View"
                        >
                          <i className="ti-search" />
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Whishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Compare"
                        >
                          <i className="ti-reload" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*Product Content*/}
                  <div className="product-item-content">
                    <div className="tag">
                      <a href="#">Minimal</a>
                    </div>
                    <a href="#" className="product-item-title">
                      <span>Short Sleeve Blouse</span>
                    </a>
                    <p className="product-item-price">
                      <span className="product-price-amount">
                        <span>
                          <span className="product-price-currency-symbol">
                            $
                          </span>
                          59.99
                        </span>
                      </span>
                      –
                      <span className="product-price-amount">
                        <span>
                          <span className="product-price-currency-symbol">
                            $
                          </span>
                          84.99
                        </span>
                      </span>
                    </p>
                    <div className="product-rating">
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
                        <span className="count">3</span> Reviews
                      </a>
                    </div>
                    <p className="product-description">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Related Product*/}
        </section>
        {/*End Product Content*/}
      </div>

      <Footer />
    </div>
  );
};

export default SingleProduct;
