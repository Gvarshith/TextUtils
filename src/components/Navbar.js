import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <h5 className="mx-2">Change Your Background Color</h5>
            {props.mode === 'light' ? (
        <>
          <Button color={'#B1CEF0'} mode={props.mode} />
          <Button color={'#94CE9C'} mode={props.mode}/>
          <Button color={'#FFD69F'} mode={props.mode}/>
          <Button color={'#DBB5F8'} mode={props.mode}/>
        </>
      ) : (
        <>
          <Button color={'#081C1B'} />
          <Button color={'#0F3B48'} />
          <Button color={'#340A1A'} />
          <Button color={'#433F31'} />
        </>
      )}
    
  
             <div className="form-check form-switch">
                     <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                      <label className={`form-check-label text-${props.mode=== 'light' ? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                      </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.prototype = { title: PropTypes.string };
