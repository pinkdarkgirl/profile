// component import
import Slider from "../ui/Slider";

// Projects component showcasing the projects
function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects-container">
        <h1>my projects</h1>
        <Slider />
      </div>
      {/* svg for displaying wave effect*/}
      <svg
        style={{ marginBottom: "-10px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <rect width="100%" height="100%" fill="#d80e27" />
        <path
          fill="#919bd5"
          fillOpacity="1"
          d="M0,32L48,64C96,96,192,160,288,176C384,192,480,160,576,128C672,96,768,64,864,74.7C960,85,1056,139,1152,170.7C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default Projects;
