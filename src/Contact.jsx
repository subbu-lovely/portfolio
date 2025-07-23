import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => (
  <section id="contact" className="contact-section">
    <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }}style={{
    color: "white",
    fontFamily: "Poppins, sans-serif",
    letterSpacing: "2px",
    textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
  }}>Contact</motion.h2>
    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}style={{
    color: "white",
    fontFamily: "Poppins, sans-serif",
    letterSpacing: "2px",
    textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
  }}>
      📧 Email: <a href="mailto:subbukondrupathi@gmail.com">subbukondrupathi@gmail.com</a>
    </motion.p>
    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}style={{
    color: "white",
    fontFamily: "Poppins, sans-serif",
    letterSpacing: "2px",
    textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
  }}>
      📞 Phone: <a href="tel:+919177552521">+91 9177552521</a>
    </motion.p>
    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}style={{
    color: "white",
    fontFamily: "Poppins, sans-serif",
    letterSpacing: "2px",
    textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
  }}>
      🔗 GitHub: <a href="https://github.com/subbu-lovely" target="_blank">subbu-lovely</a>
    </motion.p>
    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}style={{
    color: "white",
    fontFamily: "Poppins, sans-serif",
    letterSpacing: "2px",
    textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
  }}>
      💼 LinkedIn: <a href="https://www.linkedin.com/in/subbu-kondrupathi-28b589286/" target="_blank">Profile</a>
    </motion.p>
    <a
  href="/resume.pdf"
  download
  style={{
    display: "inline-block",
    marginTop: "1rem",
    padding: "10px 20px",
    backgroundColor: "#61dafb",
    borderRadius: "6px",
    color: "#000",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  📄 Download Resume
</a>

  </section>
);

export default Contact;

