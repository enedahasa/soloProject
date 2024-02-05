import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
  );
};

export default Hero;
