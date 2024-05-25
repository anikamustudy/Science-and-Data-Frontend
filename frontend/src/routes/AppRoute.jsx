import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar"; // Adjust the path if necessary

// import ProjectsNavbar from "../common/Navbar/ProjectsNavbar";

import UserLoginPage from "../pages/UserLoginPage";
import DataPage from "../pages/DataPage";
import ContactPage from "../pages/ContactPage";
import ProjectsPage from "../pages/ProjectsPage";
import AboutPage from "../pages/AboutPage";
import ViewProjectsPage from "../pages/ViewProjectsPage";
import AddProjectsPage from "../pages/AddProjectsPage";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/data-Ppage" element={<DataPage />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/projects-page" element={<ProjectsPage />} />
        <Route path="/view-projects-page" element={<ViewProjectsPage />} />
        <Route path="/add-projects-page" element={<AddProjectsPage />} />
        <Route path="/user-login-page" element={<UserLoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
