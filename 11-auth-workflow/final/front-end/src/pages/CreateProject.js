import React, { useState } from "react";
import axios from "axios";

const CreateProject = () => {
  const [projectData, setProjectData] = useState({
    projectname: "",
    description: "",
    howTOSetup: "",
    DOCXUrl: "",
    price: "",
    isVerfied: false,
    createdBy: "",
    TechUsed: "",
    Features: "",
    cover: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProjectData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v1/projects", projectData);
      console.log("Project created successfully");
    } catch (err) {
      console.log("This is Error", err);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">New Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="projectname"
          >
            Project Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="projectname"
            name="projectname"
            value={projectData.projectname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <input
              className="form-checkbox h-5 w-5 text-gray-600"
              id="isVerfied"
              name="isVerfied"
              type="checkbox"
              checked={projectData.isVerfied}
              onChange={handleChange}
            />
            <label
              className="ml-2 block text-gray-700 font-bold mb-2"
              htmlFor="isVerfied"
            >
              Is Verified
            </label>
          </div>

          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            Description:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            value={projectData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="DOCXUrl"
          >
            DOCX URL:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="DOCXUrl"
            name="DOCXUrl"
            value={projectData.DOCXUrl}
            onChange={handleChange}
          />
        </div>
        <div>
          <label 
            className="block text-gray-700 font-bold mb-2"
            htmlFor="howTOSetup">How to Set Up:</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
            id="howTOSetup"
            name="howTOSetup"
            value={projectData.howTOSetup}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-bold mb-2"
             htmlFor="price">Price:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="price"
            name="price"
            value={projectData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label 
            className="block text-gray-700 font-bold mb-2"
            htmlFor="TechUsed">TechUsed</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="TechUsed"
            name="TechUsed"
            value={projectData.TechUsed}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label 
            className="block text-gray-700 font-bold mb-2"
            htmlFor="Features">Features</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Features"
            name="Features"
            value={projectData.Features}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label 
            className="block text-gray-700 font-bold mb-2"
            htmlFor="cover">cover</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cover"
            name="cover"
            value={projectData.cover}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Create Project</button>
      </form>
    </div>
  );
};

export default CreateProject;
