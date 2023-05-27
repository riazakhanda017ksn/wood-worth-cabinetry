import React from "react";
import "./BecomeDeller.scss";
import img from "../../images/11efd97e-dd98-41af-a2c1-5ff31428e57c_dealers.avif";
import { Link } from "react-router-dom";

const BecomeDealer = () => {
  return (
    <div
      className="become-dealer padding"
      style={{ paddingTop: "0", paddingBottom: 0 }}
    >
      <>
        <div className="dealer styled">
          <>
            <div
              className="half-column  "
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <h2>Become a WoodWorth Dealer</h2>
              <p>
                The family of WoodWorth dealers is growing fast. Join the
                thousands of dealers that offer WoodWorth Kitchens in their
                showrooms nationwide.
              </p>
              <div className="sign-up-btn">
                <Link to="/became-a-dealer">
                  <button>SIGNUP</button>
                </Link>
              </div>
            </div>
          </>
          <>
            <div className="dealers">
              <div
                className=" dealer-image"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                {/* <img src={img} alt="" /> */}
              </div>
            </div>
          </>
        </div>
      </>
    </div>
  );
};

export default BecomeDealer;
