import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <Link
            style={{ color: props.mode === 'light' ? 'black' : '#e1ebe4' }}
            className="navbar-brand"
            to="/"
          >
            NewsMania
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link style={{ color: props.mode === 'light' ? 'black' : '#e1ebe4' }} className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link style={{ color: props.mode === 'light' ? 'black' : '#e1ebe4' }} className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link style={{ color: props.mode === 'light' ? 'black' : '#e1ebe4' }} className="nav-link" to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link style={{ color: props.mode === 'light' ? 'black' : '#e1ebe4' }} className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link style={{ color: props.mode === 'light' ? 'black' : '#e1ebe4' }} className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link style={{ color: props.mode === 'light' ? 'black' : '#e1ebe4' }} className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link style={{ color: props.mode === 'light' ? 'black' : '#e1ebe4' }} className="nav-link" to="/about">About Us</Link>
              </li>
            </ul>
            <button onClick={props.toggleColor} style={{ marginLeft: '10px' }} type="button" className="btn btn-dark">
              {props.mode === 'light' ? "Enable Dark Mode" : "Disable Dark Mode"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

