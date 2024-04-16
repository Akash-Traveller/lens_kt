import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import img from "../Assets/logo.png";

import "../style/header.css";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

import {
  UnorderedListOutlined, 
  CaretDownOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Login from "../common/Login";

function Header() {
  const { Search } = Input;
  const navigation = useNavigate();

  const onSearch = (cat) => {
    console.log("hello");
  };
  const Login = (login) => {
    navigation("/login");
  };

  const Landing = (login) => {
    navigation("/landing");
  };

  const cart = (cat) => {
    navigation("/cart");
  };
  const [addMargin, setAddMargin] = useState(false);

  const handleClick = () => {
    setAddMargin(!addMargin); // Toggle the state to add/remove margin
  
  };


  return (
    <nav>
      <div className="header">
        <div className="icons_menu"    style={{
          marginBottom: addMargin ? "350px" : "0px" 
        }}>
          <label htmlFor="check"  onClick={handleClick} >
            <UnorderedListOutlined icon={faBars} />
          </label>
          
        </div>
        <div className="both" onClick={Landing}>
          <img src={img} alt="logo" className="logo" />
          <p className="logo_text">SRI OPTICALS</p>
        </div>
        <div class="search-container">
          <Input
            placeholder="Search" style={{color:"black",fontSize:"1.3rem"}}
            className="search"
            suffix={<SearchOutlined style={{ color:"black",fontSize:"1.5rem" }} />}
            onPressEnter={(e) => onSearch(e.target.value)}
            // Add any additional props you need (e.g., onChange, onBlur)
          />
        </div>

        <div  onClick={cart}>
          <label htmlFor="check" className="cart_icons">
            <ShoppingCartOutlined icon={faBars} />
          </label>
          <p className="cart_text">Cart</p>
        </div>

        <div style={{ display: "flex" }} onClick={Login}>
          <label htmlFor="check" className="user_icons ">
            <UserOutlined icon={faBars} />
          </label>
          <p className="user_text">User</p>
          <label htmlFor="check" className="drop_icons">
            <CaretDownOutlined icon={faBars} />
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Header;
