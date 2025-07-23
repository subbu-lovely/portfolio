import React from "react";
import StarBackground from "./StarBackground";
import "./StarBackground.css";

const About = () => {
  return (
    <div className="about">
      <StarBackground />
      <div style={{ color:"white",position: "relative", zIndex: 1 }}>
        <h2 className="about">About Me :</h2>
        <p style={{ color: "white", fontSize: "1.2rem", lineHeight: "1.8", textAlign: "center", fontFamily: "Poppins, sans-serif" }}>
           Hii I'm Subrahmanyam Kondruparthi, a curious and dedicated Full Stack Web Developer who enjoys turning ideas into real-world applications.
        <br /><br />
          I work mainly with the MERN stack,Python, Java, and DSA — solving problems one line of code at a time.
        <br /><br />
        <i>“The best way to learn is by building.”</i> That’s what I believe — so I spend most of my time creating, learning, and improving.
        <br /><br />
        Outside of tech, I love meditation, playing cricket, and discovering new places.
        <br />
       <i>"Balance in life brings brilliance in code."</i>
       <br/>
       <i>i am always opened minded and also "Do what you can, with what you have, where you are."</i>
      </p>
      </div>
    </div>
  );
};

export default About;
