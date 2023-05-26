import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import "./CompanyInfo.scss";
import { GiSelfLove } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { ImPriceTag } from "react-icons/im";
import { SiShutterstock } from "react-icons/si";
import Carousel from "react-material-ui-carousel";
import videoOne from "../../video/vvv.mp4";
import { Link } from "react-router-dom";
import { clientReviews, companyData } from "../../Data/ProductData";
const CompanyInfo = () => {
  return (
    <>
      <Navbar />
      <div className="company-info"></div>
      <div
        className="QualityRedefined padding more-class"
        style={{ overflow: "hidden", paddingBottom: "80px" }}
      >
        <div className="container">
          {/* rows */}
          <div className="row margin-top">
            <div className="col-lg-5">
              <div
                className="cabinets-image"
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
          <div className="row pt-5 mt-5">
            {companyData.map((data) => {
              return (
                <div className="col-lg-4" key={data.id}>
                  <div
                    className="company"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    <img src={data.image} alt="" />
                    <h5>{data.name}</h5>
                    <p>{data.post}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/*  */}
          {/* <div className="container mb-5">
            <div className="why-choose-us">
              <h1>WHY CHOOSE US</h1>
              <p>
                Woodworth Cabinetry knows the importance of establishing a solid
                foundation that stands strong through rapid growth and
                challenging times. Here are some advantages to working with
                Woodworth Cabinetry:
              </p>
            </div>
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6"></div>
              <div className="col-lg-3"></div>
            </div>
          </div> */}
          {/*  */}
        </div>
        {/*  */}
      </div>
      <div className="video-section">
        <video src={videoOne} muted loop autoPlay></video>
        <div className="video-overly"></div>
        <div className="container">
          <div
            className="why-choose-us "
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h1>WHY CHOOSE US</h1>
            <p>
              Woodworth Cabinetry knows the importance of establishing a solid
              foundation that stands strong through rapid growth and challenging
              times. Here are some advantages to working with Woodworth
              Cabinetry:
            </p>
          </div>
          <div
            className="row"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div className="col-lg-6">
              <div className="company-content my-5 py-5">
                <GiSelfLove />
                <h4>CUSTOMER ORIENTED</h4>
                <p>
                  Our clients are the only thing that matter in our business. We
                  not only think of our dealers, but also the experience of
                  their customers.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="company-content my-5 py-5">
                <IoMdCheckmarkCircleOutline />
                <h4>HIGH QUALITY</h4>
                <p>
                  Woodworth Cabinetry takes extra precautions in ensuring that
                  our clients receive high-quality products through professional
                  service and a customized process.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="company-content  py-5">
                <SiShutterstock />
                <h4>FULLY STOCKED</h4>
                <p>
                  Our warehouse is always fully-stocked with ready-to-assemble
                  (RTA) cabinetry and vanities, making your orders ready for
                  pick-up or delivery quickly and easily..
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="company-content  py-5">
                <ImPriceTag />
                <h4>COMPETITIVELY PRICED</h4>
                <p>
                  Being factory direct, we have an unbeatable price advantage
                  over comparable products. Eliminating the middle man, we can
                  beat local prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 my-5">
        <div className="container">
          <div className="why-choose-us text-center">
            {" "}
            <p style={{ color: "#767676" }}>
              Our client’s experience means a lot to us. Here’s what they’ve had
              to say
            </p>
            <h1 style={{ color: "black" }}>CLIENT REVIEWS</h1>
          </div>

          <Carousel>
            {clientReviews.map((review) => {
              return (
                <div
                  className="review"
                  key={review.id}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                >
                  <img src={review.image} alt="" />
                  <h4>{review.name}</h4>
                  <p>{review.post}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CompanyInfo;
