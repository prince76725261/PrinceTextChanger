import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar-${props.mode} navbar-expand-lg bg-body-tertiary`}>
      <div className="container-fluid">
        <div className="d-flex align-items-center w-100">
          <a className="navbar-brand" href="/">{props.title}</a>
          <ul className="navbar-nav me-auto mb-0 d-flex align-items-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/">{props.home}</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">{props.about}</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'grey' ? 'white' : 'black'}`}>
            <input 
              className="form-check-input toggle-switch" 
              onClick={props.toggleMode} 
              type="checkbox" 
              id="flexSwitchCheckDefault" 
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {props.textChange}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}