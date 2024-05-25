import React from "react";
import Projects from "../components/Projects/Projects";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";

const ProjectsPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Projects />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
