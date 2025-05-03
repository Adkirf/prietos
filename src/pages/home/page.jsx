import React, { useState } from "react";
import Hero from "../../components/landingSections/Hero";
import CollectionTitle from "../../components/CollectionTitle";
import ImageSlider from "../../components/ImageSlider";
import AccessTypes from "../../components/landingSections/AccessTypes";
import { Subscribe } from "../../components/Subscribe";
import VideoGrid from "../../components/landingSections/VideoGrid";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VideoSection from "../../components/landingSections/VideoSection";
export default function Home() {
  return (
    <div className="relative w-full max-w-[1576px] mx-auto text-thin text-color-text">
      <div className="relative w-full max-w-[1576px] mx-auto">
        <Header />
        <Hero />
        <div className="h-[100vh]"></div>
        <div className="relative z-10 bg-black rounded-xl">
          <div className="py-4 -translate-y-[33%]">
            <CollectionTitle />
          </div>
          <ImageSlider />

          <div className="py-[25vh] flex flex-col items-center">
            <h3>Many dress like it. Just a few simply are.</h3>
          </div>
          <VideoSection />

          <VideoGrid />

          <AccessTypes />
          <Subscribe />
          <Footer />
        </div>
      </div>
    </div>
  );
}
