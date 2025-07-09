import React, { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [activeMenu, setactiveMenu] = useState("");
  const [mobileordesktop, setMobileordesktop] = useState(false);
  return (
    <header
      id="header"
      className="header header--sticky"
      data-header-hover="true"
    >
      {/*Header Navigation*/}
      <nav id="navigation" className="header-nav">
        <div className="container-fluid">
          <div className="row">
            {/*Logo*/}
            <div className="site-logo">
              <Link to="/">
                <p style={{ fontSize: "18px" }}>TOKYO ONLINE</p>
              </Link>
            </div>
            {/*End Logo*/}

            {/*Navigation Menu*/}
            <div
              className={
                mobileordesktop == true ? "nav-menu show-on-mobile" : "nav-menu"
              }
            >
              <ul>
                <li className="nav-menu-item">
                  <Link to="/">Home</Link>
                  {/*Dropdown*/}
                  <div className="nav-dropdown col3-dropdown">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <Link to="/">
                              <img
                                src="img/banner/themeshots/shot_home01.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 01</figure>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <Link to="/">
                              <img
                                src="img/banner/themeshots/shot_home02.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 02</figure>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu">
                  <Link to="/about">About</Link>
                </li>
                <li className="nav-menu-item mega-menu">
                  <Link
                    to="/"
                    onMouseLeave={() => {
                      setactiveMenu("");
                    }}
                    onMouseEnter={() => {
                      setactiveMenu("shop");
                    }}
                  >
                    Shop
                  </Link>
                  {/*Dropdown*/}
                  <div
                    className="nav-dropdown mega-dropdown"
                    onMouseLeave={() => {
                      setactiveMenu("");
                    }}
                    onMouseEnter={() => {
                      setactiveMenu("shop");
                    }}
                    style={{
                      display: activeMenu == "shop" ? "block" : "none",
                      opacity: 1,
                    }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <span className="dropdown-title">
                                All Collection
                              </span>
                            </li>
                            <li>
                              <Link href="#">New Clothes</Link>
                            </li>
                            <li>
                              <Link href="#">Back In Stock Clothes</Link>
                            </li>
                            <li>
                              <Link href="#">Dresses</Link>
                            </li>
                            <li>
                              <Link href="#">Trousers &amp; Chinos</Link>
                            </li>
                            <li>
                              <Link href="#">Tops &amp; Tees</Link>
                            </li>
                            <li>
                              <Link href="#">Shirt</Link>
                            </li>
                            <li>
                              <Link href="#">Sweatshirts</Link>
                            </li>
                            <li>
                              <Link href="#">Sweaters</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <span className="dropdown-title">
                                Women's Fashion
                              </span>
                            </li>
                            <li>
                              <Link href="#">Ethnic Wear</Link>
                            </li>
                            <li>
                              <Link href="#">Sarees</Link>
                            </li>
                            <li>
                              <Link href="#">Dress Material</Link>
                            </li>
                            <li>
                              <Link href="#">Kurtis</Link>
                            </li>
                            <li>
                              <Link href="#">Saree Combo</Link>
                            </li>
                            <li>
                              <Link to="/product-listing">
                                Tops &amp; Tunics
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-listing">Dresses</Link>
                            </li>
                            <li>
                              <Link to="/product-listing">Tees &amp; Polo</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <span className="dropdown-title">
                                Man Fashion
                              </span>
                            </li>
                            <li>
                              <Link to="/product-listing">T-shirts</Link>
                            </li>
                            <li>
                              <Link to="/product-listing">
                                Kurtas, Pyjamas &amp; Dhotis
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-listing">
                                Shorts &amp; Three-Fourths
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-listing">Shirts</Link>
                            </li>
                            <li>
                              <Link to="/product-listing">
                                Top &amp; Bottom Sets
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-listing">
                                Ride On &amp; Scooters
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-listing">Electronic Toys</Link>
                            </li>
                            <li>
                              <Link to="/product-listing">Soft Toys</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <Link to="/product-listing">
                                <img
                                  src="img/banner/nav_banner01.jpg"
                                  alt="banner"
                                />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item">
                  <Link
                    to="product-listing"
                    onMouseLeave={() => {
                      setactiveMenu("");
                    }}
                    onMouseEnter={() => {
                      setactiveMenu("man");
                    }}
                  >
                    Man
                  </Link>
                  {/*Dropdown*/}
                  <div
                    className="nav-dropdown col2-dropdown"
                    onMouseLeave={() => {
                      setactiveMenu("");
                    }}
                    onMouseEnter={() => {
                      setactiveMenu("man");
                    }}
                    style={{
                      display: activeMenu == "man" ? "block" : "none",
                      opacity: 1,
                    }}
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            <span className="dropdown-title">Chothes</span>
                          </li>
                          <li>
                            <Link to="/product-listing">New In clothing</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">New In Footwear</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">New In Bags</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">New In Watches</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Shirt</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Jeans</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Casual Trousers</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">
                              Suits &amp; Blazers
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            <span className="dropdown-title">Watches</span>
                          </li>
                          <li>
                            <Link to="/product-listing">Analog</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Chronograph</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Digital</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Watch Cases</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Shoes</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Lether Wallets</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Belts</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Accesories</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item">
                  <Link
                    to="/product-listing"
                    onMouseLeave={() => {
                      setactiveMenu("");
                    }}
                    onMouseEnter={() => {
                      setactiveMenu("women");
                    }}
                  >
                    Women
                  </Link>
                  {/*Dropdown*/}
                  <div
                    className="nav-dropdown col3-dropdown center"
                    onMouseLeave={() => {
                      setactiveMenu("");
                    }}
                    onMouseEnter={() => {
                      setactiveMenu("women");
                    }}
                    style={{
                      display: activeMenu == "women" ? "block" : "none",
                      opacity: 1,
                    }}
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <ul>
                          <li>
                            <span className="dropdown-title">Clothes</span>
                          </li>
                          <li>
                            <Link to="/product-listing">
                              Back In Stock Clothes
                            </Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Dresses</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Tops &amp; Tees</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Sweatshirts</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Sweaters </Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Kimonos</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Jackets</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul>
                          <li>
                            <span className="dropdown-title">
                              Beauty &amp; Wellness
                            </span>
                          </li>
                          <li>
                            <Link to="/product-listing">All Wellness</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Makeup</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Skincare</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Body</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Sun Care</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Hair</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Aromatherapy</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul>
                          <li>
                            <span className="dropdown-title">Accesories</span>
                          </li>
                          <li>
                            <Link to="/product-listing">New Accesories</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Jewelry</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Bags</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Hats</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Sunglasses</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Scarves</Link>
                          </li>
                          <li>
                            <Link to="/product-listing">Belts</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item mega-menu">
                  <Link
                    to="product-listing"
                    className="sale-color"
                    onMouseLeave={() => {
                      setactiveMenu("");
                    }}
                    onMouseEnter={() => {
                      setactiveMenu("sale");
                    }}
                  >
                    Sale
                  </Link>
                  {/*Dropdown*/}
                  <div
                    className="nav-dropdown mega-dropdown"
                    onMouseLeave={() => {
                      setactiveMenu("");
                    }}
                    onMouseEnter={() => {
                      setactiveMenu("sale");
                    }}
                    style={{
                      display: activeMenu == "sale" ? "block" : "none",
                      opacity: 1,
                    }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <Link to="/product-listing">New Sale</Link>
                            </li>
                            <li>
                              <Link to="/product-listing">All Sale</Link>
                            </li>
                            <li>
                              <Link to="/product-listing">Featured Sale</Link>
                            </li>
                            <li>
                              <Link to="/product-listing">Sale Dresses</Link>
                            </li>
                            <li>
                              <Link to="/product-listing">Sale Tops</Link>
                            </li>
                            <li>
                              <Link to="/product-listing">Sale Sweaters</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <Link to="/product-listing">
                                Sale Jackets &amp; Outerwear{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-listing">Sale Bottoms</Link>
                            </li>
                            <li>
                              <Link to="/product-listing">Sale Intimates</Link>
                            </li>
                            <li>
                              <Link to="/product-listing">
                                Sale Accessories
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-listing">Sale Shoes</Link>
                            </li>
                            <li>
                              <Link to="/product-listing">Sale Bags</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <Link to="/product-listing">
                                Sale Beauty &amp; Wellness
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-listing">
                                Sale FP Movement
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-listing">Sale Swim</Link>
                            </li>
                            <li>
                              <Link to="/product-listing">
                                Sale FP Beach &amp; Endless Summer{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-listing">
                                Sale Under $19.95
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-listing">Sale Sport</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <Link to="/product-listing">
                                Sale Under $29.95{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-listing">
                                Sale Under $49.95{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-listing">
                                Sale Under $59.95{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-listing">
                                Sale Under $69.95
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-listing">
                                Sale Under $89.95{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to="/product-listing">
                                Sale Under $99.95{" "}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                
                <li className="nav-menu">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            {/*End Navigation Menu*/}

            {/*Nav Icons*/}
            <div className="nav-icons">
              <ul>
                <li className="nav-icon-item d-lg-none">
                  <div
                    className={
                      mobileordesktop == true
                        ? "nav-icon-trigger menu-mobile-btn active"
                        : "nav-icon-trigger menu-mobile-btn"
                    }
                    title="Navigation Menu"
                    onClick={() => {
                      setMobileordesktop(!mobileordesktop);
                    }}
                  >
                    <span>
                      <i className="ti-menu" />
                    </span>
                  </div>
                </li>
                <li className="nav-icon-item">
                  <div
                    className="nav-icon-trigger search-menu-btn"
                    title="Search"
                  >
                    <span>
                      <i className="ti-search" />
                    </span>
                  </div>
                </li>
                <li className="nav-icon-item d-none d-lg-table-cell">
                  <Link className="nav-icon-trigger" to="/" title="Whishlist">
                    <span>
                      <i className="ti-heart" />
                      <span className="nav-icon-count">0</span>
                    </span>
                  </Link>
                </li>
                <li className="nav-icon-item">
                  <div
                    className="nav-icon-trigger cart-sidebar-btn"
                    title="Shopping Cart"
                  >
                    <span>
                      <i className="ti-bag" />
                      <span className="nav-icon-count">3</span>
                    </span>
                  </div>
                </li>
                <li className="nav-icon-item">
                  <div
                    className="nav-icon-trigger dropdown--trigger"
                    title="User Account"
                  >
                    <span>
                      <i className="ti-user" />
                    </span>
                  </div>
                  {/*Dropdown*/}
                  <div className="dropdown--menu dropdown--right">
                    <ul>
                      <li>
                        <Link to="login_register.html">My Account</Link>
                      </li>
                      <li>
                        <Link to="/product-listing">Order Tracking</Link>
                      </li>
                      <li>
                        <Link to="/product-listing">Compare</Link>
                      </li>
                      <li>
                        <Link to="/product-listing">Wishlist</Link>
                      </li>
                      <li>
                        <Link to="cart.html">Cart</Link>
                      </li>
                      <li>
                        <Link to="/product-listing">Lost Password</Link>
                      </li>
                      <li>
                        <hr />
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="btn btn--primary btn--sm btn--full"
                        >
                          <i className="fa fa-shopping-cart" />
                          Purchase Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/*End Dropdown*/}
                </li>
              </ul>
            </div>
            {/*End Nav Icons*/}
            {/*Search Bar*/}
            <div className="searchbar-menu">
              <div className="searchbar-menu-inner">
                {/*Search Bar*/}
                <div className="search-form-wrap">
                  <form>
                    <button className="search-icon btn--lg">
                      <i className="ti-search" />
                    </button>
                    <input
                      className="search-field input--lg"
                      placeholder="Search here..."
                      defaultValue
                      name="s"
                      title="Search..."
                      type="search"
                      autoComplete="off"
                    />
                    <span className="search-close-icon">
                      <i className="ti-close" />
                    </span>
                  </form>
                </div>
                {/*End Search Bar*/}
                {/*Search Result Bar*/}

                {/*End Search Result Bar*/}
              </div>
            </div>
            {/*End Search Bar*/}
          </div>
        </div>
      </nav>
      {/*End Header Navigation*/}
    </header>
  );
};

export default Header;
