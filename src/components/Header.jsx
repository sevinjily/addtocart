import React from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Icon from "@mui/material/Icon";

const Header = () => {
  return (
    <div className="flex justify-between  w-full bg-indigo-800 h-20 items-center text-white">
      <div className="logo   w-2/5">
        <h1 className="font-bold text-4xl">Sevinj</h1>
      </div>
      <div className="menu scroll-p-2 items-end  font-semibold">
        <ul className="list-none flex ">
          <Link to={"/home"}>
            <li className="mr-5"> Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="mr-5"> About</li>
          </Link>
          <Link to={"/contact"}>
            <li className="mr-5">Contact</li>
          </Link>
          <Link to={"/productList"}>
            <li className="mr-5">Product List</li>
          </Link>
          <Link to={"/cart"}>
            <li className="mr-5">Add to Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
