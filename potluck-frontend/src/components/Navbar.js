import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>PotLuck</h1>
      <nav>
        <a href="https://wizardly-darwin-3704db.netlify.app/index.html">home</a>
        <a href="https://wizardly-darwin-3704db.netlify.app/about_us.html">about us</a>
        <Link to='/dashboard'>planner</Link>
        <Link to='/'>login</Link>
      </nav>
      <div>
        <div>darkmode</div>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;