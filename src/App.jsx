import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Productlisting from "./product-listing/Productlisting";
import SingleProduct from "./pages/singleproduct/SingleProduct";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-listing" element={<Productlisting />} />
        <Route path="/product-detail-single" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
       </Routes>
    </>
  );
}

export default App;
