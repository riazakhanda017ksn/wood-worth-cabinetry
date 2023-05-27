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
        <a
          href="https://idealspaces-hspace-prod.2020-
platform.com/index.html#inspiration/category/KITCHEN/presetsStyles"
        >
          <button>
            {" "}
            visualize{" "}
            <span>
              {" "}
              <BsArrowRight />{" "}
            </span>
          </button>
        </a>

        {/* <Link to="/cabinets">
          <button>
            {" "}
            gallery{" "}
            <span>
              {" "}
              <BsArrowRight />{" "}
            </span>
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Visualize;
