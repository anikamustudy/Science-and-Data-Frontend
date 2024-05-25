// src/App.jsx
import React from "react";
import ProjectSection from "./ProjectSection";

const Projects = () => {
  const isAdmin = true; // Set to true if the user is an admin

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <ProjectSection isAdmin={isAdmin} />
    </div>
  );
};

export default Projects;
