import React from "react";

import UserLogin from "../components/UserLogin";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <UserLogin />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
