import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { all__products } from "../../Data/ProductData";
import { BsArrowRight } from "react-icons/bs";
import img from "../../images/vecotr.avif";

const DoorDetails = () => {
  const { id } = useParams();
  const product = all__products.find((product) => product.id === id);
  const { name, details, images, colors, image } = product;
  console.log(colors);
  return (
    <div className="door-details">
      <Navbar />
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-lg-7">
            <div className="details">
              <span>{name}</span> <br />
              <div className="vector-img">
                <img src={img} alt="" />
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
          <div className="col-lg-7">
            <div className="description">
              <h3>DESCRIPTION:</h3>
              <p>{details}</p>
              {/* <div className="specification mt-5">
                <h3 className="mb-4">COLORS:</h3>
                {colors.map((color) => {
                  return (
                    <div className="color">
                      <h6>{color.name}</h6>
                      <span>+</span>
                    </div>
                  );
                })}
              </div> */}
              <Link to="/became-a-dealer">
                <button>
                  Locate a Woodworth Dealer <BsArrowRight />{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="more-img">
              <h3>
                Color of <br /> {name}'s door
              </h3>
              <div
                className="row"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                {images.map((img) => {
                  return (
                    <>
                      <div className="col-lg-6 mt-4">
                        <div className="mapped-images">
                          <img src={img.image} alt="" />
                          <h6 className="mt-3">Color: {img.name}</h6>
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
