import React from "react";
import "./styles/Work.css";
import weatherApp from "./images/weatherApp.png";
import icelandPage from "./images/icelandPage.png";
import dictionaryApp from "./images/dictionaryApp.png";
import worldClock from "./images/worldClock.png";

export default function Work() {
  return (
    <div className="work-wrapper">
      <h4 className="text-center muted">my recent works</h4>
      <div className="row">
        <div className="col-6">
          <h3 className="text-center">Weather App</h3>
          <p>
            I entered the world of front-end development by gaining some
            knowledge in HTML, CSS, and JavaScript. I used my knowledge of these
            languages, along with my new skills in VS Code, to build a landing
            page about Yoga. The page utilizes JavaScript functions to create
            user interaction.
          </p>
          <span>
            <button className="btn btn-primary">Visit Website</button>
            <button className="btn btn-warning">View Code</button>
          </span>
        </div>
        <div className="col-6">
          <img src={weatherApp} alt="weather app" className="img-fluid photo" />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <img
            src={icelandPage}
            alt="Iceland Landing Page"
            className="img-fluid photo"
          />
        </div>
        <div className="col-6">
          <h3 className="text-center">Weather App</h3>
          <p>
            I entered the world of front-end development by gaining some
            knowledge in HTML, CSS, and JavaScript. I used my knowledge of these
            languages, along with my new skills in VS Code, to build a landing
            page about Yoga. The page utilizes JavaScript functions to create
            user interaction.
          </p>
          <span>
            <button className="btn btn-primary">Visit Website</button>
            <button className="btn btn-warning">View Code</button>
          </span>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <h3 className="text-center">Weather App</h3>
          <p>
            I entered the world of front-end development by gaining some
            knowledge in HTML, CSS, and JavaScript. I used my knowledge of these
            languages, along with my new skills in VS Code, to build a landing
            page about Yoga. The page utilizes JavaScript functions to create
            user interaction.
          </p>
          <span>
            <button className="btn btn-primary">Visit Website</button>
            <button className="btn btn-warning">View Code</button>
          </span>
        </div>
        <div className="col-6">
          <img
            src={dictionaryApp}
            alt="weather app"
            className="img-fluid photo"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <img
            src={worldClock}
            alt="Iceland Landing Page"
            className="img-fluid photo"
          />
        </div>
        <div className="col-6">
          <h3 className="text-center">Weather App</h3>
          <p>
            I entered the world of front-end development by gaining some
            knowledge in HTML, CSS, and JavaScript. I used my knowledge of these
            languages, along with my new skills in VS Code, to build a landing
            page about Yoga. The page utilizes JavaScript functions to create
            user interaction.
          </p>
          <span>
            <button className="btn btn-primary">Visit Website</button>
            <button className="btn btn-warning">View Code</button>
          </span>
        </div>
      </div>
    </div>
  );
}
