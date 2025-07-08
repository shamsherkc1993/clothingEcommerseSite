import React from "react";
const BestSeller = () => {
  return (
    <section className="sec-padding">
      <div className="container">
        <div className="page-head">
          <span className="page-sub-title">Weekly Top</span>
          <h2 className="page-title">Best Seller</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/*Item*/}
          <div className="prodct-item-element col-sm-6 col-md-4 col-lg-3">
            <div className="product-item">
              {/*Product Img*/}
              <div className="product-item-img">
                {/*Image*/}
                <a className="product-item-img-link">
                  <img src="img/products/01/01.jpg" alt="Product Item" />
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
                {/*Labels*/}
                <div className="product-labels">
                  <span className="product-label label-hot">Hot</span>
                </div>
              </div>
              {/*Product Content*/}
              <div className="product-item-content">
                <div className="tag">
                  <a href="#">Minimal</a>
                </div>
                <a href="product_detail.html" className="product-item-title">
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
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="prodct-item-element col-sm-6 col-md-4 col-lg-3">
            <div className="product-item">
              {/*Product Img*/}
              <div className="product-item-img">
                {/*Image*/}
                <a className="product-item-img-link">
                  <img src="img/products/03/01.jpg" alt="Product Item" />
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
                <a href="product_detail.html" className="product-item-title">
                  <span>Short Sleeve Blouse</span>
                </a>
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
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="prodct-item-element col-sm-6 col-md-4 col-lg-3">
            <div className="product-item">
              {/*Product Img*/}
              <div className="product-item-img">
                {/*Image*/}
                <a className="product-item-img-link">
                  <img src="img/products/09/01.jpg" alt="Product Item" />
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
                {/*Labels*/}
                <div className="product-labels">
                  <span className="product-label label-soldout">Sold Out</span>
                </div>
              </div>
              {/*Product Content*/}
              <div className="product-item-content">
                <div className="tag">
                  <a href="#">Minimal</a>
                </div>
                <a href="product_detail.html" className="product-item-title">
                  <span>Short Sleeve Blouse</span>
                </a>
                <p className="product-item-price">
                  <span className="product-price-amount">
                    <span>
                      <span className="product-price-currency-symbol">$</span>
                      59.99
                    </span>
                  </span>
                  –
                  <span className="product-price-amount">
                    <span>
                      <span className="product-price-currency-symbol">$</span>
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
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="prodct-item-element col-sm-6 col-md-4 col-lg-3">
            <div className="product-item">
              {/*Product Img*/}
              <div className="product-item-img">
                {/*Image*/}
                <a className="product-item-img-link">
                  <img src="img/products/10/01.jpg" alt="Product Item" />
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
                <a href="product_detail.html" className="product-item-title">
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
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="prodct-item-element col-sm-6 col-md-4 col-lg-3">
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
                <a href="product_detail.html" className="product-item-title">
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
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="prodct-item-element col-sm-6 col-md-4 col-lg-3">
            <div className="product-item">
              {/*Product Img*/}
              <div className="product-item-img">
                {/*Image*/}
                <a className="product-item-img-link">
                  <img src="img/products/12/01.jpg" alt="Product Item" />
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
                {/*Labels*/}
                <div className="product-labels">
                  <span className="product-label label-sale">-40%</span>
                </div>
              </div>
              {/*Product Content*/}
              <div className="product-item-content">
                <div className="tag">
                  <a href="#">Minimal</a>
                </div>
                <a href="product_detail.html" className="product-item-title">
                  <span>Short Sleeve Blouse</span>
                </a>
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
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="prodct-item-element col-sm-6 col-md-4 col-lg-3">
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
                <a href="product_detail.html" className="product-item-title">
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
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="prodct-item-element col-sm-6 col-md-4 col-lg-3">
            <div className="product-item">
              {/*Product Img*/}
              <div className="product-item-img">
                {/*Image*/}
                <a className="product-item-img-link">
                  <img src="img/products/14/01.jpg" alt="Product Item" />
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
                {/*Labels*/}
                <div className="product-labels">
                  <span className="product-label label-new">New</span>
                  <span className="product-label label-hot">Hot</span>
                </div>
              </div>
              {/*Product Content*/}
              <div className="product-item-content">
                <div className="tag">
                  <a href="#">Minimal</a>
                </div>
                <a href="product_detail.html" className="product-item-title">
                  <span>Short Sleeve Blouse</span>
                </a>
                <p className="product-item-price">
                  <span className="product-price-amount">
                    <span>
                      <span className="product-price-currency-symbol">$</span>
                      59.99
                    </span>
                  </span>
                  –
                  <span className="product-price-amount">
                    <span>
                      <span className="product-price-currency-symbol">$</span>
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
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <a href="#" className="btn btn--primary">
          View More
        </a>
      </div>
    </section>
  );
};

export default BestSeller;
