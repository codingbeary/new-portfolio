import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <h3 className="text-center text-muted">
        This project was designed, illustrated and coded by Kinga Miśkiewicz and
        is{" "}
        <a href="https://github.com/kiyooteru/new-portfolio">
          open-sourced on Github
        </a>
      </h3>
    </div>
  );
}
