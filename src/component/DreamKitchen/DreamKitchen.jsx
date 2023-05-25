import React from "react";
import "./DreamKitchen.scss";
import { Link } from "react-router-dom";

const DreamKitchen = () => {
  return (
    <div
      className="DreamKitchen"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h1>BECAME A WOODWORTH DEALER</h1>
      <Link to="/contact">
        <button>Locate a Wood Worth dealer</button>
      </Link>
    </div>
  );
};

export default DreamKitchen;
