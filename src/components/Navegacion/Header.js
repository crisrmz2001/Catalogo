import React, { Component } from "react";
import CartIcon from "../svg/carrito.svg";
import "../css/Header.css";
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to ="/">
        <h1>VanillaStore</h1>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/Productos">PRODUCTOS</Link>
          </li>
          <li>
            <Link to="/contacto">CONTACTO</Link>
          </li>
        </ul>
        <div className="nav-cart">
          <span>0</span>

          <img src={CartIcon} alt="" width="20" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
