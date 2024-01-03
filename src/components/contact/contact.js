import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PiCopySimpleLight } from "react-icons/pi";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rxcesiy",
        "template_1w2jzda",
        form.current,
        "8KMF4C3ArtSJoZxfo"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      );
  };

  return (
    <div className="contact">
      <div
        className="contact-line"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div style={{ flex: 1, backgroundColor: "#838485", height: "3px" }} />
        <div className="contact-title">Contact Us</div>
        <div style={{ flex: 1, backgroundColor: "#838485", height: "3px" }} />
      </div>

      <div className="contact-content">
        <form ref={form} onSubmit={sendEmail}>
          <label>Email</label>
          <input className="input-email" type="email" name="user_email" />
          <label>Subject</label>
          <input className="input-subject" type="subject" name="subject" />
          <label>Message</label>
          <textarea className="textarea-message" name="message" />
          <input className="submit-button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
