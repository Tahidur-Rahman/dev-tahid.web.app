import React, { useState } from "react";
import "./navbar.css";
import "../App.css";

const navigations = [
  "home",
  "about",
  "skills",
  "projects",
  "contact",
];

function Navbar() {
  let prevScroll = window.pageYOffset;
  window.onscroll = () => {
    let currentScroll = window.pageYOffset,
      navbar = document.querySelector(".navbar");
    navbar.style.top = prevScroll > currentScroll ? 0 : "-9rem";
    prevScroll = currentScroll;
  };
  const [click, setclick] = useState(false);
  const responsive = () => {
    setclick(!click);

    let nav = document.querySelector("#navbar");
    nav.classList.toggle("responsive");
  };

  return (
    <div className="navbar" id="navbar">
      <a href="#home" className="logo">
        <img src="./favicon.PNG" alt="Tahidur Rahman" />
      </a>
      <ul className={click ? "mobile__nav" : "nav"}>
        {navigations.map((item) => {
          return (
            <a
              href={`#${item}`}
              onClick={responsive}
              key={item}
            >
              {item.toUpperCase()}
            </a>
          );
        })}
      </ul>

      <div className="mobile__menu" onClick={responsive}>
        <i className={`fas fa-${click ? "times" : "bars"}`}></i>
      </div>
    </div>
  );
}

export default Navbar;
