// icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

// About component representing information about me
function About() {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h1>about me</h1>
          <p>
            As a web developer, I immerse myself in the intricate world of
            coding with a relentless curiosity, constantly striving to elevate
            my skills to new heights. Specializing in transforming ideas into
            seamless digital experiences, I try bring a dedicated and
            detail-oriented approach.
          </p>
          <p>
            My passion is deeply rooted in the art of problem-solving, where I
            find both challenge and fulfillment. As a entry-level developer, I
            recognize each obstacle as an opportunity for growth, pushing me to
            continuously learn and explore innovative solutions.
          </p>
          <p>
            Guided by an unyielding thirst for knowledge, I embrace the dynamic
            nature of web development. My journey is an ongoing exploration, a
            dedicated quest to deepen my understanding and refine the art of
            coding. In this ever-evolving landscape, I am committed to making
            purposeful strides, aspiring to contribute.
          </p>
        </div>
        <div className="about-skills">
          <h2>my skill set</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHtml5} size="5x" />
              <p>HTML</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCss3Alt} size="5x" />
              <p>CSS</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faJs} size="5x" />
              <p>JavaScript</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faReact} size="5x" />
              <p>React</p>
            </li>
          </ul>
        </div>
      </div>
      <svg
        style={{ marginBottom: "-10px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <rect width="100%" height="100%" fill="#919bd5" />

        <path
          fill="#d80e27"
          fillOpacity="1"
          d="M0,64L80,69.3C160,75,320,85,480,101.3C640,117,800,139,960,128C1120,117,1280,75,1360,53.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default About;
