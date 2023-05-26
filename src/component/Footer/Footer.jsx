import React from "react";
import "./Footer.scss";
import { FiMap, FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const mainValue = date.getFullYear();
  return (
    <div className="footer padding " style={{ paddingBottom: "0" }}>
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-5">
            <div className="about-us">
              <h5>ABOUT US</h5>
              <p>
                Woodworth Cabinetry makes cabinetry easy. Our manufacturing and
                distributing process is quick, customized, and quality assured.
                Whether it be a busy home with family or friends, or a space to
                house independence, we cater to it. Make Woodworth part of the
                family, and help make a house, a home
              </p>
              <button>Continue Reading</button>
            </div>
          </div> */}
          <div className="col-lg-3">
            <div className="about-us need-space">
              <h5>PRODUCTS</h5>
              <ul>
                <li>
                  <Link to="/all-door">ALL DOOR STYLE</Link>
                </li>
                <li>
                  <Link to="/">CABINET</Link>
                </li>
                <li>
                  <Link to="/vanities">VANITIES</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="about-us need-space">
              <h5>USEFUL LINK</h5>
              <ul>
                <li>
                  <Link to="/">LOCATED A DEALER</Link>
                </li>
                <li>
                  <Link to="/became-a-dealer">BECAME A DEALER</Link>
                </li>
                <li>
                  <Link to="/warranty">WARRANTY</Link>
                </li>
                <li>
                  <Link to="/">DOWNLOAD 2023 CATALOGUE</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="about-us need-space">
              <h5>CONTACT US</h5>
              <ul>
                <li>
                  <Link to="/about-us">ABOUT US</Link>
                </li>
                <li>
                  <Link to="/company-info">CONTACT US</Link>
                </li>
                <li>
                  <Link to="/company-info">COMPANY INFO</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-us need-space">
              <h5>CONTACT INFO</h5>
              <small className="flex">
                <FiMap /> Address:
              </small>{" "}
              <br />
              <small>
                Unit 2, 854 Westport Crescent, Mississauga, ON L5T 1N5
              </small>
              <h6></h6>
              <small className="flex">
                <FiPhoneCall /> Call Us :
              </small>{" "}
              <br />
              <small>(905) 670-8787</small>
              <h6></h6>
              <small className="flex">
                <HiOutlineMail /> Send a Email :
              </small>{" "}
              <br />
              <small>info@de-valor.ca</small>
            </div>
          </div>
        </div>
        <div className="row last-section">
          <div className="col-lg-6">
            <p>
              Copyright @ WoodWorth Cabinetry {mainValue}. All Right Reserved
            </p>
          </div>
          <div className="col-lg-6">
            <div className="text-end">
              <a href="">
                <RiFacebookCircleFill />
              </a>
              <a href="">
                <AiFillInstagram />
              </a>
              <a href="">
                <AiFillTwitterCircle />
              </a>
              <a href="">
                <BsTelegram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
