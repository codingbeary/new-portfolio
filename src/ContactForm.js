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
          e.target.reset();

          alert("Your message has been sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-wrapper" id="contact">
      <div className="row">
        <div className="col-md-6">
          <h2> Let's work together!</h2>
          <p>Want to work together or have any questions?</p>
          <strong>
            <p>Get in touch or shoot me an email directly on</p>{" "}
          </strong>
          <h3>
            {" "}
            <a
              href="mailto:kinga.miskiewicz.dev@gmail.com
"
            >
              kinga.miskiewicz.dev@gmail.com
            </a>
          </h3>
        </div>
        <div className="col-md-6">
          <form ref={form} onSubmit={sendEmail}>
            <label className="form-label">Name</label>
            <input type="text" name="from_name" className="form-control" />
            <label className="form-label">Email</label>
            <input type="email" name="form_email" className="form-control" />
            <label className="form-label">Message</label>
            <textarea name="message" className="form-control mb-5" />
            <input type="submit" value="Send" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};
