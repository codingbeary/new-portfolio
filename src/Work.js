import React from "react";
import "./styles/Work.css";
import weatherApp from "./images/weatherApp.png";
import icelandPage from "./images/icelandPage.png";
import dictionaryApp from "./images/dictionaryApp.png";
import worldClock from "./images/worldClock.png";

export default function Work() {
  return (
    <div className="work-wrapper" id="work">
      <h4 className="text-center text-muted p-4">&lt;my recent works &gt;</h4>
      <div className="row mb-5">
        <div className="col-md-6">
          <h3 className="text-center">Weather App</h3>
          <p className="text-muted">
            I built a Vanilla JavaScript weather app in SheCodes Plus, an
            advanced 8-week JavaScript coding workshop. Building upon my
            previously-gained knowledge, I also became skilled in Bootstrap,
            API’s, real-life development workflow, hosting, and advanced
            JavaScript. I combined all of these skills to create a
            fully-functioning weather app.
          </p>
          <strong className="text-muted">
            Built with: HTML, CSS, JavaScript
          </strong>
          <div className="row">
            <div className="col-md-12 text-center">
              <a
                href="https://weather-app-project-kinga-miskiewicz.netlify.app/"
                alt="Weather App"
                target="_blank"
              >
                <button className="btn btn-success shadow">
                  Visit Website
                </button>
              </a>
              <a
                href="https://github.com/kiyooteru/weather-app-new"
                alt="Weather App"
                target="_blank"
              >
                <button className="btn btn-outline-success shadow">
                  View Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={weatherApp}
            alt="weather app"
            className="img-fluid photo shadow"
          />
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <img
            src={icelandPage}
            alt="Iceland landing page"
            className="img-fluid photo shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-center">Iceland landing page</h3>
          <p className="text-muted">
            I entered the world of front-end development by gaining some
            knowledge in HTML, CSS, and JavaScript. I used my knowledge of these
            languages, along with my new skills in VS Code, to build a landing
            page about Yoga. The page utilizes JavaScript functions to create
            user interaction.
          </p>
          <strong className="text-muted">Built with: HTML, CSS, React</strong>
          <div className="row">
            <div className="col-md-12 text-center">
              <button className="btn btn-success shadow">Visit Website</button>
              <button className="btn btn-outline-success shadow">
                View Code
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-6">
          <h3 className="text-center">Dictionary App</h3>
          <p className="text-muted">
            I immersed myself in React development in SheCodes React. I used my
            knowledge of this highly-demanded framework to build a working
            dictionary app incorporating coding best practices, along with the
            most popular tools and technologies.
          </p>
          <strong className="text-muted">Built with: HTML, CSS, React</strong>
          <div className="row">
            <div className="col-md-12 text-center">
              <button className="btn btn-success shadow">Visit Website</button>
              <button className="btn btn-outline-success shadow">
                View Code
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={dictionaryApp}
            alt="weather app"
            className="img-fluid photo shadow"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src={worldClock}
            alt="weather app"
            className="img-fluid photo shadow mb-5"
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-center">World Clock App</h3>
          <p className="text-muted">
            I entered the world of front-end development by gaining some
            knowledge in HTML, CSS, and JavaScript. I used my knowledge of these
            languages, along with my new skills in VS Code, to build a landing
            page about Yoga. The page utilizes JavaScript functions to create
            user interaction.
          </p>
          <strong className="text-muted">Built with: HTML, CSS, React</strong>
          <div className="row">
            <div className="col-md-12 text-center">
              <button className="btn btn-success shadow">Visit Website</button>
              <button className="btn btn-outline-success shadow">
                View Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
