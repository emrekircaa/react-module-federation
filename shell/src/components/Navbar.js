import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">React Module Federation</div>
      <div className="navbar__item">
        <a href="/">Main Page</a>
      </div>
      <div className="navbar__item">
        <a href="/team1">Team1</a>
      </div>
      <div className="navbar__item">
        <a href="/team2">Team2</a>
      </div>
    </header>
  );
}

export default Navbar;
