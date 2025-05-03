import React, { useEffect, useState } from "react";
import mani_bg from "../../../public/assets/banners/mani_bg.png";
import Header from "../Header";

export default function Hero({ scrollToBottom }) {
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 2;
      setIsScrolledPast(window.scrollY >= triggerPoint);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header section */}

      {/* mani_bg/scrollToBottom section (LandingHero) */}
      <div
        className="fixed top-0 left-0 w-full h-[99vh] z-10 pointer-events-none"
        style={{ background: isScrolledPast ? "black" : "none" }}
      >
        {!isScrolledPast && (
          <img src={mani_bg} alt="bg" className="w-full h-full object-cover" />
        )}
      </div>
    </>
  );
}
