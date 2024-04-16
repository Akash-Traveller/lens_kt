import React from "react";
import "../style/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import img from "../Assets/logo.png";
import img1 from "../Assets/cart3.svg";
import img2 from "../Assets/login.svg";
import img3 from "../Assets/user_logo.svg";


import { Input } from "antd";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const { Search } = Input;
  const navigation=useNavigate()

  const onSearch = (cat) => {
    console.log("hello");
  };

  const cart = (cat) => {
    navigation("/cart")
  };
  return (
    <div className="header">
      <div>
        <label htmlFor="check" className="icons">
          <FontAwesomeIcon icon={faBars} />
        </label>
      </div>
      <div>
        <img src={img} alt="logo" className="logo" />
        <p className="logo_text">SRI OPTICALS</p>
      </div>
      <div class="search-container">
        <Search
          className="search"
          placeholder="Search by category"
          onSearch={onSearch}
          enterButton
        />
      </div>

      <div onClick={cart}>
        <img src={img1} alt="logo" className="cart_logo" />
        <p className="cart_text">Cart</p>
      </div>

      <div>
        <img src={img2} alt="logo" className="login_logo" />
        <p className="login_text">Login</p>
      </div>
      <div>
      <p className="user_text">User</p>
        <img src={img3} alt="logo" className="user_logo" />
        
      </div>
    </div>
  );
}

export default NavBar;
