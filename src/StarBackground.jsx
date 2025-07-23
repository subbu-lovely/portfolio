import React from "react";
import "./StarBackground.css";

const StarBackground = () => {
  const stars = Array.from({ length: 40 });

  return (
    <>
      <div className="fullpage-background"></div>
      <div className="starfall">
        {stars.map((_, i) => (
          <div key={i} className="falling-star" />
        ))}
      </div>
    </>
  );
};

export default StarBackground;
