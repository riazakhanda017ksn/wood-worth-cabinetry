import React from "react";
import "./CabinetBanner.scss";
import { all__products } from "../../Data/ProductData";
import { Link } from "react-router-dom";
const CabinetBanner = () => {
  return (
    <div className="CabinetBanner padding">
      {/*  */}
      <div className="container">
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
        <div className="row padding-xy">
          {all__products.map((data) => {
            return (
              <div
                key={data.id}
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <Link to={`${data.id}`} className="link___">
                  <div className="container-background text-center">
                    <div
                    // style={{
                    //   background: `url(${data.image})`,
                    //   backgroundRepeat: "no-repeat",
                    //   backgroundSize: "contain",
                    //   width: "100%",
                    //   padding: "180px 0",
                    //   backgroundPosition: "center",
                    // }}
                    >
                      <img src={data.image} alt="" />
                    </div>
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
