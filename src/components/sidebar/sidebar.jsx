import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <aside className={toggle ? "aside1" : "aside"}>
        <div className = "top" >
          <a href="#home" className="nav__logo">
            <span className="material-symbols-outlined">home</span>Home
          </a>
        </div>
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">

              <li className="nav__item">
                <a href="#home" title="HOME" className="nav__link">
                  <i className="icon-home nav__lin"></i>
                  <h3 className="hoverNav">Home</h3>
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" title="ABOUT PAGE" className="nav__link">
                  <i className="icon-user-following nav__lin"></i>
                  <h3 className="hoverNav">About</h3>
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" title="EXPERIENCES" className="nav__link">
                  <i className="icon-graduation nav__lin"></i>
                  <h3 className="hoverNav">Academics</h3>
                </a>
              </li>

              <li className="nav__item">
                <a href="#resume" title="PROJECTS" className="nav__link">
                  <i className="icon-layers nav__lin"></i>
                  <h3 className="hoverNav">Projects</h3> 
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav__footer">
          <span className="copyright">ROHIT SINGH</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};
export default Sidebar;
