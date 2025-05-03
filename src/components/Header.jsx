import React, { useEffect, useState } from "react";
import logo from "../../public/assets/images/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-20 left-0 top-0 w-full flex  items-center px-6 py-4 transition-colors duration-300 ${
        scrolled || hovered ? "header-bg" : "header-transparent"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-start w-auto md:w-1/3">
        <img src={logo} alt="logo" className="h-8 md:h-10 " />
      </div>
      <div className="flex items-center justify-center w-auto md:w-1/3">
        <p className="tracking-wide text-center">
          <span
            className="underline"
            style={{ textDecorationColor: "var(--color-primary)" }}
          >
            Exclussive Success.
          </span>
        </p>
      </div>
      <div className="flex items-center justify-end w-auto md:w-1/3">
        <p className="">Access</p>
      </div>
    </header>
  );
}
