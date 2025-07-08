import React, { useState } from "react";

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
              <a href="home.html">
                <p style={{ fontSize: "18px" }}>TOKYO ONLINE</p>
              </a>
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
                  <a href="home.html">Home</a>
                  {/*Dropdown*/}
                  <div className="nav-dropdown col3-dropdown">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home.html">
                              <img
                                src="img/banner/themeshots/shot_home01.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 01</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_02.html">
                              <img
                                src="img/banner/themeshots/shot_home02.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 02</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_03.html">
                              <img
                                src="img/banner/themeshots/shot_home03.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 03</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_04.html">
                              <img
                                src="img/banner/themeshots/shot_home04.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 04</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_05.html">
                              <img
                                src="img/banner/themeshots/shot_home05.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 05</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_06.html">
                              <img
                                src="img/banner/themeshots/shot_home06.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 06</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item mega-menu">
                  <a
                    href="#"
                    onMouseLeave={() => {
                      setactiveMenu("");
                    }}
                    onMouseEnter={() => {
                      setactiveMenu("shop");
                    }}
                  >
                    Shop
                  </a>
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
                              <a href="#">New Clothes</a>
                            </li>
                            <li>
                              <a href="#">Back In Stock Clothes</a>
                            </li>
                            <li>
                              <a href="#">Dresses</a>
                            </li>
                            <li>
                              <a href="#">Trousers &amp; Chinos</a>
                            </li>
                            <li>
                              <a href="#">Tops &amp; Tees</a>
                            </li>
                            <li>
                              <a href="#">Shirt</a>
                            </li>
                            <li>
                              <a href="#">Sweatshirts</a>
                            </li>
                            <li>
                              <a href="#">Sweaters</a>
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
                              <a href="#">Ethnic Wear</a>
                            </li>
                            <li>
                              <a href="#">Sarees</a>
                            </li>
                            <li>
                              <a href="#">Dress Material</a>
                            </li>
                            <li>
                              <a href="#">Kurtis</a>
                            </li>
                            <li>
                              <a href="#">Saree Combo</a>
                            </li>
                            <li>
                              <a href="#">Tops &amp; Tunics</a>
                            </li>
                            <li>
                              <a href="#">Dresses</a>
                            </li>
                            <li>
                              <a href="#">Tees &amp; Polo</a>
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
                              <a href="#">T-shirts</a>
                            </li>
                            <li>
                              <a href="#">Kurtas, Pyjamas &amp; Dhotis</a>
                            </li>
                            <li>
                              <a href="#">Shorts &amp; Three-Fourths</a>
                            </li>
                            <li>
                              <a href="#">Shirts</a>
                            </li>
                            <li>
                              <a href="#">Top &amp; Bottom Sets</a>
                            </li>
                            <li>
                              <a href="#">Ride On &amp; Scooters</a>
                            </li>
                            <li>
                              <a href="#">Electronic Toys</a>
                            </li>
                            <li>
                              <a href="#">Soft Toys</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="img/banner/nav_banner01.jpg"
                                  alt="banner"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item">
                  <a
                    href="#"
                    onMouseLeave={() => {
                      setactiveMenu("");
                    }}
                    onMouseEnter={() => {
                      setactiveMenu("man");
                    }}
                  >
                    Man
                  </a>
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
                            <a href="#">New In clothing</a>
                          </li>
                          <li>
                            <a href="#">New In Footwear</a>
                          </li>
                          <li>
                            <a href="#">New In Bags</a>
                          </li>
                          <li>
                            <a href="#">New In Watches</a>
                          </li>
                          <li>
                            <a href="#">Shirt</a>
                          </li>
                          <li>
                            <a href="#">Jeans</a>
                          </li>
                          <li>
                            <a href="#">Casual Trousers</a>
                          </li>
                          <li>
                            <a href="#">Suits &amp; Blazers</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            <span className="dropdown-title">Watches</span>
                          </li>
                          <li>
                            <a href="#">Analog</a>
                          </li>
                          <li>
                            <a href="#">Chronograph</a>
                          </li>
                          <li>
                            <a href="#">Digital</a>
                          </li>
                          <li>
                            <a href="#">Watch Cases</a>
                          </li>
                          <li>
                            <a href="#">Shoes</a>
                          </li>
                          <li>
                            <a href="#">Lether Wallets</a>
                          </li>
                          <li>
                            <a href="#">Belts</a>
                          </li>
                          <li>
                            <a href="#">Accesories</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item">
                  <a
                    href="#"
                    onMouseLeave={() => {
                      setactiveMenu("");
                    }}
                    onMouseEnter={() => {
                      setactiveMenu("women");
                    }}
                  >
                    Women
                  </a>
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
                            <a href="#">Back In Stock Clothes</a>
                          </li>
                          <li>
                            <a href="#">Dresses</a>
                          </li>
                          <li>
                            <a href="#">Tops &amp; Tees</a>
                          </li>
                          <li>
                            <a href="#">Sweatshirts</a>
                          </li>
                          <li>
                            <a href="#">Sweaters </a>
                          </li>
                          <li>
                            <a href="#">Kimonos</a>
                          </li>
                          <li>
                            <a href="#">Jackets</a>
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
                            <a href="#">All Wellness</a>
                          </li>
                          <li>
                            <a href="#">Makeup</a>
                          </li>
                          <li>
                            <a href="#">Skincare</a>
                          </li>
                          <li>
                            <a href="#">Body</a>
                          </li>
                          <li>
                            <a href="#">Sun Care</a>
                          </li>
                          <li>
                            <a href="#">Hair</a>
                          </li>
                          <li>
                            <a href="#">Aromatherapy</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul>
                          <li>
                            <span className="dropdown-title">Accesories</span>
                          </li>
                          <li>
                            <a href="#">New Accesories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry</a>
                          </li>
                          <li>
                            <a href="#">Bags</a>
                          </li>
                          <li>
                            <a href="#">Hats</a>
                          </li>
                          <li>
                            <a href="#">Sunglasses</a>
                          </li>
                          <li>
                            <a href="#">Scarves</a>
                          </li>
                          <li>
                            <a href="#">Belts</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item mega-menu">
                  <a
                    href="#"
                    className="sale-color"
                    onMouseLeave={() => {
                      setactiveMenu("");
                    }}
                    onMouseEnter={() => {
                      setactiveMenu("sale");
                    }}
                  >
                    Sale
                  </a>
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
                              <a href="#">New Sale</a>
                            </li>
                            <li>
                              <a href="#">All Sale</a>
                            </li>
                            <li>
                              <a href="#">Featured Sale</a>
                            </li>
                            <li>
                              <a href="#">Sale Dresses</a>
                            </li>
                            <li>
                              <a href="#">Sale Tops</a>
                            </li>
                            <li>
                              <a href="#">Sale Sweaters</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <a href="#">Sale Jackets &amp; Outerwear </a>
                            </li>
                            <li>
                              <a href="#">Sale Bottoms</a>
                            </li>
                            <li>
                              <a href="#">Sale Intimates</a>
                            </li>
                            <li>
                              <a href="#">Sale Accessories</a>
                            </li>
                            <li>
                              <a href="#">Sale Shoes</a>
                            </li>
                            <li>
                              <a href="#">Sale Bags</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <a href="#">Sale Beauty &amp; Wellness</a>
                            </li>
                            <li>
                              <a href="#">Sale FP Movement</a>
                            </li>
                            <li>
                              <a href="#">Sale Swim</a>
                            </li>
                            <li>
                              <a href="#">
                                Sale FP Beach &amp; Endless Summer{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">Sale Under $19.95</a>
                            </li>
                            <li>
                              <a href="#">Sale Sport</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <a href="#">Sale Under $29.95 </a>
                            </li>
                            <li>
                              <a href="#">Sale Under $49.95 </a>
                            </li>
                            <li>
                              <a href="#">Sale Under $59.95 </a>
                            </li>
                            <li>
                              <a href="#">Sale Under $69.95</a>
                            </li>
                            <li>
                              <a href="#">Sale Under $89.95 </a>
                            </li>
                            <li>
                              <a href="#">Sale Under $99.95 </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item">
                  <a href="#">Blog</a>
                  {/*Dropdown*/}
                  <div className="nav-dropdown">
                    <ul>
                      <li className="nav-menu-item">
                        <a href="#">Blog Grid</a>
                        <ul className="nav-dropdown-sub">
                          <li>
                            <a href="blog_grid-2_col.html">2 column</a>
                          </li>
                          <li>
                            <a href="blog_grid-3_col.html">3 column</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-menu-item">
                        <a href="blog_masonry.html">Masonry</a>
                      </li>
                      <li className="nav-menu-item">
                        <a href="#">List</a>
                        <ul className="nav-dropdown-sub">
                          <li>
                            <a href="blog_list.html">List 1</a>
                          </li>
                          <li>
                            <a href="blog_list-sidebar_right.html">
                              List 2 - With Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-menu-item">
                        <a href="blog_single.html">Blog Single</a>
                      </li>
                      <li className="nav-menu-item">
                        <a href="#">Submenu Right</a>
                        <ul className="nav-dropdown-sub">
                          <li>
                            <a href="#">Submenu 1</a>
                          </li>
                          <li>
                            <a href="#">Submenu 2</a>
                          </li>
                          <li>
                            <a href="#">Submenu 3</a>
                          </li>
                          <li>
                            <a href="#">Submenu 4</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-menu-item">
                        <a href="#">Submenu left</a>
                        <ul className="nav-dropdown-sub left">
                          <li>
                            <a href="#">Submenu 1</a>
                          </li>
                          <li>
                            <a href="#">Submenu 2</a>
                          </li>
                          <li>
                            <a href="#">Submenu 3</a>
                          </li>
                          <li>
                            <a href="#">Submenu 4</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item">
                  <a href="#">Pages</a>
                  {/*Dropdown*/}
                  <div className="nav-dropdown col2-dropdown left">
                    <div className="row">
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            <span className="dropdown-title">Shop</span>
                          </li>
                          <li>
                            <a href="product_listing.html">
                              Shop List - Sidebar Left
                            </a>
                          </li>
                          <li>
                            <a href="product_listing-right_sidebar.html">
                              Shop List - Sidebar Right
                            </a>
                          </li>
                          <li>
                            <a href="product_listing-no_sidebar.html">
                              Shop List - No Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="product_detail.html">Product Detail 1</a>
                          </li>
                          <li>
                            <a href="product_detail_2.html">Product Detail 2</a>
                          </li>
                          <li>
                            <a href="product_detail_3.html">Product Detail 3</a>
                          </li>
                          <li>
                            <a href="product_detail_4.html">Product Detail 4</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span className="dropdown-title">Elements</span>
                          </li>
                          <li>
                            <a href="ele_accordian.html">Accordian</a>
                          </li>
                          <li>
                            <a href="ele_tabs.html">Tabs</a>
                          </li>
                          <li>
                            <a href="ele_sliders.html">Sliders</a>
                          </li>
                          <li>
                            <a href="ele_typography.html">Typography</a>
                          </li>
                          <li>
                            <a href="ele_btn-and-form.html">
                              Buttons &amp; Form
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            <span className="dropdown-title">Portfolio</span>
                          </li>
                          <li>
                            <a href="portfolio_grid.html">Portfolio Grid</a>
                          </li>
                          <li>
                            <a href="portfolio_masonry.html">
                              Portfolio Masonry
                            </a>
                          </li>
                          <li>
                            <a href="portfolio_single.html">Portfolio Single</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span className="dropdown-title">Extra Pages</span>
                          </li>
                          <li>
                            <a href="cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="login_register.html">
                              Login &amp; Register
                            </a>
                          </li>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                          <li>
                            <a href="comming_soon.html">Comming Soon</a>
                          </li>
                          <li>
                            <a href="error_page.html">Error 404</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
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
                  <a className="nav-icon-trigger" href="#" title="Whishlist">
                    <span>
                      <i className="ti-heart" />
                      <span className="nav-icon-count">0</span>
                    </span>
                  </a>
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
                        <a href="login_register.html">My Account</a>
                      </li>
                      <li>
                        <a href="#">Order Tracking</a>
                      </li>
                      <li>
                        <a href="#">Compare</a>
                      </li>
                      <li>
                        <a href="#">Wishlist</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="#">Lost Password</a>
                      </li>
                      <li>
                        <hr />
                      </li>
                      <li>
                        <a
                          href="#"
                          className="btn btn--primary btn--sm btn--full"
                        >
                          <i className="fa fa-shopping-cart" />
                          Purchase Now
                        </a>
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
                <div className="search-results-wrap">
                  <div className="search-results-loading">
                    <span className="fa fa-spinner fa-spin" />
                  </div>
                  <div className="search-results-text woocommerce">
                    <ul>
                      <li>Nothing found</li>
                    </ul>
                  </div>
                </div>
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
