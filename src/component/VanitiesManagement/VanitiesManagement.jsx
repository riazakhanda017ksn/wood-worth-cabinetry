import React from "react";
import Navbar from "../navbar/Navbar";
import VanitiesBanner from "../VanitiesBanner/VanitiesBanner";
import WhereToBuy from "../WhereToBuy/WhereToBuy";
import Footer from "../Footer/Footer";

const VanitiesManagement = () => {
  return (
    <>
      <Navbar />
      <VanitiesBanner />
      <WhereToBuy />
      <Footer />
    </>
  );
};

export default VanitiesManagement;
