import React from "react";
import "./QualityRedefined.scss";
import { BsArrowRight } from "react-icons/bs";
import img from "../../images/Capture-removebg-preview.png";
import { Link } from "react-router-dom";

const QualityRedefined = () => {
  return (
    <div
      className="QualityRedefined padding mb-5"
      style={{ overflowX: "hidden" }}
    >
      <div className="container">
        <div className="quality-caption">
          <span></span>
          <div className="text">
            <h3>
              Quality <br /> Redefined
            </h3>
          </div>
          <span></span>
        </div>

        <div className="q12-intro_liner">
          <div className="liner">
            <div className="liner_container">
              <div className="liner_box"></div>
              <span className="liner_text">
                <span>Quality Redefined</span>
              </span>
              <span className="liner_line"></span>
            </div>
          </div>{" "}
        </div>
        {/* rows */}
        <div className="row margin-top">
          <div className="col-lg-5">
            <div
              className="cabinet-image"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                src={img}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="cabinet-text"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="cabinet-text-flex">
                <h1>
                  40<span>+</span>
                </h1>
                <h3>years of quality service</h3>
              </div>
              <h3>in CABINETRY</h3>
              <p>
                Woodworth Cabinetry is a primary manufacturer and distributor,
                specializing in making a house, a home. We offer high-quality
                home décor and solid wood ready-to-assemble (RTA) kitchen and
                bath cabinetry to dealers across North America.{" "}
              </p>
              <p>
                As our own manufacturer, we are able to oversee every part of
                the process, maintaining quality control and supervision over
                cabinet production, using detailed hand-crafting from trained
                carpenters and our high-tech machinery.{" "}
              </p>
              <p>
                We have styles ranging from elegant and traditional, to sleek
                and contemporary. Some of our best sellers include white and
                grey Shaker-style cabinets and charcoal-grey Willow, all with
                finishes that stand the test of time.
              </p>
              <div style={{ width: "100%" }}>
                <Link to="/about-us">
                  {" "}
                  <button>
                    EXPLORE MORE
                    <span>
                      {" "}
                      <BsArrowRight />{" "}
                    </span>{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="quality-redefined-transform">
              <div className="box positions">
                <span></span>
              </div>
              <div className="quality-redefined-transform-text positions">
                <h6>QUALITY REDEFINED</h6>
              </div>
              <div className="border"></div>
            </div> */}
        </div>
        {/*  */}

        {/* others rows */}
        <div
          className="row pt-5 space"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="col-lg-6">
            <div className="kitchen-caption">
              <h1>
                Bring your <span> ideal</span>{" "}
              </h1>
              <h1>
                kitchen to<span> life.</span>
              </h1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="kitchen-text">
              <p>
                Curious to see how all of your favorite kitchen items will look
                together? Let your imagination reach new heights while you
                preview appliances, cabinetry and other kitchen components all
                on your computer. Our visualizer tool is not only easy to use,
                it’s fun to experiment with.
              </p>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};

export default QualityRedefined;
