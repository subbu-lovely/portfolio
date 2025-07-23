// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

const projectList = [
  {
    title: "Today Goals",
    description: "A daily goal-setting app using React.",
    link: "https://g1-lqwjap6w6-subbu-lovelys-projects.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "My personal developer portfolio built with React and Vite.",
    link: "https://github.com/subbu-lovely/Portfolio",
  },
  {
    title: "Natural Celender",
    description: " Month-by-Month Life.",
    link: "https://g1-lqwjap6w6-subbu-lovelys-projects.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects" style={{
    color: "white",
    fontFamily: "Poppins, sans-serif",
    letterSpacing: "2px",
    textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
  }}>
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <a key={index} href={project.link} className="project-card" target="_blank" rel="noopener noreferrer">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
