import React from "react";
import project from "../data/projects";
const Projects = () => {
  return (
    <>
      {project.map((project) => {
        const { id, title, description, source, demo } = project;
        return (
          <>
            <div className="project-container">
              <div className="project-card">
                <div className="heading">
                  <h1 key={id}>{title}</h1>
                </div>
                <div className="content">
                  <p key={id}>{description}</p>
                  <button>
                    <a href={source} key={id}>
                      Source Code
                    </a>
                  </button>
                  <button>
                    <a href={demo} key={id}>
                      Live Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Projects;
