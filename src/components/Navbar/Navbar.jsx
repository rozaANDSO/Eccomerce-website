/*
import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";

import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdown from "../../assets/nav_dropdown.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Shop
          </Link>

          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/mens">
            Men{" "}
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="womens"
          >
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/kids">
            Kids{" "}
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
*/

import React, { useContext, useRef, useState, useEffect } from "react";
import "./Navbar.css";

import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdown from "../../assets/nav_dropdown.png";
import bussiness_man from "../../assets/bussiness-man.png";
import avatar from "../../assets/avatar.png";
import boy from "../../assets/boy.png";
import man from "../../assets/man.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const [scrolled, setScrolled] = useState(false);

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  const handleScroll = () => {
    // Set scrolled state to true if scrolled down
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false); // Reset to false if at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the listener on unmount
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>MarketGrove</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/mens">
            Men <img src={bussiness_man} alt="" className="men" />
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="womens"
          >
            Women <img src={avatar} alt="" className="women" />
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/kids">
            Kids <img src={boy} alt="" className="kid" />
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <>
            <span>
              <img src={man} alt="" className="online" />
            </span>
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
