import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactWrapper">
        <h1 className="contactTitle">Connect with us!!</h1>
        <div className="contactIcons">
          <a
            href="https://www.instagram.com/yasmine.latamene/?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="link conIcon"
          >
            <i class="fab fa-instagram-square"></i>
          </a>

          

          <a
            href="https://www.facebook.com/yasmine.ninette.58"
            rel="noopener noreferrer"
            target="_blank"
            className="link conIcon"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
