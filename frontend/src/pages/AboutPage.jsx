import React from "react";
import About from "../components/About";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";

const AboutPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <About />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
