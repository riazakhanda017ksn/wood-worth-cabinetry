/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Contact.scss";
import { BsAlarm, BsArrowRight } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <div className="contact"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 pt-5 ">
            <div
              className="contact-form "
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="quality-caption">
                <span></span>
                <div className="text">
                  <h3>
                    CONTACT <br /> WoodWorth Cabinetry
                  </h3>
                </div>
                <span></span>
              </div>
              <p>
                WoodWorth Cabinetry is here to provide you with more
                information, answer any of your questions and create effective
                solutions for your individual needs. Please submit your
                information below and an agent will be in touch shortly.
              </p>
              <br />
              <form action="">
                <div className="input-flex">
                  <div className="one-input">
                    <p>NAME*</p>
                    <input type="text" required />
                  </div>
                  <div className="one-input">
                    <p>EMAIL*</p>
                    <input type="email" required />
                  </div>
                </div>
                <div className="input-flex">
                  <div className="one-input">
                    <p>PHONE*</p>
                    <input type="number" required />
                  </div>
                  <div className="one-input">
                    <p>ZIP CODE*</p>
                    <input type="text" required />
                  </div>
                </div>
                <div className="input-flex">
                  <div className="one-input">
                    <p>MESSAGE*</p>
                    <textarea cols="15" rows="6"></textarea>
                  </div>
                </div>

                <div className="contact-btn">
                  <button>
                    SUBMIT
                    <span>
                      {" "}
                      <BsArrowRight />{" "}
                    </span>{" "}
                  </button>
                </div>
              </form>

              {/*  */}

              <div className="quality-caption mt-5 pt-5">
                <span></span>
                <div className="text">
                  <h3>LOCATION</h3>
                </div>
                <span></span>
              </div>
              {/* map */}

              <div className="row">
                <div className="col-lg-6">
                  <div className="address mt-5">
                    <span>ADDRESS</span>
                    <p>Unit 2, 854 Westport Crescent Mississauga, ON L5T 1N5</p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.920004752595!2d-79.65761602476452!3d43.649832652650126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f341096d185%3A0xec96e210e14e7862!2s854%20Westport%20Crescent%20%232%2C%20Mississauga%2C%20ON%20L5T%201N5%2C%20Canada!5e0!3m2!1sen!2sbd!4v1683471438257!5m2!1sen!2sbd"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* contact info */}
              <div className="quality-caption my-5 py-5">
                <span></span>
                <div className="text">
                  <h3>
                    Contact <br />
                    Info
                  </h3>
                </div>
                <span></span>
              </div>
              {/*  */}
              <div className="row">
                <div className="col-lg-4">
                  <div className="contact-inf text-center">
                    <ImPhone />
                    <h5>Call Us</h5>
                    <p>+1 (905) 670-8787</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact-inf text-center">
                    <AiOutlineMail />
                    <h5>Send a Email </h5>
                    <p>info@de-valor.ca</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact-inf text-center">
                    <BsAlarm />
                    <h5>Time We Work :</h5>
                    <p>Mon – Fri: 9:00 am – 5:00 pm</p>
                  </div>
                </div>
              </div>

              {/*  */}

              {/*  */}
            </div>
            {/*  */}
          </div>
          <div className="col-lg-1"></div>
        </div>
        {/* address */}
      </div>
    </>
  );
};

export default Contact;
