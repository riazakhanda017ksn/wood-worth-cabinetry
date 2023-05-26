import React from "react";
import "./Register.scss";
import { BsArrowRight } from "react-icons/bs";

const Register = () => {
  return (
    <div>
      <div className="register"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 py-5 ">
            <div
              className="contact-form"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="text-for-dealers">
                <h2>Become a Woodworth Dealer</h2>
                <p>
                  At Woodworth Cabinetry, we&#39;re committed to establishing
                  enduring business partnerships with dealers worldwide.
                  Woodworth Cabinetry provides a diverse selection of cabinet
                  styles and accessories. If you&#39;re interested in becoming a
                  part of the Woodworth family, please take a moment to fill out
                  the form below. We&#39;re confident that our high-quality
                  products, exceptional service, and streamlined ordering
                  process will help you achieve success in your business
                  endeavors.
                </p>
              </div>

              <br />
              <div className="form-section_heading">
                Your Company Information
              </div>
              <form action="">
                <div className="input-flex">
                  <div className="one-input">
                    <p>Company Name*</p>
                    <input type="text" required />
                  </div>
                  <div className="one-input">
                    <p>Business Number*</p>
                    <input type="number" required />
                  </div>
                </div>

                <div className="input-flex">
                  <div className="one-input">
                    <p>first name*</p>
                    <input type="text" required />
                  </div>
                  <div className="one-input">
                    <p>last name*</p>
                    <input type="text" required />
                  </div>
                </div>

                <div className="input-flex">
                  <div className="one-input">
                    <p>address*</p>
                    <input type="text" required />
                  </div>
                  <div className="one-input">
                    <p>city*</p>
                    <input type="text" required />
                  </div>
                </div>

                <div className="input-flex">
                  <div className="one-input">
                    <p>State / Province*</p>
                    <input type="text" required />
                  </div>
                  <div className="one-input">
                    <p>Postal Code*</p>
                    <input type="text" required />
                  </div>
                </div>

                <div className="input-flex">
                  <div className="one-input">
                    <p>Country *</p>
                    <input type="text" required />
                  </div>
                  <div className="one-input">
                    <p>Office Phone*</p>
                    <input type="number" required />
                  </div>
                </div>

                <div className="input-flex">
                  <div className="one-input">
                    <p>fax </p>
                    <input type="number" required />
                  </div>
                  <div className="one-input">
                    <p>e-mail*</p>
                    <input type="email" required />
                  </div>
                </div>
                <div className="input-flex">
                  <div className="one-input">
                    <p>website </p>
                    <input type="text" required />
                  </div>
                  <div className="one-input"></div>
                </div>

                {/*  */}
                <div className="form-section_heading">Contact Information</div>
                {/*  */}

                <div className="input-flex">
                  <div className="one-input">
                    <p>first name*</p>
                    <input type="text" required />
                  </div>
                  <div className="one-input">
                    <p>last name*</p>
                    <input type="text" required />
                  </div>
                </div>

                <div className="input-flex">
                  <div className="one-input">
                    <p>position*</p>
                    <select>
                      <option value="">Select Position</option>
                      <option value="">President</option>
                      <option value="">Vice President</option>
                      <option value="">Manager</option>
                      <option value="">Sales Rep</option>
                      <option value="">Others</option>
                    </select>
                  </div>
                  <div className="one-input">
                    <p>phone*</p>
                    <input type="text" required />
                  </div>
                </div>

                <div className="input-flex">
                  <div className="one-input">
                    <p>Email *</p>
                    <input type="email" required />
                  </div>
                  <div className="one-input">
                    <p>Upload your business card*</p>
                    <input type="file" required />
                  </div>
                </div>
                <div className="input-flex">
                  <div className="one-input">
                    <p>Upload a copy of your Drivers License *</p>
                    <input type="file" required />
                  </div>
                  <div className="one-input"></div>
                </div>

                {/*  */}

                <div className="form-section_heading">Company Details</div>

                {/*  */}
                <div className="input-flex">
                  <div className="one-input">
                    <p>Type of Business *</p>
                    <select>
                      <option value="">Select </option>
                      <option value="">Corporation</option>
                      <option value="">Partnership</option>

                      <option value="">Others</option>
                    </select>
                  </div>

                  <div className="one-input">
                    <p>I am a/an *</p>
                    <select>
                      <option value="">Select </option>
                      <option value="">Retailer</option>
                      <option value="">Retailer without showroom</option>
                      <option value="">Dealer</option>
                      <option value="">Dealer with showroom</option>
                      <option value="">Distributor</option>
                      <option value="">Contractor</option>
                      <option value="">Remodeler</option>
                      <option value="">Interior designer</option>
                      <option value="">Architect</option>
                      <option value="">Builder / developer</option>
                      <option value="">Others</option>
                    </select>
                  </div>
                </div>

                {/*  */}
                <div className="input-flex">
                  <div className="one-input">
                    <p>Business Startup Year *</p>
                    <select>
                      <option value="">Select </option>
                      <option value="">2018</option>
                      <option value="">2019</option>
                      <option value="">2020</option>
                      <option value="">2021</option>
                      <option value="">2022</option>
                      <option value="">2023</option>

                      <option value="">Others</option>
                    </select>
                  </div>

                  <div className="one-input">
                    <p>Upload a copy of your Business License *</p>
                    <input type="file" required className="my-file-input" />
                  </div>
                </div>
                {/* contact border */}

                <div className="form-section_heading">
                  How did you hear about us
                </div>
                {/*  */}

                <div className="input-flex">
                  <div className="one-input need-align">
                    <p>
                      If you were referred by a person with description OR with
                      our Sales Rep.*
                    </p>
                    <input type="text" required />
                  </div>

                  <div className="check-boxess">
                    <p
                      style={{
                        margin: "6px 0",
                        textTransform: "uppercase",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      If you were referred by a person with description OR with
                      our Sales Rep *
                    </p>

                    <div className="flex-checkbox">
                      <input type="checkbox" />{" "}
                      <small>Search Engine (eg. google, yahoo)</small>
                    </div>
                    <div className="flex-checkbox">
                      <input type="checkbox" />{" "}
                      <small>Social Media (eg. facebook, twitter)</small>
                    </div>
                    <div className="flex-checkbox">
                      <input type="checkbox" />{" "}
                      <small>Trade Show (eg. KBIS, IBS)</small>
                    </div>
                    <div className="flex-checkbox">
                      <input type="checkbox" /> <small>Yellow Page</small>
                    </div>
                    <div className="flex-checkbox">
                      <input type="checkbox" />{" "}
                      <small> Other with comments</small>
                    </div>
                  </div>
                </div>

                {/*  */}

                <div className="contact-btn or-submit-btn">
                  <button>
                    SUBMIT
                    <span>
                      {" "}
                      <BsArrowRight />{" "}
                    </span>{" "}
                  </button>
                </div>
              </form>
            </div>
            {/*  */}
          </div>
          <div className="col-lg-1"></div>
        </div>
        {/* address */}
      </div>
    </div>
  );
};

export default Register;
