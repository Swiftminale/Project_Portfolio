import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <dir>
      <nav class="navbar sticky-top navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="app.js">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact us
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallary
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Printing 1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Printing 2
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Printing 3
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </nav>
    </dir>
  );
}

export default Navigation;
