import React from "react";
import "./styles/About.css";
import portrait from "./images/portrait.jpg";

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="row">
        <div className="col-6">
          <h2>About me</h2>
          <p>
            I entered the world of front-end development by gaining some
            knowledge in HTML, CSS, and JavaScript. I used my knowledge of these
            languages, along with my new skills in VS Code, to build a landing
            page about Yoga. The page utilizes JavaScript functions to create
            user interaction.
          </p>
        </div>
        <div className="col-6">
          <img src={portrait} alt="portrait" className="img-fluid portrait" />
        </div>
      </div>
    </div>
  );
}
