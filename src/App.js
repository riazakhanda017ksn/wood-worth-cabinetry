import React from "react";
import Navbar from "./component/navbar/Navbar";
import Slider from "./component/Slider/Slider";
import HomeOwner from "./component/HomeOwner/HomeOwner";
import QualityRedefined from "./component/QualityRedefined/QualityRedefined";
import Visualize from "./component/Visualize/Visualize";
import Cabinet from "./component/Cabinet/Cabinet";
import BecomeDealer from "./component/BecomeDeller/BecomeDeller";
import DreamKitchen from "./component/DreamKitchen/DreamKitchen";
import Footer from "./component/Footer/Footer";
import CabinetBanner from "./component/CabinetBanner/CabinetBanner";
import VanitiesBanner from "./component/VanitiesBanner/VanitiesBanner";
import WhereToBuy from "./component/WhereToBuy/WhereToBuy";
import HomeDecor from "./component/HomeDecor/HomeDecor";
import About from "./component/About/About";
import RapidGrowth from "./component/RapidGrowth/RapidGrowth";
import OurValues from "./component/OurValues/OurValues";
import Contact from "./component/Contact/Contact";
import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeManagement from "./component/HomeManagement/HomeManagement";
import CabinetManagent from "./component/CabinetManagent/CabinetManagent";
import VanitiesManagement from "./component/VanitiesManagement/VanitiesManagement";
import AboutManagement from "./component/AboutManagement/AboutManagement";
import ContactManagement from "./component/ContactManagement/ContactManagement";
import RegisterManagement from "./component/RegisterManagement/RegisterManagement";
import LoginManagement from "./component/LoginManagement/LoginManagement";
import DoorDetails from "./component/DoorDetails/DoorDetails";
import WarrantyManagement from "./component/WarrantyManagement/WarrantyManagement";
import CompanyInfo from "./component/CompanyInfo/CompanyInfo";
import ScrollTop from "./component/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomeManagement />} />
          <Route path="/all-door" element={<CabinetManagent />} />
          <Route path="/vanities" element={<VanitiesManagement />} />
          <Route path="/all-door/:id" element={<DoorDetails />} />
          {/* <Route path="/home-decor" element={<HomeDecorManagement />} /> */}
          <Route path="/about-us" element={<AboutManagement />} />
          <Route path="/contact-us" element={<ContactManagement />} />
          <Route path="/became-a-dealer" element={<RegisterManagement />} />
          <Route path="/login" element={<LoginManagement />} />
          <Route path="/warranty" element={<WarrantyManagement />} />
          <Route path="/company-info" element={<CompanyInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
