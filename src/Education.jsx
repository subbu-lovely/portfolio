// src/components/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

const Education = () => (
  <section id="education" className="edu-section">
    <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }}style={{
    color: "white",
    fontFamily: "Poppins, sans-serif",
    letterSpacing: "2px",
    textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
  }}>
      Education
    </motion.h2>
    <ul className="edu-list">
      <motion.li className="edu-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
        <strong>MCA</strong> – K.G.R.L College, Bhimavaram ,AKNU University<br />
        CGPA: 7.6 (2024)
      </motion.li>
      <motion.li className="edu-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
        <strong>BSc (MPC)</strong> – S.V.S.S A&S College, Attili <br />
        CGPA: 7.9 (2022)
      </motion.li>
      <motion.li className="edu-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
        <strong>Intermediate (MPC)</strong> – S.V.S.S A&S College, Attili <br />
        CGPA: 7.7 (2019)
      </motion.li>
    </ul>
  </section>
);

export default Education;
