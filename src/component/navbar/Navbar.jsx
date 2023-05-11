/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import navimg from "../../images/ww_logo_200x180.png";

const Navbar = () => {
  return (
    <div className="sticky">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={navimg} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav  navbar-nav-scroll">
              {/* Blog  */}
              <li className="nav-item dropdown">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/*  */}

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link class="dropdown-item" to="/all-door">
                      All Door Style
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Cabinets
                    </a>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/vanities">
                      Vanities
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dealers
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link class="dropdown-item" to="/">
                      Located a Dealer
                    </Link>
                  </li>

                  <li>
                    <Link class="dropdown-item" to="/became-a-dealer">
                      Became a Dealer
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link class="dropdown-item" to="/about-us">
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link class="dropdown-item" to="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/company-info">
                      Company Info
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/warranty">
                      Warranty
                    </Link>
                  </li>
                </ul>
              </li>

              {/*  */}

              {/* <li className="nav-item dropdown">
                <Link class="nav-link " aria-current="page" to="/home-decor">
                  Home Decor
                </Link>
              </li> */}
              {/* <li className="nav-item dropdown">
                <Link class="nav-link " aria-current="page" to="/about-us">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link class="nav-link " aria-current="page" to="/contact">
                  Contact
                </Link>
              </li> */}

              <li className="nav-item dropdown">
                <Link class="nav-link " aria-current="page" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  class="nav-link  call-btn"
                  aria-current="page"
                  href="tel:+1905670-8787"
                >
                  Call Now
                </a>
              </li>
              {/*  */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
