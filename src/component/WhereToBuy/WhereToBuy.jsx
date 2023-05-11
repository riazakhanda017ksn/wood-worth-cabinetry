import React from "react";
import "./WhereToBuy.scss";

const WhereToBuy = () => {
  return (
    <div className="where-to-buy py-5 my-4">
      <div className="container box-shape">
        <div className="row">
          <div className="col-lg-6">
            <div className="boxes">
              <div className="box-content p-5">
                <h1>
                  Where <br /> to Buy
                </h1>
                <button>LOCATED A DEALER</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="boxes-two">
              <div className="box-content p-5">
                <h1>
                  Become
                  <br /> a Dealer
                </h1>
                <button>LINQUIRE HERE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
