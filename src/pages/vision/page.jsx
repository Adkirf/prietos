import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Hero from "../../components/home/Hero";

import OurOrigin from "../../components/vision/OurOrigin";
import FullScreenMedia from "../../components/FullScreenMedia";
import CoreValues from "../../components/vision/CoreValues";
import DuoImage from "../../components/vision/DuoImage";
import Roadmap from "../../components/vision/Roadmap";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import CollectionTitle from "../../components/CollectionTitle";

import chair from "../../../public/assets/images/chair.png";
import mani_bg from "../../../public/assets/banners/mani_bg.png";

export default function VisionPage() {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Only trigger on mobile devices
    if (window.innerWidth <= 768) {
      setBounce(true);
      const timer = setTimeout(() => setBounce(false), 2200); // match animation duration
      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <>
      <Header />
      <div className={`relative w-full  mx-auto text-thin text-color-text`}>
        <div className="relative w-full mx-auto">
          <Hero desktopSrc={mani_bg} mobileSrc={mani_bg} />
          <div className="h-[100vh]"></div>
          <div
            className={`relative z-10 bg-black rounded-xl ${
              bounce ? " bounce2" : ""
            }`}
          >
            <div className="py-8 md:py-4 -translate-y-[45%]">
              <CollectionTitle isVision />
            </div>
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
      </div>
    </>
  );
}
