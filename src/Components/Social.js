import React from "react";
import "./social.css";
import '../App.css'

const socialInfo = [
  { platform: "facebook", href: "http://www.facebook.com/tahid.2" },
  { platform: "github", href: "http://www.github.com/Tahidur-Rahman" },
  { platform: "linkedin", href: "http://www.linkedin.com/in/Tahidur-Rahman" },
];

function Social() {
  return (
    <div className="social">
      {socialInfo.map((social) => {
        return (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={social.href}
            className={social.platform}
            key={social.platform}
          >
            <i className={`fab fa-${social.platform}`}></i> {social.platform.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}

export default Social;
