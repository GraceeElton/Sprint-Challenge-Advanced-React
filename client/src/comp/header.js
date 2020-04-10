import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>All the players!</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode === "dark" ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default NavBar;
