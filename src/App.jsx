import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Productlisting from "./product-listing/Productlisting";
import SingleProduct from "./pages/singleproduct/SingleProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-listing" element={<Productlisting />} />
        <Route path="/product-detail-single" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
