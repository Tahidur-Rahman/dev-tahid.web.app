import React from "react";
import "./project.css";
import "../App.css";

const projects = [
  {
    name: "Facebook clone",
    live: "https://facebook-clone-ad14c.web.app/",
    github:
      "https://github.com/Tahidur-Rahman/React-Projects/tree/Tahidur-Rahman/React%20JS%20Project/facebook-clone",
    type: "fawg",
    image: "./images/facebook.PNG",
  },
  {
    name: "Messenger clone",
    live: "https://messenger-clone-d5721.web.app/",
    github:
      "https://github.com/Tahidur-Rahman/React-Projects/tree/Tahidur-Rahman/React%20JS%20Project/messenger-clone",
    type: "fawg",
    image: "./images/messenger.PNG",
  },
  {
    name: "Tahidur Rahman",
    live: "https://tahidur-rahman-8be8d.web.app/",
    github:
      "https://github.com/Tahidur-Rahman/React-Projects/tree/Tahidur-Rahman/React%20JS%20Project/tahidur-rahman",
    type: "portfolio",
    image: "./images/tahidur1.PNG",
  },
  {
    name: "Project Store",
    live: "https://projectstore46.web.app/",
    github:
      "https://github.com/octapia/practice/tree/Tahidur-Rahman/React%20JS%20Project/w3schools",
    type: "mini",
    image: "./images/Projectstrore.PNG",
  },
  {
    name: "Text2Binary",
    live: "https://tahidur-rahman.github.io/Text2BinaryConverter/",
    github: "",
    type: "mini",
    image: "./images/textToBinary.PNG",
  },
  {
    name: "Form Validation",
    live: "https://tahidur-rahman.github.io/Form-Validation-1/",
    github: "",
    type: "mini",
    image: "./images/form.PNG",
  },
  {
    name: "Octapia Form",
    live: "https://tahidur-rahman.github.io/OCTAPIA-Form-Validation/",
    github: "",
    type: "mini",
    image: "./images/octapia form.PNG",
  },
  {
    name: "Scroll behaviour",
    live: "https://tahidur-rahman.github.io/Content-Scrolling-behaviour/",
    github: "",
    type: "mini",
    image: "./images/scroll behaviour.PNG",
  },
];

function Project() {
  const filterProject = () => {
    let btns = document.querySelectorAll("button"),
      active = document.activeElement,
      pro = document.querySelectorAll("#project"),a;
      for(a of pro){
       a.style.display =  a.classList.contains(active.className)? 'block':active.classList.contains('all')?'block': 'none';
      }
    for (a of btns) {
      if (a.classList.contains("active")) {
        a.classList.remove("active");
      }
    }
    active.classList.add("active");
  };
  return (
    <div className="projects" id="projects">
        <h1>Projects</h1>
        <div className="btn__group">
          <button className="all active" onClick={filterProject}>
            All
          </button>
          <button className="mini" onClick={filterProject}>
            Mini
          </button>
          <button className="portfolio" onClick={filterProject}>
            Portfolio
          </button>
          <button className="fawg" onClick={filterProject}>
            FAWG
          </button>
        </div>

        <div className="project__container">
          {projects.map((project) => {
            return (
              <div id="project" className={project.type} key={project.name}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={require(`${project.image}`)} alt={project.name} />
                </a>
                <h3>{project.name}</h3>
                <div className="links">
                  <a
                    href={project.live}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
                <p>
                  {project.name} orem ipsum dolor, sit amet consectetur
                  adipisicing elit. Veniam, provident !
                </p>
              </div>
            );
          })}
        </div>
      </div>
  );
}

export default Project;
