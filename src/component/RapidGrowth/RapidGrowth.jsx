import React from "react";
import "./RapidGrowth.scss";

const RapidGrowth = () => {
  const ourBrands = [
    {
      id: "112333ad12d",
      name: "OUR BRAND",
      post: "Woodworth Cabinetry is a customer-orientated, experienced, and dedicated team who embrace the kitchen as the heart and soul of the home.",
      class: "",
    },
    {
      id: "112333ad1c2",
      name: "OUR PROMISE",
      post: "Woodworth Cabinetry takes extra precautions in ensuring that our clients receive high-quality products through professional service and a customized process.",
      class: "left-right-border",
    },
    {
      id: "112333ad1c21q",
      name: "OUR MISSION",
      post: "Woodworth Cabinetry wants to personalize the process of cabinetry and home décor, adding finishing works that give your projects unique qualities to match the energy of the home",
    },
  ];
  return (
    <div className="padding">
      <div className="RapidGrowth">
        <div className="growth-text">
          <h3>Rapid Growth</h3>
          <p>
            Our new headquarters is a one-million square foot state of the art
            production hub nestled on the Passaic River in Newark. It
            consolidates all four of our previous spaces into one
            superstructure. With this extraordinary advancement, wood worth
            cabinetry is destined for exponential growth. The new building
            supports our vision with spaces that intentionally foster a
            transparent environment and encourage the enjoyment of discovery.
            This makes wood worth cabinetry a place where people are happy to
            come and innovate.
          </p>
        </div>
        <div className="grow-bg"></div>
      </div>
      <div className="container padding" style={{ paddingBottom: "0" }}>
        <div className="row">
          {ourBrands.map((brand) => {
            return (
              <div className="col-lg-4" key={brand.id}>
                <div className="brand">
                  <div className={brand.class}>
                    <h4>{brand.name}</h4>
                    <p>{brand.post}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RapidGrowth;
