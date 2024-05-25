import React from "react";
import Contact from "../components/Contact";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";

const ContactPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
