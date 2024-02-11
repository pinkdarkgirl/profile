// component imports
import Home from "./Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "./Footer";

// AppLayout component representing the layout of the application
function AppLayout() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default AppLayout;
