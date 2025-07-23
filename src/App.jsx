import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import StarBackground from "./StarBackground";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about": return <About />;
      case "skills": return <Skills />;
      case "education": return <Education />;
      case "projects": return <Projects />;
      case "contact": return <Contact />;
      default: return <About />;
    }
  };

  return (
    <div className="app-wrapper">
      <StarBackground />
      <Header setActiveSection={setActiveSection} />
      <div className="main-content">
        {renderSection()}
      </div>
      <Footer />
    </div>
  );
};

export default App;
