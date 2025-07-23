import React from "react";
import { FaUser, FaCode, FaGraduationCap, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import "./Header.css";

const Header = ({ setActiveSection }) => {
  return (
    <header className="header">
      <h1>Subrahmanyam Kondruparthi</h1>
      <p>Full Stack Web Developer</p>
      <nav className="nav-links">
        <button onClick={() => setActiveSection("about")}>
          <FaUser /> About
        </button>
        <button onClick={() => setActiveSection("skills")}>
          <FaCode /> Skills
        </button>
        <button onClick={() => setActiveSection("education")}>
          <FaGraduationCap /> Education
        </button>
        <button onClick={() => setActiveSection("projects")}>
          <FaProjectDiagram /> Projects
        </button>
        <button onClick={() => setActiveSection("contact")}>
          <FaEnvelope /> Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
