import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";



export default function Navbar(props) {
  return (
    <>
      <div className={`container-fluid bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
        <div className="container">
          <div className="row">
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} `}>
              <a href="/" className="navbar-brand">
                <h2>{props.title}</h2>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menu"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="navbar-collapse justify-content-end collapse"
                id="menu"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      {props.about}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <div
                        className="form-check form-switch"
                        onClick={props.toggleMode}
                      >
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="switch"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="switch"
                        > Enable DarkMode</label>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here",
};
