import React from "react";
import Navbar from "../../comman/Navbar/Navbar";
import Footer from "../../comman/Footer/Footer";
import Home from "../components/Home";

const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
