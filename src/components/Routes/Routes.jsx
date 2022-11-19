import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../otherComponents/components/Header";
import SidebarNav from "../../otherComponents/components/SidebarNav";
import Aboutus from "../../otherComponents/pages/Aboutus";
import Contact from "../../otherComponents/pages/Contact";
import Gallery from "../../otherComponents/pages/Gallery";
import Services from "../../otherComponents/pages/Services";
import Home from "../Pages/Home";

const RouteItem = () => {
  let [menuState, setMenuState] = useState(false);
  return (
    <BrowserRouter>
      <div className="App container">
        <Header menuState={menuState} setMenuState={setMenuState} />
        <SidebarNav menuState={menuState} setMenuState={setMenuState} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouteItem;
