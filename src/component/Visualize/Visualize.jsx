import React from "react";
import "./Visualize.scss";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Visualize = () => {
  return (
    <div className="visualize">
      <h1>
        Get <span>inspired</span> and <span>visualize</span> your ideas.
      </h1>
      <div className="visualize-btn-group">
        <Link to="/about">
          <button>
            {" "}
            visualize{" "}
            <span>
              {" "}
              <BsArrowRight />{" "}
            </span>
          </button>
        </Link>

        <Link to="/cabinets">
          <button>
            {" "}
            gallery{" "}
            <span>
              {" "}
              <BsArrowRight />{" "}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Visualize;
