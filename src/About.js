import React from "react";
import "./styles/About.css";
import html from "./images/logos/html5.png";
import css from "./images/logos/css3.png";
import javascript from "./images/logos/javascript.png";
import react from "./images/logos/react.png";
import php from "./images/logos/php.png";
import vscode from "./images/logos/vscode.png";
import bootstrap from "./images/logos/bootstrap.png";
import figma from "./images/logos/figma.png";
import github from "./images/logos/github.png";
import mysql from "./images/logos/mysql.png";
import photoshop from "./images/logos/photoshop.png";
import slack from "./images/logos/slack.png";
import portrait from "./images/portrait.jpg";

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="row">
        <div className="col-md-6">
          <h2>About me</h2>
          <p>
            I entered the world of front-end development by gaining some
            knowledge in HTML, CSS, and JavaScript. I used my knowledge of these
            languages, along with my new skills in VS Code, to build a landing
            page about Yoga. The page utilizes JavaScript functions to create
            user interaction.
          </p>
        </div>
        <div className="col-md-6">
          <img src={portrait} alt="portrait" className="img-fluid portrait" />
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-4 col-md-2">
            <img src={html} alt="html" className="img-fluid logo" />
          </div>
          <div className="col-4 col-md-2">
            <img src={css} alt="html" className="img-fluid logo" />
          </div>
          <div className="col-4 col-md-2">
            <img src={javascript} alt="html" className="img-fluid logo" />
          </div>
          <div className="col-4 col-md-2">
            <img src={react} alt="html" className="img-fluid logo" />
          </div>
          <div className="col-4 col-md-2">
            <img src={php} alt="php" className="img-flui logo" />
          </div>
          <div className="col-4 col-md-2">
            <img src={mysql} alt="php" className="img-fluid logo" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4 col-md-2">
            <img src={figma} alt="php" className="img-fluid logo" />
          </div>
          <div className="col-4 col-md-2">
            <img src={photoshop} alt="php" className="img-fluid logo" />
          </div>
          <div className="col-4 col-md-2">
            <img src={slack} alt="php" className="img-fluid logo" />
          </div>
          <div className="col-4 col-md-2">
            <img src={vscode} alt="php" className="img-fluid logo" />
          </div>
          <div className="col-4 col-md-2">
            <img src={bootstrap} alt="php" className="img-fluid logo" />
          </div>
          <div className="col-4 col-md-2">
            <img src={github} alt="php" className="img-fluid logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
