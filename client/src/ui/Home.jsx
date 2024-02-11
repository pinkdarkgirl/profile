import Navbar from "./Navbar";
import profile from "../assets/profile.jpeg";

// Home component displaying the main section
function Home() {
  return (
    <div>
      <Navbar />
      <main className="intro">
        <div className="title-container">
          <p className="subtitle-bg">Hi, my name is</p>
          <p className="title">Sude Tufan.</p>
          <p className="subtitle-sm">
            I am a passionate and innovative web developer proudly based in
            Istanbul.
          </p>
        </div>
        <img src={profile} alt="sude-img" className="intro-img" />
      </main>
      <div>
        {/* svg element for the wave effect  */}
        <svg
          style={{ marginBottom: "-10px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <rect width="100%" height="100%" fill="#d80e27" />

          <path
            fill="#919bd5"
            fillOpacity="1"
            d="M0,192L80,160C160,128,320,64,480,69.3C640,75,800,149,960,181.3C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Home;
