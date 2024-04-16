import React, { useEffect, useState } from "react";
import { Input } from "antd";
import "../style/landing.css";
import img1 from "../Assets/model1.png";
import img2 from "../Assets/1.png";
import img3 from "../Assets/2.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-bootstrap";
import { CheckCircleOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from 'framer-motion';


function Landing() {
  const { Search } = Input;

  const onSearch = (cat) => {
    console.log("hello");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };



  return (
    <div>
      <div>
        <div className="hero-slider">
          <Slider {...settings}>
            <div className="land_bg">
              <div>
                <div className="dis">
                  <div className="hero">
                    <p className="para">Our Benefit</p>
                    <h1 className="heading">
                      Helping others find a better way
                    </h1>
                    <div
                      style={{
                        display: "flex",
                        marginLeft: "200px",
                        marginTop: "40px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          height: "auto",
                          width: "200px",
                        }}
                      >
                        <label htmlFor="check" className="icons">
                          <CheckCircleOutlined icon={faBars} />
                        </label>
                        <h5>Long Life Sunglasses</h5>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          height: "auto",
                          width: "200px",
                        }}
                      >
                        <label htmlFor="check" className="icons">
                          <CheckCircleOutlined icon={faBars} />
                        </label>
                        <h5>Created By Nature</h5>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          height: "auto",
                          width: "180px",
                        }}
                      >
                        <label htmlFor="check" className="icons">
                          <CheckCircleOutlined icon={faBars} />
                        </label>
                        <h5>The Rest Behind</h5>
                      </div>
                    </div>
                    <button className="btn_shopnow">
                      Shop Now <ArrowRightOutlined icon={faBars} />
                    </button>
                  </div>
                  <div class="image-container">
                    <img class="home_img" src={img1} alt="presentation" />
                  </div>
                </div>
              </div>
            </div>

            <div className="land_bg">
              <div>
                <div className="dis">
                  <div className="hero">
                    <p className="para2">Our products</p>
                    <h1 className="heading2">
                      They're amazing everywhere you look
                    </h1>

                    <div
                      style={{
                        display: "flex",
                        marginLeft: "48px",
                        marginTop: "20px",
                        width: "500px",
                        marginRight: "250px",
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      We need only one thing , customer’s SATISFACTION
                    </div>
                    <button className="btn_shopnow">
                      Shop Now <ArrowRightOutlined icon={faBars} />
                    </button>
                  </div>
                  <div class="image-container">
                    <img class="home_img" src={img2} alt="presentation" />
                  </div>
                </div>
              </div>
            </div>

            <div className="land_bg">
              <div>
                <div className="dis">
                  <div className="hero">
                    <p className="para1">About us</p>
                    <h1 className="heading1">The Best Collection of Glasses</h1>

                    <div
                      style={{
                        display: "flex",
                        marginLeft: "100px",
                        marginTop: "20px",
                        width: "450px",
                        marginRight: "250px",
                      }}
                    >
                      fashion style for a long time with some big name companies
                      behind it. I’ve gotten to watch our videos, interview and
                      look at all of their cool products in person as well.” At
                      first, Lott says that the product has been too expensive
                      but he’s not worried about being left out; “With my budget
                      now
                    </div>
                    <button className="btn_shopnow1">
                      Shop Now <ArrowRightOutlined icon={faBars} />
                    </button>
                  </div>
                  <div class="image-container">
                    <img class="home_img" src={img3} alt="presentation" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
    
    <div style={{display:"flex",width:"100%",height:"400px",marginTop:"50px"}}>
         <div>
            <h3   style={{
                        display: "flex",
                        marginLeft: "20px",
                        marginTop: "70px",
                        width: "400px",
                        marginRight: "250px",
                      }}>The Best Collection of Glasses</h3>
            <p  style={{
                        display: "flex",
                        marginLeft: "20px",
                        marginTop: "20px",
                        width: "400px",
                        marginRight: "250px",
                      }}> fashion style for a long time with some big name companies
                      behind it. I’ve gotten to watch our videos, interview and
                      look at all of their cool products in person as well.” At
                      first, Lott says that the product has been too expensive
                      but he’s not worried about being left out; “With my budget
                      now
            </p>
         </div>

         <div>
    <motion.div
  initial={{ opacity: 0, scale: 0, x: 500 }}
  whileInView={{ opacity: 1, scale: 1, x: 0 }} // Provide a numeric value for scale
  transition={{ duration:1.0 }}
>
  <img src={img1} alt="images" style={{height:"350px",width:"250px",marginLeft:"-200px"}}/>
  <img src={img2} alt="images" style={{height:"350px",width:"250px",marginLeft:"30px"}}/>
  {/* <img src={img2} alt="images" style={{height:"350px",width:"250px",marginLeft:"30px"}}/> */}
 
</motion.div>

</div>
    </div>

      </div>
    </div>
  );
}

export default Landing;
