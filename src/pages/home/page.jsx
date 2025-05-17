import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import OurOrigin from "../../components/home/OurOrigin";
import FullScreenMedia from "../../components/FullScreenMedia";
import CoreValues from "../../components/home/CoreValues";
import DuoImage from "../../components/home/DuoImage";
import Roadmap from "../../components/home/Roadmap";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";

import chair from "../../../public/assets/images/chair.png";
import mani_bg from "../../../public/assets/banners/mani_bg.png";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className={`relative w-full z-0  mx-auto text-thin text-color-text`}>
        <div className="relative w-full   mx-auto">
          <FullScreenMedia desktopSrc={mani_bg} mobileSrc={mani_bg} />

          <OurOrigin />
          <div className="py-[25vh]">
            <FullScreenMedia desktopSrc={chair} mobileSrc={chair} />
          </div>
          <CoreValues />
          <DuoImage />
          <Roadmap />
          <Subscribe />
          <Footer />
        </div>
      </div>
    </>
  );
}
