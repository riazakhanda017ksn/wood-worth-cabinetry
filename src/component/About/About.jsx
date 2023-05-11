import React from "react";
import "./About.scss";
import vone from "../../video/=.mp4";
import vtwo from "../../video/pexels-curtis-adams-4469409-1280x720-30fps.mp4";

const About = () => {
  return (
    <div>
      <div className="about"></div>
      {/* container */}
      <div className="container padding">
        <div className="quality-caption">
          <span></span>
          <div className="text">
            <h3>
              OUR <br /> BRAND
            </h3>
          </div>
          <span></span>
        </div>
        <div className="row py-5">
          <div className="col-lg-5">
            <div className="the-kitchen">
              <h1>40+ years of quality service in CABINETRY.</h1>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-5">
            <div className="the-kitchen-text">
              <p>
                Woodworth Cabinetry makes cabinetry easy. Our manufacturing and
                distributing process is quick, customized, and quality assured.
                Whether it be a busy home with family or friends, or a space to
                house independence, we cater to it. Make Woodworth part of the
                family, and help make a house, a home.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div style={{ background: "#EEEEEE", padding: "50px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
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
                    <video controls autoPlay>
                      <source src={vone} type="video/mp4" autoPlay />
                    </video>
                  </div>
                  <div class="carousel-item">
                    <video controls autoPlay>
                      <source src={vtwo} type="video/mp4" autoPlay />
                    </video>
                  </div>
                  <div class="carousel-item">
                    <video controls autoPlay>
                      <source src={vone} type="video/mp4" autoPlay />
                    </video>
                  </div>
                </div>
                <button
                  class="carousel-control-prev "
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon "
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next "
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
