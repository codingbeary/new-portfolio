import React from "react";
import "./styles/Tools.css";
import html from "./images/logos/html5.png";
import css from "./images/logos/css3.png";
import javascript from "./images/logos/javascript.png";
import react from "./images/logos/react.png";
import php from "./images/logos/php.png";

export default function Tools() {
  return (
    <div className="tools-wrapper">
      <h5 className="text-center header"> tools & languages</h5>
      <div className="row">
        <div className="col-3 frontend">
          <h6 className="text-center">Frontend</h6>
          <div className="row">
            <div className="col-3">
              <img className="img-fluid" src={html} alt="html" />
            </div>
            <div className="col-3">
              <img className="img-fluid" src={css} alt="css" />
            </div>
            <div className="col-3">
              <img className="img-fluid" src={javascript} alt="css" />
            </div>
            <div className="col-3">
              <img className="img-fluid" src={react} alt="css" />
            </div>
          </div>
        </div>

        <div className="col-3 backend">
          <h6 className="text-center">Backend</h6>
          <div className="row">
            <div className="col-3">
              <img className="img-fluid" src={php} alt="css" />
            </div>
          </div>
        </div>
        <div className="col-3">
          <h6 className="text-center">Design & illustration</h6>
        </div>
        <div className="col-3">
          <h6 className="text-center">Other</h6>
        </div>
      </div>
    </div>
  );
}
