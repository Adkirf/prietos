import React, { useState, useEffect, use } from "react";
import Hero from "../../components/exclussive-access/Hero";
import CollectionTitle from "../../components/CollectionTitle";
import ImageSlider from "../../components/ImageSlider";
import AccessTypes from "../../components/exclussive-access/AccessTypes";
import Subscribe from "../../components/Subscribe";
import VideoGrid from "../../components/exclussive-access/VideoGrid";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VideoSection from "../../components/exclussive-access/VideoSection";

import mani_bg from "../../../public/assets/banners/mani_bg.png";

export default function ExclusiveAccessPage() {
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
      <div className={`relative w-full mx-auto text-thin text-color-text`}>
        <div className="relative w-full  mx-auto">
          <Hero desktopSrc={mani_bg} mobileSrc={mani_bg} />
          <div className="h-[100vh]"></div>
          <div
            className={`relative z-10 bg-black rounded-xl ${
              bounce ? " bounce2" : ""
            }`}
          >
            <div className="py-8 md:py-4 -translate-y-[30%]">
              <CollectionTitle />
            </div>
            <ImageSlider />

            <div className="py-[25vh] flex flex-col items-center ">
              <h3 className="italic">
                Many dress like it.{" "}
                <span className="text-image"> Just a few simply Are.</span>
              </h3>
            </div>
            <VideoSection />

            <VideoGrid />

            <AccessTypes />
            <Subscribe />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
