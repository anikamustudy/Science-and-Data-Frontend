import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const ProjectSection = ({ isAdmin }) => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectFile, setProjectFile] = useState(null);
  const [projectDescription, setProjectDescription] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const handleFileChange = (e) => {
    setProjectFile(e.target.files[0]);
  };

  const handleToggleChange = () => {
    setIsPublic(!isPublic);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ projectTitle, projectFile, projectDescription, isPublic });
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Project Title</label>
          <input
            type="text"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Project File</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
          {projectFile && (
            <div className="mt-2">
              <p>Selected file: {projectFile.name}</p>
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Project Description</label>
          <textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="mt-1 p-2 w-full border rounded-lg"
            maxLength={200}
            required
          ></textarea>
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 mr-2">Visibility</label>
          <button
            type="button"
            onClick={handleToggleChange}
            className={`px-4 py-2 rounded-lg ${
              isPublic ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {isPublic ? "Public" : "Private"}
          </button>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Save Project
          </button>
        </div>
      </form>
      {isAdmin && (
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Admin Actions</h3>
          <div className="flex space-x-2">
            <button className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg">
              <FaEye className="mr-2" /> View
            </button>
            <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg">
              <FaEdit className="mr-2" /> Edit
            </button>
            <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg">
              <FaTrash className="mr-2" /> Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectSection;
