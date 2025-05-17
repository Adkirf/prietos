import React from "react";
import logo from "../../public/assets/images/logo.png";

export default function Footer() {
  return (
    <div className="w-[98%] mx-auto card p-5 rounded-[8px]">
      <img src={logo} alt="logo" className="max-w-[303px] max-h-[48.8px]" />
      <div className="my-6 md:my-10 bg-[#46464C] w-full h-[1px]" />
      <div className="flex justify-between flex-col md:flex-row">
        <div className="flex justify-start md:justify-between  gap-2 md:gap-[80px]">
          <div className="w-full max-w-[126px] md:w-auto">
            <h3 className="text-white font-semibold mb-3 text-[20px]">Home</h3>
            <ul className="space-y-1]">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Articles</a>
              </li>
              <li>
                <a href="#">Column</a>
              </li>
              <li>
                <a href="#">Recipes</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          {/* Section 2 */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-[20px]">
              Socials
            </h3>
            <ul className="space-y-1 text-[#BFBFBF]">
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-[16px] md:text-[20px] mt-5 md:mt-0 text-white ">
          Copyright ©2025 Prieto's, Inc
        </p>
      </div>
    </div>
  );
}
