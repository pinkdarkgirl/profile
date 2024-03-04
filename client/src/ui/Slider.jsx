// react import
import { useState } from "react";

// rrd import
import { Link } from "react-router-dom";

// image imports
import profile from "../assets/profile-project.png";
import tufanTarim from "../assets/tufan-tarim-project.png";
import sandbox from "../assets/sandbox.png";

// projects data
//TODO
const projects = [
  {
    projectName: "",
    projectImg: profile,
    projectLink: "https://github.com/pinkdarkgirl/profile",
  },
  {
    projectName: "",
    projectImg: tufanTarim,
    projectLink: "https://github.com/pinkdarkgirl/tufan-tarim",
  },
  {
    projectName: "3",
    projectImg: sandbox,
    projectLink: "https://github.com/pinkdarkgirl/sandbox-clone",
  },
  { projectName: "4", projectImg: "", projectLink: "" },
  { projectName: "5", projectImg: "", projectLink: "" },
];

function Slider() {
  const [currentProject, setCurrentProject] = useState(0);

  // function to handle showing the next or previous slide
  const showSlide = (i) => {
    const projectsLength = projects.length;
    if (i < 0) {
      setCurrentProject(projectsLength - 1);
    } else if (i >= projectsLength * 2) {
      setCurrentProject(0);
    } else {
      setCurrentProject(i);
    }
  };

  // calculate start and end indices for displaying projects
  const start = currentProject;
  const end = Math.min(currentProject + 3, projects.length * 2); // so that end doesn't exceed array length

  // duplicate projects array for smooth looping
  const doubledProjects = [...projects, ...projects];

  const nextSlide = () => {
    showSlide(currentProject + 1);
  };

  const prevSlide = () => {
    showSlide(currentProject - 1);
  };

  return (
    <div className="slider-container">
      <div className="projects-slider">
        {doubledProjects.slice(start, end).map((project, i) => (
          <Link
            to={project.projectLink}
            target="_blank"
            key={i}
            className="project-item"
          >
            <div
              className="item-after"
              style={{
                background:
                  project.projectImg !== ""
                    ? `url(${project.projectImg}) left top/cover no-repeat`
                    : "#fdf2de",
              }}
            ></div>
            <h3>{project.projectName}</h3>
          </Link>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="next" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
}

export default Slider;
