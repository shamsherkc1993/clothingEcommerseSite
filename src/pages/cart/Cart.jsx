import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Cart = () => {
  return (
    <>
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
                  <h1 className="breadcrumb-title">Cart</h1>
                  <nav className="breadcrumb-link">
                    <span>
                      <a href="home.html">Home</a>
                    </span>
                    <span>Cart</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Breadcrumb*/}
        {/*Content*/}
        <section className="sec-padding--md">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <article>
                  <form className="cart-form">
                    <div className="cart-product-table-wrap responsive-table">
                      <table>
                        <thead>
                          <tr>
                            <th className="product-remove" />
                            <th className="product-thumbnail" />
                            <th className="product-name">Product</th>
                            <th className="product-price">Price</th>
                            <th className="product-qty">Quantity</th>
                            <th className="product-subtotal">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="product-remove">
                              <a href="javascript:void(0)">
                                <i
                                  className="fa fa-times-circle"
                                  aria-hidden="true"
                                />
                              </a>
                            </td>
                            <td className="product-thumbnail">
                              <a>
                                <img src="img/products/01/01.jpg" alt />
                              </a>
                            </td>
                            <td className="product-name">
                              <a href="#">Man Ruched Floral Applique Tee</a>
                            </td>
                            <td className="product-price">
                              <span className="product-price-amount amount">
                                <span className="currency-sign">$</span>39.00
                              </span>
                            </td>
                            <td>
                              <div className="product-quantity">
                                <span
                                  data-value="+"
                                  className="quantity-btn quantityMinus"
                                >
                                  <i className="ti-minus" />
                                </span>
                                <input
                                  className="quantity input-lg"
                                  step={1}
                                  min={1}
                                  max={9}
                                  name="quantity"
                                  defaultValue={1}
                                  title="Quantity"
                                  type="number"
                                />
                                <span
                                  data-value="-"
                                  className="quantity-btn quantityPlus"
                                >
                                  <i className="ti-plus" />
                                </span>
                              </div>
                            </td>
                            <td className="product-subtotal">
                              <span className="product-price-sub_totle amount">
                                <span className="currency-sign">$</span>39.00
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="product-remove">
                              <a href="javascript:void(0)">
                                <i
                                  className="fa fa-times-circle"
                                  aria-hidden="true"
                                />
                              </a>
                            </td>
                            <td className="product-thumbnail">
                              <a>
                                <img src="img/products/02/01.jpg" alt />
                              </a>
                            </td>
                            <td className="product-name">
                              <a href="#">Man Ruched Floral Applique Tee</a>
                            </td>
                            <td className="product-price">
                              <span className="product-price-amount amount">
                                <span className="currency-sign">$</span>39.00
                              </span>
                            </td>
                            <td>
                              <div className="product-quantity">
                                <span
                                  data-value="+"
                                  className="quantity-btn quantityMinus"
                                >
                                  <i className="ti-minus" />
                                </span>
                                <input
                                  className="quantity input-lg"
                                  step={1}
                                  min={1}
                                  max={9}
                                  name="quantity"
                                  defaultValue={1}
                                  title="Quantity"
                                  type="number"
                                />
                                <span
                                  data-value="-"
                                  className="quantity-btn quantityPlus"
                                >
                                  <i className="ti-plus" />
                                </span>
                              </div>
                            </td>
                            <td className="product-subtotal">
                              <span className="product-price-sub_totle amount">
                                <span className="currency-sign">$</span>39.00
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={6}>
                              <div className="coupon">
                                <input
                                  name="coupon_code"
                                  className="input--lg"
                                  id="coupon_code"
                                  defaultValue
                                  placeholder="Coupon code"
                                  type="text"
                                />
                                <button
                                  type="submit"
                                  className="btn btn--lg btn--secondary"
                                  name="apply_coupon"
                                  value="Apply Coupon"
                                >
                                  Apply Coupon
                                </button>
                              </div>
                              <button
                                type="submit"
                                className="update-cart btn btn--lg btn--secondary"
                                name="update_cart"
                                value="Update Cart"
                                disabled
                              >
                                Update Cart
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </form>
                  <div className="cart-collaterals">
                    <div className="cart_totals">
                      <h3>Cart Totals</h3>
                      <table>
                        <tbody>
                          <tr>
                            <th data-title="Subtotal">Subtotal</th>
                            <td>
                              <span className="price-amount amount">
                                <span className="currencySymbol">$</span>88.00
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th data-title="Shipping">Shipping</th>
                            <td>
                              <ul id="shipping_method">
                                <li>
                                  <input
                                    name="shipping_method[0]"
                                    data-index={0}
                                    id="shipping_method_0_flat_rate2"
                                    defaultValue="flat_rate:2"
                                    defaultChecked="checked"
                                    type="radio"
                                  />
                                  <label htmlFor="shipping_method_0_flat_rate2">
                                    Flat rate:{" "}
                                    <span className="price-amount amount">
                                      <span className="currencySymbol">$</span>
                                      10.00
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <input
                                    name="shipping_method[0]"
                                    data-index={0}
                                    id="shipping_method_0_free_shipping3"
                                    defaultValue="free_shipping:3"
                                    className="shipping_method"
                                    type="radio"
                                  />
                                  <label htmlFor="shipping_method_0_free_shipping3">
                                    Free shipping
                                  </label>
                                </li>
                                <li>
                                  <input
                                    name="shipping_method[0]"
                                    data-index={0}
                                    id="shipping_method_0_local_pickup4"
                                    defaultValue="local_pickup:4"
                                    className="shipping_method"
                                    type="radio"
                                  />
                                  <label htmlFor="shipping_method_0_local_pickup4">
                                    Local pickup:{" "}
                                    <span className="price-amount amount">
                                      <span className="currencySymbol">£</span>
                                      0.00
                                    </span>
                                  </label>
                                </li>
                              </ul>
                              <form>
                                <a href="javascript:void(0)">
                                  Calculate Shipping
                                </a>
                              </form>
                            </td>
                          </tr>
                          <tr>
                            <th>Total</th>
                            <td>
                              <span className="price-amount amount">
                                <span className="currencySymbol">$</span>89.98
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="proceed-to-checkout">
                        <a
                          href="checkout.html"
                          className="checkout-button btn btn--lg btn--primary full-width"
                        >
                          Proceed to checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/*End Content*/}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
