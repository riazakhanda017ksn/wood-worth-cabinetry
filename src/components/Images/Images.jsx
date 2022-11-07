import React from "react";

const Images = ({ img }) => {
  return (
    <div
      style={{
        background: `url(${img?.urls?.regular})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "80vh",
      }}
      className="need-gap"
    >
      <h3>Captured by {img.user.first_name}</h3>
    </div>
  );
};

export default Images;
