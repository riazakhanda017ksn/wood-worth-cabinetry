import React from "react";
import Navbar from "../navbar/Navbar";
import Slider from "../Slider/Slider";
import HomeOwner from "../HomeOwner/HomeOwner";
import QualityRedefined from "../QualityRedefined/QualityRedefined";
import Visualize from "../Visualize/Visualize";
import Cabinet from "../Cabinet/Cabinet";
import BecomeDealer from "../BecomeDeller/BecomeDeller";
import DreamKitchen from "../DreamKitchen/DreamKitchen";
import Footer from "../Footer/Footer";

const HomeManagement = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <HomeOwner />
      <QualityRedefined />
      <Visualize />
      <Cabinet />
      <BecomeDealer />
      <DreamKitchen />
      <Footer />
    </>
  );
};

export default HomeManagement;
