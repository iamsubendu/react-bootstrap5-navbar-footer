import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Router>
        <section children="navbar-bg">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
              <Link class="navbar-brand" to="/">
                <h2>Ashwini Pattanayak</h2>
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShow(!show)}
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/">
                      About
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/">
                      Portfolio
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </Router>
    </>
  );
};

export default Navbar;
