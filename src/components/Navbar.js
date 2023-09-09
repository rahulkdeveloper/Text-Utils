// import react from "react";
import Proptypes from "prop-types";
// import {
//   Link

// } from "react-router-dom"

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}
        <a className="navbar-brand" href="">
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
              {/* <Link className="nav-link active" aria-current="page" to="/product">
                {props.home}
              </Link> */}
              <a className="nav-link active" aria-current="page" href="#">
                {props.home}
              </a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">
                {props.about ? props.about : "Custom"}
              </Link> */}
              <a className="nav-link" href="#">
                {props.about ? props.about : "Custom"}
              </a>
            </li>
          </ul>
          <div class={`form-check form-switch text-${props.mode === "dark" ? 'light' : 'dark'}`}>
            <input
              class="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              {props.mode === "dark" ? "Enable Light Mode" : "Enable Dark Mode"}
            </label>
            
          </div>

          

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: Proptypes.string,
  home: Proptypes.string,
  about: Proptypes.string,
};

// Navbar.defaultProps = {
//     title: "MyShow",
//     home:Proptypes.string,
//     about:Proptypes.string
// }
