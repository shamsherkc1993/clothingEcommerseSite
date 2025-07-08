import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Productlisting from "./product-listing/Productlisting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-listing" element={<Productlisting />} />
      </Routes>
    </>
  );
}

export default App;
