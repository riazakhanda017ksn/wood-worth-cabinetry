import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { all__products } from "../../Data/ProductData";
import { BsArrowRight } from "react-icons/bs";
import Data from "./Data";

const DoorDetails = () => {
  const { id } = useParams();
  const product = all__products.find((product) => product.id === id);
  const { name, details, images, colors, image, vector, specification } =
    product;

  return (
    <div className="door-details">
      <Navbar />
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-lg-7">
            <div className="details">
              <span>{name}</span> <br />
              <div className="vector-img">
                <img src={vector} alt="" />
              </div>
              <p>{details}</p>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-4 text-center">
            <div className="need-product-bg">
              <div
                className="details-image"
                style={{
                  background: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  height: "80vh",
                  width: "100%",
                  backgroundPosition: "right",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="about"></div>
      <div className="container py-5 my-5">
        <div
          className="row"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <div className="col-lg-6">
            <div className="description">
              <h3>SPECIFICATION</h3>
              {/* my toggle app */}
              {specification.map((item) => (
                <Data item={item}></Data>
              ))}
              {/*  */}{" "}
              <Link to="/became-a-dealer">
                <button>
                  Locate a Woodworth Dealer <BsArrowRight />{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="more-img">
              <h4>
                {" "}
                {name} style: ({images.length} COLORS)
              </h4>
              <div
                className="row"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                {images.map((img) => {
                  return (
                    <>
                      <div className="col-lg-4 mt-4">
                        <div className="mapped-images">
                          <img src={img.image} alt="" />
                          <h6 className="mt-3"> {img.name}</h6>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoorDetails;
