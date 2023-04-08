import React from "react";
import "./styles/Hero.css";
import artwork from "./images/artwork.png";

export default function Hero() {
  const handleButtonClick = () => {
    const workSection = document.getElementById("work");
    workSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-wrapper" id="home">
      <div className="row">
        <div className="col-md-6 order-md-1 order-2">
          <div className="heading">
            <h3 className="hero-heading">Hi, my name is</h3>
            <h2>Kinga Miśkiewicz</h2>
            <h1>
              Junior <span className="bold">&lt;/frontend developer&gt;</span>
            </h1>
            <span>
              <button
                className="btn btn-success p-2 shadow"
                onClick={handleButtonClick}
              >
                explore my work{" "}
              </button>
              <a href="/resume.pdf" alt="resume" download>
                <button className="btn btn-outline-success p-2 shadow ">
                  download resume
                </button>
              </a>
            </span>
          </div>
        </div>
        <div className="col-md-6 order-md-2 order-1">
          <img src={artwork} alt="unicorn" className="img-fluid header-image" />
        </div>
      </div>
      <a href="#about">
        <div className="scroll-down"></div>
      </a>
    </div>
  );
}
