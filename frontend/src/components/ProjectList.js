// src/components/ProjectList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/projects/')
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    
    const filteredProjects = projects.filter((project) => {
      const search = searchTerm.toLowerCase();
      // Check if the search term matches any of the project's fields
      return (
        project.title.toLowerCase().includes(search) ||
        project.technologies.toLowerCase().includes(search) ||
        project.frontend_skills.toLowerCase().includes(search) ||
        project.backend_skills.toLowerCase().includes(search) ||
        project.databases.toLowerCase().includes(search) ||
        project.infrastructure.toLowerCase().includes(search) ||
        project.availability.toLowerCase().includes(search)
      );
    });
if (filteredProjects != null) {
  return (
    <div className="project-list">
        <div className="search-box">
            <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <div className="row">
      {
        
        filteredProjects.map((projects) => (
          <div className="column">
            <div className="card">
            <p>Title </p>
              <h2 className="heading">{projects.title}</h2>
              <hr></hr>
              <p>Technologies: </p>
              <p>{projects.technologies}</p>
              <p>Frontend: </p>
              <p>{projects.frontend_skills}</p>
              <p>Backend: </p>
              <p>{projects.backend_skills}</p>
              <p>Databases: </p>
              <p>{projects.databases}</p>
              <p>Infrastructure: </p>
              <p>{projects.infrastructure}</p>
              <p>Availability: </p>
              <p>{projects.availability}</p>
            </div>
          </div>
      ))
      
      }
        </div>
    </div>
);
} else {
  return (
    <div className="project-list">
        <div className="search-box">
            <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <div className="row">
      {
        
        projects.map((projects) => (
      
          
        
          <div className="column">
            <div className="card">
            <p>Title </p>
              <h2 className="heading">{projects.title}</h2>
              <hr></hr>
              <p>Technologies: </p>
              <p>{projects.technologies}</p>
              <p>Frontend: </p>
              <p>{projects.frontend_skills}</p>
              <p>Backend: </p>
              <p>{projects.backend_skills}</p>
              <p>Databases: </p>
              <p>{projects.databases}</p>
              <p>Infrastructure: </p>
              <p>{projects.infrastructure}</p>
              <p>Availability: </p>
              <p>{projects.availability}</p>
            </div>
          </div>
            
            ))
       } 
        </div>
    </div>
);
}
    
}

export default ProjectList;
