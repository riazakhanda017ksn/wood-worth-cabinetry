import React from "react";
import "./HomeDecor.scss";
import { newProducts } from "../../Data/ProductData";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeDecor = () => {
  return (
    <div className="padding mt-5">
      <div className="quality-caption">
        <span></span>
        <div className="text">
          <h3>
            HOME <br /> DECOR
          </h3>
        </div>
        <span></span>
      </div>
      <div className="container">
        <>
          <div className="row">
            {newProducts.map((items) => {
              return (
                <div className="col-lg-4" key={items.id}>
                  <div className="items-decor">
                    <img src={items.img} alt="" />
                    <div className="names">
                      <p>{items.name}</p>
                      <Link to="/cabinets">
                        <BsArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </div>
    </div>
  );
};

export default HomeDecor;
