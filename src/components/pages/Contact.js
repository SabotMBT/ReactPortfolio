import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Message sent!");

    emailjs
      .sendForm(
        "service_zg4mo7n",
        "contact_form",
        form.current,
        "ALn2_Xxm9U6_gqUAi"
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
    <div className="brassborder darkbg p-2 shadow">
      <h1>Contact Me!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="row g-3">
          <div className="input-group col-md-8">
            <span className="input-group-text inputbg2 nml">Name</span>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name here..."
              aria-label="First name"
              className="form-control inputbg"
              required
            ></input>
          </div>
          <div className="input-group col-md-8">
            <span
              className="input-group-text inputbg2"
              id="inputGroup-sizing-default"
            >
              Email Address
            </span>
            <input
              type="text"
              name="user_email"
              placeholder="Enter your email address here..."
              className="form-control inputbg"
              aria-label="Email Address input"
              aria-describedby="inputGroup-sizing-default"
              id="validationDefault03"
              required
            ></input>
          </div>
          <div className="input-group">
            <span className="input-group-text inputbg2">Comments</span>
            <textarea
              name="message"
              className="form-control inputbg"
              id="validationDefault05"
              aria-label="Comments"
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" value="Send" className="btn inputbg2 m-2">
          Submit
        </button>
      </form>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      ></script>
      <script type="text/javascript">
        (function(){emailjs.init("ALn2_Xxm9U6_gqUAi")})();
      </script>
    </div>
  );
}
