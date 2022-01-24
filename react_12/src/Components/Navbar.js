import React from "react";
import logo from "./img/Logo.png";

export default function Navbar() {
  return (
    <div className="container-fluid">
      <div className="container my-navbar-first-container">
        <div className="row">
          <div className="mynavbar-border">
            <div className="row" id="bglight">
              <nav className="navbar navbar-expand-lg my-main-container-row-3">
                <a className="navbar-brand" href="#">
                  <img
                    className="img-fluid my-navbar-img"
                    src={logo}
                    alt="Burger Logo"
                  />
                </a>
                <button
                  className="navbar-toggler navbar-light my-main-container-row-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon my-main-container-row-5"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto my-navbar-margin">
                    <li className="nav-item active ">
                      <a className="nav-link mt-3 mynavlink-fontfamily" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mt-3 mynavlink-fontfamily" href="#">
                        About us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mt-3 mynavlink-fontfamily" href="#">
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mt-3 mynavlink-fontfamily" href="#">
                        Contact
                      </a>
                    </li>
                    <button
                      type="button"
                      className="btn btn-outline-primary my-navbar-btn btn-lg mt-3 mt-md-0"
                    >
                      Sign in
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary my-navbar-btn2 btn-lg mt-3 mt-md-0"
                    >
                      Sign up
                    </button>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
