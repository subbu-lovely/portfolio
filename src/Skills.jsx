// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  { title: "Python(DSA)", desc: "oops,backend logics" },
  { title: "HTML & CSS", desc: "Responsive, Flexbox, Grid" },
  { title: "ReactJS", desc: "Hooks, props/state, components" },
  { title: "Java", desc: "OOPs, backend logic" },
  { title: "SQL", desc: "Queries, joins, CRUD" },
  { title: "Computer Networks", desc: "OSI, protocols" },
  { title: "Basics of", desc: "DBMS, Flat, Cloud" }
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }}  style={{
    color: "white",
    fontFamily: "Poppins, sans-serif",
    letterSpacing: "2px",
    textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
  }}>
      Skills :
    </motion.h2>
    <ul className="skills-list">
      {skills.map((skill, i) => (
        <motion.li
          key={i}
          className="skill-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <strong>{skill.title}:</strong> {skill.desc}
        </motion.li>
      ))}
    </ul>
  </section>

);

export default Skills;
