import React from "react";
import "./CabinetBanner.scss";
import video from "../../video/pexels-curtis-adams-4469409-1280x720-30fps.mp4";
import { all__products } from "../../Data/ProductData";
import { Link } from "react-router-dom";
const CabinetBanner = () => {
  return (
    <div className="CabinetBanner padding">
      <div className="container">
        <video controls autoPlay>
          <source src={video} type="video/mp4" autoPlay />
        </video>
      </div>
      {/*  */}
      <div className="container mt-5">
        <div className="quality-caption">
          <span></span>
          <div className="text">
            <h3>
              all door <br /> style
            </h3>
          </div>
          <span></span>
        </div>
        {/* row */}
        <div className="row">
          {all__products.map((data) => {
            return (
              <div
                key={data.id}
                className="col-lg-3"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <Link to={`${data.id}`} className="link___">
                  <div className="container-bg">
                    <div
                      className="product-img"
                      style={{
                        background: `url(${data.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        width: "100%",
                        padding: "150px 0",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <h6 className="text-center mt-3">{data.name}</h6>
                  </div>
                </Link>
              </div>
            );
          })}
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default CabinetBanner;
