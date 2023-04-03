import React, { useRef } from "react";
import "./styles/ContactForm.css";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1v9kace",
        "template_4tm7bep",
        form.current,
        "fQNbZ-76RPr11joUx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <div className="row">
        <div className="col-6">
          <h4>Let's talk</h4>
          <h2> Let's work together!</h2>
          <p>
            {" "}
            I entered the world of front-end development by gaining some
            knowledge in HTML, CSS, and JavaScript. I used my knowledge of these
            languages, along with my new skills in VS Code, to build a landing
            page about Yoga. The page utilizes JavaScript functions to create
            user interaction.
          </p>
        </div>
        <div className="col-6">
          <form ref={form} onSubmit={sendEmail}>
            <label className="form-label">Name</label>
            <input type="text" name="from_name" className="form-control" />
            <label className="form-label">Email</label>
            <input type="email" name="from_email" className="form-control" />
            <label className="form-label">Message</label>
            <textarea name="message" className="form-control mb-5" />
            <input type="submit" value="Send" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};
