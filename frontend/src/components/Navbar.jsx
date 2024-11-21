import React, { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "./style/Navbar.css";
import ItemContex from "../contex/itemContext";

export default function Navbar() {
  const contex = useContext(ItemContex);
  const {cart,ttlCart} = contex;
  // const [cart,setCart] = useState([]);
// console.log(cart)
  // useEffect(()=>{
  //   const cartJson = cartItem();
  //   setCart(cartJson)
  // },[])
  // console.log(cart);
  const handleLogout = () =>{
    localStorage.removeItem('token');
    navigator('/');
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          e-Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link to="/cart" className="btn btn-outline-primary mx-2 position-relative" type="submit">
              <i className="fa-solid fa-cart-shopping"></i>
            <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{top:'-1px'}}>{ttlCart}</span>
            </Link>
              {localStorage.getItem('token')?<button className="btn btn-outline-primary" onClick={handleLogout}>Logout</button>:null}
          </div>
        </div>
      </div>
    </nav>
  );
}
