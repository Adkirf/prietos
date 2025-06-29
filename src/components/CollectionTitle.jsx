import React from "react";
import tree_logo from "../../public/assets/banners/tree_logo.svg";
import icon from "../../public/icon.svg";
import logo_small from "../../public/assets/images/logo_small.png";

export default function CollectionTitle({ isVision = false }) {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="bg-black rounded-full p-2">
        <img src={logo_small} alt="tree" className="w-24 h-24 object-contain" />
      </div>
    </div>
  );
}
