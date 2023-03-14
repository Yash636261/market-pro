import React, { useState } from 'react';
import axios from 'axios';

const CreateProject = () => {
  const [projectData, setProjectData] = useState({
    projectname: '',
    description: '',
    howTOSetup: '',
    DOCXUrl: '',
    price: '',
    isVerfied: false,
    createdBy: '',
    TechUsed: '',
    Features: '',
    cover:''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProjectData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/v1/projects', projectData);
      console.log('Project created successfully');
    } catch (err) {
      console.log("This is Error", err);
    }
  };

  return (
    <div>
      <h1>New Project</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="projectname">Project Name:</label>
          <input type="text" id="projectname" name="projectname" value={projectData.projectname} onChange={handleChange} required />
        </div>
        <div>
          <div>
            <label htmlFor="isVerfied">Is Verified:</label>
            <input
              id="isVerfied"
              name="isVerfied"
              type="checkbox"
              checked={projectData.isVerfied}
              onChange={handleChange}
            />
          </div>

          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={projectData.description} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="DOCXUrl">DOCX URL:</label>
          <input type="text" id="DOCXUrl" name="DOCXUrl" value={projectData.DOCXUrl} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="howTOSetup">How to Set Up:</label>
          <textarea
            id="howTOSetup"
            name="howTOSetup"
            value={projectData.howTOSetup}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" value={projectData.price} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="TechUsed">TechUsed</label>
          <textarea
            id="TechUsed"
            name="TechUsed"
            value={projectData.TechUsed}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Features">Features</label>
          <textarea
            id="Features"
            name="Features"
            value={projectData.Features}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cover">cover</label>
          <textarea
            id="cover"
            name="cover"
            value={projectData.cover}
            onChange={handleChange}
            required
          />
</div>
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
};

export default CreateProject;
