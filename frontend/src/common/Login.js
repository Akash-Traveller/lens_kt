import React from "react";
import "../style/login.css";
import img from "../Assets/1.png";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  GoogleOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

function Login() {
  return (
    <div className="signin">
      <div className="signin1">
        <div>
          <h6 className="login_heading">Login</h6>
        </div>
        <div>
          <form className="fo" style={{ width: "100%", marginLeft: "20%",marginTop:"70px" }}>
            <div className="inputs">
              <label htmlFor="exampleInputEmail1" className="email_name">
                Email address
              </label>
              <input
                type="email"
                className="email_bar"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="exampleInputPassword1"
                className="email_name"
                style={{ marginTop: "60px" }}
              >
                Password
              </label>
              <input
                type="password"
                className="email_bar"
                id="exampleInputPassword1"
                placeholder="Your Password"
              />
            </div>

            <div style={{ display: "flex", marginTop: "50px", width: "100%" }}>
              <div style={{ flex: 1 }}>
                <div
                  className="form-group form-check"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    className=""
                    id="exampleCheck1"
                    style={{ marginLeft: "16px" }}
                  />
                  <label className="" htmlFor="exampleCheck1">
                    RememberMe
                  </label>
                </div>
              </div>
              <div style={{ flex: 1, textAlign: "right", marginLeft: "170px" }}>
                <a href="" className="forgotpassword">
                  ForgotPassword
                </a>
              </div>
            </div>

            <div className="email_name">
              Don't have an account?
              <Link to="/signup" style={{ color: "blue" }}>
                Register here
              </Link>
            </div>
            <div
              style={{
                marginTop: "20px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div style={{ marginTop: "30px", marginLeft: "150px" }}>
              <div>Or Signin Useing</div>
              <div style={{ marginTop: "10px" }}>
                {" "}
                <GoogleOutlined
                  icon={faBars}
                  style={{
                    marginLeft: "15px",
                    color: "red",
                    fontSize: "1.4rem",
                    marginRight: "10px",
                  }}
                />
                <TwitterOutlined
                  icon={faBars}
                  style={{
                    color: "red",
                    fontSize: "1.4rem",
                    marginRight: "10px",
                  }}
                />
                <FacebookOutlined
                  icon={faBars}
                  style={{
                    color: "red",
                    fontSize: "1.4rem",
                    marginRight: "10px",
                  }}
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <img src={img} alt="images" className="images_signin " />
        </div>
      </div>
    </div>
  );
}

export default Login;
