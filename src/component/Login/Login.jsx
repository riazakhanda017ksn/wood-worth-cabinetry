import React from "react";
import "./Login.scss";
import { BsArrowRight } from "react-icons/bs";

const Login = () => {
  return (
    <div className="login">
      <div className="login-banner"></div>
      <div className="padding">
        <div className="container">
          <div className="quality-caption">
            <span></span>
            <div className="text">
              <h3 className="mb-5">
                WLINK SYSTEM <br /> LOGIN
              </h3>
            </div>
            <span></span>
          </div>
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <form action="">
                <div className="input-flex">
                  <div className="one-input">
                    <p style={{ textTransform: "uppercase" }}>
                      Email Address *
                    </p>
                    <input type="email" required />
                  </div>
                </div>
                <div className="input-flex">
                  <div className="one-input">
                    <p style={{ textTransform: "uppercase" }}>Password *</p>
                    <input type="password" required />
                  </div>
                </div>
                <div className="contact-btn text-centers">
                  <button>
                    LOGIN
                    <span>
                      {" "}
                      <BsArrowRight />{" "}
                    </span>{" "}
                  </button>
                </div>
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    color: " black",
                    fontSize: "14px",
                    marginTop: "15px",
                    display: "block",
                  }}
                >
                  Become a Dealer
                </a>
              </form>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
