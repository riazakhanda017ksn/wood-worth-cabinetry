import React from "react";
import "./QualityRedefined.scss";
import { BsArrowRight } from "react-icons/bs";
import img from "../../images/loves.jpg";
import img2 from "../../images/othersss.jpg";
import img3 from "../../images/loginnnnn.jpg";
import { Link } from "react-router-dom";

const QualityRedefined = () => {
  const arrays = [
    {
      name: "BECOME A DEALER",
      post: "To start, fill out the Dealer Application Form with your personal details and company information, and press Submit for our team to review.",
      image: img,
      id: 1,
    },
    {
      name: "LOG IN",
      post: `Once our team accepts your Dealer Application, log in to our WLink System with your email and password.
      This is where you can check out our inventory, and make an order right away by clicking “Add to your quotation”.
      `,
      image: img2,
      id: 2,
    },
    {
      name: "DELIVERY & PICKUP",
      post: `Now that you’ve made an order, our team will be ready with your pick-up or delivery in a week. Within the GTA, deliveries are free and expedited by our professional delivery logistics team. You can rest assured that your products are packaged and shipped safely to your location.”.
      `,
      image: img3,
      id: 3,
    },
  ];
  return (
    <div
      className="QualityRedefined padding mb-5"
      style={{ overflowX: "hidden" }}
    >
      <div className="container">
        {/* <div className="q12-intro_liner">
          <div className="liner">
            <div className="liner_container">
              <div className="liner_box"></div>
              <span className="liner_text">
                <span>Quality Redefined</span>
              </span>
              <span className="liner_line"></span>
            </div>
          </div>{" "}
        </div> */}
        {/* rows */}
        <div className="row margin-top">
          <div className="col-lg-5">
            <div
              className="cabinet-image"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            ></div>
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
              <h3>
                in <span className="specifiq-color">CABINETRY</span>{" "}
              </h3>
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
        <div className="container">
          <div className="quality-cabinet">
            <h1>CABINETRY MADE EASY WITH US</h1>
            <p>
              Life’s too short for unnecessary complications. With Woodworth
              Cabinetry, getting started couldn’t be easier.
            </p>
            <h5> Just follow our three-step process:</h5>
          </div>

          {/*  */}
          <div className="quality-defender-border"></div>
          <div className="row">
            {arrays.map((arr) => {
              return (
                <div className="col-lg-4" key={arr.id}>
                  <div className="number text-center">
                    <span>{arr.id}</span>
                  </div>
                  <div className="array-content">
                    <div className="images___array">
                      <img src={arr.image} alt="" />
                    </div>
                    <h4>{arr.name}</h4>
                    <p>{arr.post}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};

export default QualityRedefined;
