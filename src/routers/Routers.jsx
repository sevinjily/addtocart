import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../pages/ProductList";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AddtoCart from "../pages/AddtoCart";
import Home from "../pages/Home";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="home/" element={<Home />} />
        <Route path="about/" element={<About />} />
        <Route path="contact/" element={<Contact />} />
        <Route path="productList/" element={<ProductList />} />
        <Route path="cart/" element={<AddtoCart />} />
      </Routes>
    </>
  );
};

export default Routers;
