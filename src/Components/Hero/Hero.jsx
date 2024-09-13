// import React from "react";
import "./Hero.css";
import image from "../Assets/logo.png";
import asset1 from "../Assets/Asset-1.png";
import asset2 from "../Assets/Asset-2.png";
import asset3 from "../Assets/Asset-3.png";

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Hero = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="hero">
      <p id="heading">Welcome to your Market Place!</p>
      <div className="slider">
        <Link style={{ textDecoration: "none" }} to="/jewellery">
          <div className="category-box" id="jewellery">
            <img src={image} alt="" />
            Jewellery
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/home-decore">
          <div className="category-box" id="home-decore">
            <img src={image} alt="" />
            Home Decore
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/clothing">
        <div className="category-box" id="clothing">
          <img src={image} alt="" />
          Clothing
        </div></Link>

        <Link style={{ textDecoration: "none" }} to="/gifting">
        <div className="category-box" id="gifting">
          <img src={image} alt="" />
          Gifting
        </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/organic">
        <div className="category-box" id="organic">
          <img src={image} alt="" />
          Organic
        </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/art-and-craft">
        <div className="category-box" id="art">
          <img src={image} alt="" />
          Art & Craft
        </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/handicraft">
        <div className="category-box" id="handicraft">
          <img src={image} alt="" />
          HandiCrfat
        </div>
        </Link>
      </div>
      <div className="banner">
        <div className="banner-box">
          <img src={asset1} alt="" />
        </div>
        <div className="banner-box">
          <img src={asset2} alt="" />
        </div>
        <div className="banner-box">
          <img src={asset3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
