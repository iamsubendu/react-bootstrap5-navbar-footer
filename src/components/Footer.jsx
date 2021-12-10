import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./comp.css";

const Footer = () => {
  return (
    <>
      <Router>
        <footer className="bg-dark text-center text-white">
          <div className="container p-4">
            <section className="mb-4">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </section>
            <section className="mb-4">
              <p>
                You don’t have to spend a huge amount of money to build your
                photography portfolio in order to show that you are confident in
                your work and that you take your photography career seriously.
                With prices that fit every budget, you can create a beautiful,
                fully customizable photo portfolio site.
              </p>
            </section>
            <section>
              <div className="row">
                <div className="col">
                  <h5 className="text-uppercase">Explore</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link className="text-white text-decoration-none" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white text-decoration-none" to="/">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white text-decoration-none" to="/">
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white text-decoration-none" to="/">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white text-decoration-none">
                        Recent posts
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white text-decoration-none">
                        Wedding
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white text-decoration-none">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white text-decoration-none">
                        Street
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div className="text-center p-3">
            © 2022 Copyright:{" "}
            <Link className="text-white" to="/">
              UltimateGlobalization
            </Link>
          </div>
        </footer>
      </Router>
    </>
  );
};

export default Footer;
