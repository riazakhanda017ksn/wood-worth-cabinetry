import React from "react";
import "./VanitiesBanner.scss";
import video from "../../video/=.mp4";
import img from "../../images/wert.png";

const VanitiesBanner = () => {
  const colors = [
    {
      name: "Indigo",
      id: 13344,
      color: "#41454C",
    },
    {
      name: "Stone",
      id: 13345,
      color: "#615B52",
    },
    {
      name: "Oyster",
      id: 13341,
      color: "#CDCBC7",
    },
    {
      name: "Linen",
      id: 1334123,
      color: "#D4C8BC",
    },
    {
      name: "Nickel",
      id: 13341672,
      color: "#A4A6A9",
    },
    {
      name: "Frost",
      id: 13341672778,
      color: "#DCDCDC",
    },
    {
      name: "Dove",
      id: 13341672778,
      color: "#CDCBC7",
    },
    {
      name: "Blanc",
      id: 13341672778,
      color: "#CDCBC7",
    },
  ];
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
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
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="vanities-banner"></div>
          </div>
          <div class="carousel-item">
            <div className="vanities-banner-two"></div>
          </div>
          <div class="carousel-item">
            <div className="vanities-banner-three"></div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="padding" style={{ paddingBottom: "0" }}>
        <div className="container">
          <div className="row">
            <div className="quality-caption">
              <span></span>
              <div className="text">
                <h3>Vanities</h3>
              </div>
              <span></span>
            </div>
          </div>
          {/* vanities */}
          <div className="vanities-img text-center mt-5">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6 vanities-images">
                <img src={img} alt="" /> <br />
                <small>NEW</small>
                <h6>VANITIES</h6>
                <p>
                  Our contemporary-style, straight valance hood embodies modern
                  minimalism and streamlined simplicity. The subtle trim details
                  and sleek design blend seamlessly with contemporary kitchens.
                </p>
                <div className="color-navbar">
                  <span style={{ background: "#000000" }}>PAINTS</span>
                  <span style={{ background: "#757575" }}>STAINS</span>
                  <span style={{ background: "#757575" }}>SIZE</span>
                </div>
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8">
                    <div className="colors-item">
                      {colors.map((color) => {
                        return (
                          <div className="item" key={color.id}>
                            <span
                              style={{ background: `${color.color}` }}
                            ></span>{" "}
                            <br />
                            <p>{color.name}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-lg-2"></div>
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="gray-bg">
          <div className="container">
            <video controls autoPlay>
              <source src={video} type="video/mp4" autoPlay />
            </video>
            <h5>Woodworth Cabinetry Has You Covered</h5>
            <p>
              Our selection of hoods includes diverse design themes ranging from
              traditional elegance to modern chic. <br /> Complete with full
              interior stainless steel hood liners and available in a large
              variety of styles and finishes, our <br /> hoods will flawlessly
              complement any Woodworth Cabinetry cabinets of your choosing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VanitiesBanner;
