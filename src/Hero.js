import React from "react";
import "./styles/Hero.css";
import artwork from "./images/artwork.png";

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="row">
        <div className="col-6">
          <div className="heading">
            <h3>Hi, my name is</h3>
            <h2>Kinga Miśkiewicz</h2>
            <h1>Junior &lt;/frontend developer&gt;</h1>
            <span>
              <button className="btn btn-primary">explore my work </button>
              <button className="btn btn-primary">download resume</button>
            </span>
          </div>
        </div>
        <div className="col-6">
          <img src={artwork} alt="unicorn" className="img-fluid unicorn" />
        </div>
      </div>
    </div>
  );
}
