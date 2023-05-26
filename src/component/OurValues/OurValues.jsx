import React from "react";

const OurValues = () => {
  return (
    <div>
      <div className="OurValues padding" style={{ paddingTop: "0" }}>
        <div className="quality-caption">
          <span></span>
          <div className="text">
            <h3>OUR VALUES</h3>
          </div>
          <span></span>
        </div>
      </div>
      {/* our values */}
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="our-values-text">
              <h4>
                We are deeply committed to our four core values that inspire{" "}
                <br /> who we truly are at WoodWorth Cabinetry.
              </h4>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
        {/* rows again */}
        <div className="row my-5 py-5 ">
          <div className="col-lg-5">
            <div className="Quality mt-5">
              <h1>CUSTOMER ORIENTED</h1>
              <p>
                We believe that quality should never be compromised. At wood
                worth cabinetry, we recognize that design is so much more than
                just the appearance alone. That is why we diligently focus on
                quality sourcing all components that make up our superior
                cabinets. At wood worth cabinetry, everything is tested – we
                leave nothing to chance.
              </p>
            </div>
            <div className="Quality mt-5">
              <h1>HIGH QUALITY</h1>
              <p>
                We import the finest material and carefully manufacture products
                using high-tech machinery and hand-crafted details from
                carpenters who have over 40 years of experience.
              </p>
            </div>
          </div>
          <div className="col-lg-2 text-center">
            <div className="border-items ">
              <div className="brds"></div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="Quality mt-5 text-start">
              <h1>FULLY STOCKED</h1>
              <p>
                Our warehouse is always fully-stocked with ready-to-assemble
                (RTA) cabinetry and vanities, making your orders ready for
                pick-up or delivery quickly and easily
              </p>
            </div>
            <div className="Quality mt-5 text-start">
              <h1>COMPETITIVELY PRICED</h1>
              <p>
                Being factory direct, we have an unbeatable price advantage over
                comparable products. Eliminating the middle man, we can beat
                local prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
