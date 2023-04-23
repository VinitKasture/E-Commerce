import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <strong>ShopLift</strong>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
