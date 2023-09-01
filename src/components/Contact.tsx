/**
 * Render contact form that send user input data to Firebase databasee
 */

import { useState } from "react";

import firebase from "../firebase";

export interface ContactProps {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  /**
   * State variables to store user input data
   */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  /**
   * Function to sumbit user input data to Firebase database
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const contactRef = firebase.database().ref("Contact");
    const contact = {
      name,
      email,
      message,
    };

    contactRef.push(contact);
  };

  /**
   * Error handling for contact form
   */
  const userName = document.forms["contact-form"]["name"].value;
  const userEmail = document.forms["contact-form"]["email"].value;
  const userMessage = document.forms["contact-form"]["message"].value;

  userName === "" || userName === null ? alert("Please enter your name") : null;
  userEmail === "" || userEmail === null
    ? alert("Please enter your email")
    : null;
  userMessage === "" || userMessage === null
    ? alert("Please enter your message")
    : null;

  return (
    <>
      <div className="contact-container">
        <h1>Contact Me</h1>
        <form method="post" className="contact-form">
          <label htmlFor="name">First Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />

          <label htmlFor="email">Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit" onClick={handleSubmit}></button>
        </form>
      </div>
    </>
  );
};

export default Contact;
