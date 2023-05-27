import React from "react";
import "./Slider.scss";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div classNameName="Slider">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="9"
            aria-label="Slide 10"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active slide-one">
            <div className="container flex-box">
              <div className="content animate__animated animate__fadeInLeft ">
                <h2>MAKE WOODWORTH</h2>
                <h3>PART OF THE FAMILY</h3>
                <br />
                <Link to="/cabinets">
                  <button>
                    {" "}
                    Learn More{" "}
                    <span>
                      {" "}
                      <BsArrowRight />{" "}
                    </span>{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item slide-two"></div>
          <div className="carousel-item slide-three">
            {/* <div className="content customization xyz">
              <Link to="/about-us">
                <button>
                  {" "}
                  Learn More{" "}
                  <span>
                    {" "}
                    <BsArrowRight />{" "}
                  </span>{" "}
                </button>
              </Link>
            </div> */}
          </div>
          <div className="carousel-item slide-four"></div>
          <div className="carousel-item slide-five"></div>
          <div className="carousel-item slide-six"></div>
          <div className="carousel-item slide-seven">
            {/* <div className="content xyz">
              <h1>
                Nexus <span>Frost</span>
              </h1>

              <br />
              <Link to="/vanities">
                <button>
                  {" "}
                  Learn More{" "}
                  <span>
                    {" "}
                    <BsArrowRight />{" "}
                  </span>{" "}
                </button>
              </Link>
            </div> */}
          </div>
          <div className="carousel-item slide-eight">
            {/* <div className="content xyz">
              <Link to="/cabinets">
                <button>
                  {" "}
                  DISCOVER ILLUME
                  <span>
                    {" "}
                    <BsArrowRight />{" "}
                  </span>{" "}
                </button>
              </Link>
            </div> */}
          </div>
          <div className="carousel-item slide-nine">
            {/* <div className="content xyz">
              <h1>
                Fusion <span>Kona</span>
              </h1>

              <br />
              <Link to="/cabinets">
                <button>
                  {" "}
                  Learn More{" "}
                  <span>
                    {" "}
                    <BsArrowRight />{" "}
                  </span>{" "}
                </button>
              </Link>
            </div> */}
          </div>
          <div className="carousel-item slide-ten"></div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
