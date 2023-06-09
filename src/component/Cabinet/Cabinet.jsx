/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Cabinet.scss";
import { productsData, productsData2 } from "../../Data/ProductData";
import { Link } from "react-router-dom";

const Cabinet = () => {
  return (
    <div className="cabinet-container padding">
      <div className="container">
        <div className="quality-caption">
          <span></span>
          <div className="text">
            <h3>NEW STYLES</h3>
          </div>
          <span></span>
        </div>
        {/*  */}
        <Link to="/all-door">
          <div className="parents mt-5 ">
            {productsData.map((data) => {
              return (
                <div
                  className="cabinet_dor"
                  key={data.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="products__image">
                    <img src={data.image} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </Link>

        {/*  */}
        <Link to="/all-door">
          <div className="row padding-x">
            {productsData2.map((productTwo) => {
              return (
                <div
                  className="col-lg-3 text-center cabinet_dor"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="products__image">
                    <img src={productTwo.image} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </Link>

        {/*  */}
      </div>
    </div>
  );
};

export default Cabinet;
