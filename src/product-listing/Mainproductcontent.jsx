import React, { useState } from "react";

const Mainproductcontent = () => {
  const [productlistview, setproductlistview] = useState(false);
  const [filter, setFilter] = useState(false);
  const [accordain, setAccordian] = useState(false);

  console.log("result", productlistview);
  return (
    <section className="sec-padding--md">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-12 order-lg-2">
            {/*Product Filter*/}
            <div className="product-filter-content">
              <div className="product-filter-content-inner">
                {/*Product Showing Text*/}
                <p>Showing 18 of 22 Results</p>
                {/*Product Ouder By*/}
                <form className="ordering">
                  <select name="orderby" className="orderby">
                    <option value="menu_order" selected="selected">
                      Default Sorting
                    </option>
                    <option value="popularity">Sort by Popularity</option>
                    <option value="rating">Sort by Average rating</option>
                    <option value="date">Sort by Newness</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                </form>
                {/* Product Filter */}
                <div
                  className={
                    filter == false
                      ? "product-select-filter"
                      : "product-select-filter filter-active"
                  }
                >
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      setFilter(true);
                    }}
                    className={
                      filter == false
                        ? "filter-menu-btn btn btn--gray"
                        : "filter-menu-btn btn btn--gray active"
                    }
                  >
                    <i className="ti-filter left" />
                    Filter
                  </a>
                  {/*Filter Dropdown Menu*/}
                  <div
                    className={
                      filter == false
                        ? "filterbar-dropdown-menu"
                        : "filterbar-dropdown-menu filter-dropdown-menu-open"
                    }
                  >
                    <div className="filterbar-dropdown-inner">
                      <h4 className="widget-title">Filter</h4>
                      <span className="filter-close-icon">
                        <i
                          className="ti-close"
                          onClick={() => {
                            setFilter(!filter);
                          }}
                        />
                      </span>
                      <form>
                        <div className="form-field-wrapper">
                          <label>Categories</label>
                          <select name="filter_categries" className="form-full">
                            <option value>Select a Category</option>
                            <option value="accessories">Accessories</option>
                            <option value="bags">Bags</option>
                            <option value="footwear">Footwear</option>
                            <option value="man">Man</option>
                            <option value="woman">Woman</option>
                            <option value="kids">Kids</option>
                          </select>
                        </div>
                        <div className="form-field-wrapper">
                          <label>Color</label>
                          <select name="filter_color" className="form-full">
                            <option value>Any Color</option>
                            <option value="grey">Grey</option>
                            <option value="navyblue">NavyBlue</option>
                          </select>
                        </div>
                        <div className="form-field-wrapper">
                          <label>Size</label>
                          <select name="filter_size" className="form-full">
                            <option value>Any Size</option>
                            <option value="large">Large</option>
                            <option value="medium">Medium</option>
                            <option value="small">Small</option>
                          </select>
                        </div>
                        <div className="form-field-wrapper">
                          <label>Price</label>
                          <div className="price-range-slider" />
                          <div className="price-range-amount">
                            <input
                              className="price_range_min"
                              name="price_range_min"
                              defaultValue
                              data-min={140}
                              placeholder="Min price"
                              style={{ display: "none" }}
                              type="text"
                            />
                            <input
                              className="price_range_max"
                              name="price_range_max"
                              defaultValue
                              data-max={1100}
                              placeholder="Max price"
                              style={{ display: "none" }}
                              type="text"
                            />
                            <div className="price-range-from-to" />
                          </div>
                          <button className="btn btn--secondary btn--full">
                            Filter
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/*End Filter Dropdown Menu*/}
                </div>
                {/*Product List/Grid view*/}
                <div className="product-view-switcher">
                  <label className="d-none" />
                  <div
                    className={
                      productlistview == false
                        ? "product-view-icon product-grid-switcher product-view-icon-active"
                        : "product-view-icon product-grid-switcher"
                    }
                  >
                    <a
                      href="javascript:void(0);"
                      onClick={() => {
                        setproductlistview(false);
                      }}
                    >
                      <i className="fa ti-layout-grid2" aria-hidden="true" />
                    </a>
                  </div>
                  <div
                    className={
                      productlistview == true
                        ? "product-view-icon product-grid-switcher product-view-icon-active"
                        : "product-view-icon product-grid-switcher"
                    }
                  >
                    <a
                      href="javascript:void(0);"
                      onClick={() => {
                        setproductlistview(true);
                      }}
                    >
                      <i className="fa ti-view-list-alt" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*End Product Filter*/}
            {/*Product Items*/}
            <div
              className={
                productlistview == false
                  ? "row product-list-item"
                  : "row product-list-item product-list-view"
              }
            >
              {/*Item*/}
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
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
                  </div>
                  {/*Product Content*/}
                  <div className="product-item-content">
                    <div className="tag">
                      <a href="#">Minimal</a>
                    </div>
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
                      <span>Short Sleeve Blouse</span>
                    </a>
                    <p className="product-item-price">
                      <span className="product-price-amount">
                        <span className="product-price-currency-symbol">$</span>
                        59.99
                      </span>
                    </p>
                    <div className="product-rating">
                      <div className="star-rating" title="Rated 4 out of 5">
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
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
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <a className="product-item-img-link">
                      <img src="img/products/03/01.jpg" alt="Product Item" />
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
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
                      <span>Short Sleeve Blouse</span>
                    </a>
                    <p className="product-item-price">
                      <span className="product-price-amount">
                        <span className="product-price-currency-symbol">$</span>
                        59.99
                      </span>
                    </p>
                    <div className="product-rating">
                      <div className="star-rating" title="Rated 4 out of 5">
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
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
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
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
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
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
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
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
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
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
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
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
                  </div>
                  {/*Product Content*/}
                  <div className="product-item-content">
                    <div className="tag">
                      <a href="#">Minimal</a>
                    </div>
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
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
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <a className="product-item-img-link">
                      <img src="img/products/11/01.jpg" alt="Product Item" />
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
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
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
                  </div>
                  {/*Product Content*/}
                  <div className="product-item-content">
                    <div className="tag">
                      <a href="#">Minimal</a>
                    </div>
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <a className="product-item-img-link">
                      <img src="img/products/13/01.jpg" alt="Product Item" />
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
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <a className="product-item-img-link">
                      <img src="img/products/14/01.jpg" alt="Product Item" />
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
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
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
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <a className="product-item-img-link">
                      <img src="img/products/03/01.jpg" alt="Product Item" />
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
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
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
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
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
              <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
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
                    <a
                      href="product_detail.html"
                      className="product-item-title"
                    >
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
            </div>
            {/*End Product Items*/}
            {/*Paginattion*/}
            <div className="pagination-wraper">
              <div className="pagination">
                <ul className="pagination-numbers">
                  {/*<li>
                                      <a href="#" class="prev page-number"><i class="fa fa-angle-double-left"></i></a>
                                  </li>*/}
                  <li>
                    <a href="#" className="page-number current">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="page-number">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="page-number">
                      3
                    </a>
                  </li>
                  <li>
                    <span className="page-number dots">...</span>
                  </li>
                  <li>
                    <a href="#" className="page-number">
                      29
                    </a>
                  </li>
                  <li>
                    <a href="#" className="next page-number">
                      <i className="fa fa-angle-double-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*End Paginattion*/}
          </div>
          <div className="col-lg-3 col-12 order-lg-1 sidebar-container">
            <aside className="widget-area">
              {/*Widget*/}
              <div className="widget">
                {/*Title*/}
                <h4 className="widget-title">Shop Categories</h4>
                {/*End Title*/}
                {/* Content */}
                <div className="widget-content widget_nav_menu">
                  <ul className="menu">
                    <li
                      className="menu-item main-accordionIcon"
                      onClick={() => {
                        setFilter("Men");
                      }}
                    >
                      <a href="#">Men</a>
                      <ul
                        className={
                          filter == "Men" ? "sub-menu" : "sub-menu d-none"
                        }
                      >
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="#">New In Clothing</a>
                          </li>
                          <li className="menu-item">
                            <a href="#">New In Shoes</a>
                          </li>
                          <li className="menu-item">
                            <a href="#">New In Bags</a>
                          </li>
                          <li className="menu-item">
                            <a href="#">New In Watches</a>
                          </li>
                          <li className="menu-item">
                            <a href="#">New In Accessories</a>
                          </li>
                        </ul>
                      </ul>
                    </li>
                    <li
                      className="menu-item"
                      onClick={() => {
                        setFilter("Women");
                      }}
                    >
                      <a href="#">Women</a>
                      <ul className="sub-menu">
                        <ul
                          className={
                            filter == "Women" ? "sub-menu" : "sub-menu d-none"
                          }
                        >
                          <li className="menu-item">
                            <a href="#">New In Clothing</a>
                          </li>
                          <li className="menu-item">
                            <a href="#">New In Shoes</a>
                          </li>
                          <li className="menu-item">
                            <a href="#">New In Bags</a>
                          </li>
                          <li className="menu-item">
                            <a href="#">New In Watches</a>
                          </li>
                          <li className="menu-item">
                            <a href="#">New In Accessories</a>
                          </li>
                        </ul>
                      </ul>
                    </li>

                    <li
                      className="menu-item"
                      onClick={() => {
                        setFilter("Brand");
                      }}
                    >
                      <a href="#">Brand</a>
                      <ul
                        className={
                          filter == "Brand" ? "sub-menu" : "sub-menu d-none"
                        }
                      >
                        <li className="menu-item">
                          <a href="#">A&amp;C Signature</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Angry Birds</a>
                        </li>
                        <li className="menu-item menu-item-has-children">
                          <a href="#">Macadamia</a>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <a href="#">Miller &amp; Schweitzer</a>
                            </li>
                            <li className="menu-item">
                              <a href="#">Van Heusen</a>
                            </li>
                            <li className="menu-item">
                              <a href="#">Wrangler</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item ">
                          <a href="#">Wills Lifestyle</a>
                        </li>
                        <li className="menu-item menu-item-has-children">
                          <a href="#">X’Pose</a>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <a href="#">Samsung</a>
                            </li>
                            <li className="menu-item">
                              <a href="#">Apple</a>
                            </li>
                            <li className="menu-item">
                              <a href="#">Hitachi</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="#">Fashion</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Accesories</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Shoes</a>
                    </li>
                  </ul>
                </div>
                {/* End Content */}
              </div>
              {/*End Widget*/}
              {/*Widget*/}
              <div className="widget">
                {/*Title*/}
                <h4 className="widget-title">Filter by Price</h4>
                {/*End Title*/}
                {/* Content */}
                <div className="widget-content">
                  <form>
                    <div className="price-range-slider" />
                    <div className="price-range-amount">
                      <input
                        className="price_range_min"
                        name="price_range_min"
                        defaultValue
                        data-min={140}
                        placeholder="Min price"
                        style={{ display: "none" }}
                        type="text"
                      />
                      <input
                        className="price_range_max"
                        name="price_range_max"
                        defaultValue
                        data-max={1100}
                        placeholder="Max price"
                        style={{ display: "none" }}
                        type="text"
                      />
                      <div className="price-range-from-to" />
                    </div>
                    <button className="btn btn--secondary btn--full">
                      Filter
                    </button>
                  </form>
                </div>
                {/* End Content */}
              </div>
              {/*End Widget*/}
              {/*Widget*/}
              <div className="widget">
                {/*Title*/}
                <h4 className="widget-title">Filter by Color</h4>
                {/*End Title*/}
                {/* Content */}
                <div className="widget-content">
                  <ul>
                    <li>
                      <a href="#">Black</a>
                      <span className="count">(12)</span>
                    </li>
                    <li>
                      <a href="#">Green</a>
                      <span className="count">(24)</span>
                    </li>
                    <li>
                      <a href="#">Pink</a>
                      <span className="count">(08)</span>
                    </li>
                    <li>
                      <a href="#">Red</a>
                      <span className="count">(04)</span>
                    </li>
                    <li>
                      <a href="#">Whie</a>
                      <span className="count">(35)</span>
                    </li>
                    <li>
                      <a href="#">Blue</a>
                      <span className="count">(49)</span>
                    </li>
                  </ul>
                </div>
                {/* End Content */}
              </div>
              {/*End Widget*/}
              {/*Widget*/}
              <div className="widget">
                {/*Title*/}
                <h4 className="widget-title">Filter by Size</h4>
                {/*End Title*/}
                {/* Content */}
                <div className="widget-content">
                  <ul>
                    <li>
                      <a href="#">Big</a>
                      <span className="count">(05)</span>
                    </li>
                    <li>
                      <a href="#">L</a>
                      <span className="count">(09)</span>
                    </li>
                    <li>
                      <a href="#">M</a>
                      <span className="count">(12)</span>
                    </li>
                    <li>
                      <a href="#">Small</a>
                      <span className="count">(04)</span>
                    </li>
                    <li>
                      <a href="#">XL</a>
                      <span className="count">(29)</span>
                    </li>
                    <li>
                      <a href="#">XXL</a>
                      <span className="count">(43)</span>
                    </li>
                  </ul>
                </div>
                {/* End Content */}
              </div>
              {/*End Widget*/}

              {/*End Widget*/}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainproductcontent;
