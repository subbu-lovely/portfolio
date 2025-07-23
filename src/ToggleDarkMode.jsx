import React, { useEffect, useState } from "react";

const ToggleDarkMode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = dark ? "#111" : "#fff";
    document.body.style.color = dark ? "#fff" : "#000";
  }, [dark]);

  return (
    <div style={{ textAlign: "right", padding: "1rem" }}>
      <button onClick={() => setDark(!dark)} style={styles.button}>
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

const styles = {
  button: {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#333",
    color: "white",
    fontWeight: "bold",
  },
};

export default ToggleDarkMode;
