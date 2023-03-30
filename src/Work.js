import React from "react";
import "./styles/Work.css";
import weatherApp from "./images/weather-app.png";
import yoga from "./images/yoga-project.png";

export default function Work() {
  return (
    <div id="carouselExampleCaptions" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-6 text-center">some texy sksks</div>
            <div className="col-6">
              <img src={yoga} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item">
          <div className="row">
            <div className="col-6">some texy sksks</div>
            <div className="col-6">
              <img src={weatherApp} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div> */}

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
