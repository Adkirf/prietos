import React, { useEffect, useState } from "react";

export default function Hero({ isFixed = true, desktopSrc, mobileSrc }) {
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
      {/* mani_bg/scrollToBottom section (LandingHero) */}
      <div
        className={`${
          isFixed ? "fixed" : ""
        } top-0 left-0 w-full h-[99vh] z-10 pointer-events-none`}
        style={{ background: isScrolledPast ? "black" : "none" }}
      >
        {!isScrolledPast && (
          <>
            <img
              src={desktopSrc}
              alt="bg"
              className="hidden md:block w-full h-full object-cover"
            />
            <img
              src={mobileSrc}
              alt="bg"
              className="block md:hidden w-full h-full object-cover"
            />
          </>
        )}
      </div>
    </>
  );
}
