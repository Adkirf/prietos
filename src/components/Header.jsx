import React, { useEffect, useState } from "react";
import logo from "../../public/assets/images/logo.png";
import UnderlineText from "./Underline";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "./ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items for mobile
  const menuItems = [
    { label: "Exclussive Success.", href: "#" },
    { label: "Access", href: "#access" },
  ];

  return (
    <header
      className={`fixed z-20 left-0 top-0 w-full flex justify-between md:items-center px-6 py-4 transition-colors duration-300 ${
        scrolled || hovered ? "header-bg" : "header-transparent"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Logo */}
      <div className="flex items-center justify-start w-auto md:w-1/3">
        <img src={logo} alt="logo" className="h-8 md:h-10 " />
      </div>
      {/* Center title (desktop only) */}
      <div className="hidden md:flex items-center justify-center w-auto md:w-1/3">
        <UnderlineText>
          <p className="">Exclussive Success.</p>
        </UnderlineText>
      </div>
      {/* Access (desktop only) */}
      <div className="hidden md:flex items-center justify-end w-auto md:w-1/3">
        <p className="">Access</p>
      </div>
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center mr-2">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className="text-[#EAEAEA] hover:text-primary focus:outline-none"
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[260px] sm:w-[320px] bg-black shadow-md  border-none px-6 py-8 flex flex-col justify-center"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav>
              <ul className="flex flex-col space-y-0 mt-0 divide-y divide-[#46464C]">
                {menuItems.map((item, idx) => (
                  <li key={item.label} className="py-4 first:pt-0 last:pb-0">
                    <a
                      href={item.href}
                      className=" transition-colors duration-300 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label === "Exclussive Success." ? (
                        <UnderlineText>{item.label}</UnderlineText>
                      ) : (
                        item.label
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
