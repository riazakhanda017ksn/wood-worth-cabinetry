import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import useFetch from "../Hooks/useFetch";
const Slider = () => {
  return (
    <>
      <div
        style={{
          background: `url(https://i.ibb.co/H7yztsn/bg-image-11-1.jpg)`,
          backgroundPosition: "cente center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
        className="need-gap"
      ></div>
    </>
  );
};

export default Slider;
