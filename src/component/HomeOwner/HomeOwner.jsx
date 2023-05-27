import React from "react";
import "./HomeOwner.scss";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeOwner = () => {
  return (
    <div className="HomeOwner">
      <div className="parent" style={{ overflowX: "hidden" }}>
        <a href="https://www.hs-online.com/">
          <div className="col-one">
            <div className="home">
              <h3>Home Owners</h3>
              <p>
                Visualize your kitchen design ideas{" "}
                <span>
                  <BsArrowRight />
                </span>{" "}
              </p>
            </div>
          </div>
        </a>

        <Link to="/became-a-dealer">
          <div className="col-two">
            <div className="kitchen">
              <h3>Register</h3>
              <p>
                Start selling Fabuwood today{" "}
                <span>
                  <BsArrowRight />
                </span>{" "}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeOwner;
