import React from "react";
import "./styles/Tools.css";
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

export default function Tools() {
  return (
    <div className="tools-wrapper">
      <h3 className="text-center">tools & languages</h3>
      <div className="row">
        <div className="col-6">
          <p>euhfurfhgryfgr</p>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <img src={html} alt="html" className="img-fluid" />
            </div>
            <div className="col-3">
              <img src={css} alt="html" classname="img-fluid" />
            </div>
            <div className="col-3">
              <img src={javascript} alt="html" classname="img-fluid" />
            </div>
            <div className="col-3">
              <img src={react} alt="html" classname="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <img src={php} alt="php" className="img-fluid" />
            </div>
            <div className="col-3">
              <img src={mysql} alt="php" className="img-fluid" />
            </div>
            <div className="col-3">
              <img src={figma} alt="php" className="img-fluid" />
            </div>
            <div className="col-3">
              <img src={photoshop} alt="php" className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <img src={slack} alt="php" className="img-fluid" />
            </div>
            <div className="col-3">
              <img src={vscode} alt="php" className="img-fluid" />
            </div>
            <div className="col-3">
              <img src={bootstrap} alt="php" className="img-fluid" />
            </div>
            <div className="col-3">
              <img src={github} alt="php" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
