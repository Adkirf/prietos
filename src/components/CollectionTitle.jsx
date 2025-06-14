import React from "react";
import tree_logo from "../../public/assets/banners/tree_logo.svg";
import icon from "../../public/icon.svg";

export default function CollectionTitle({ isHome = false }) {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="bg-black rounded-full p-2">
        <img
          src={isHome ? icon : tree_logo}
          alt="tree"
          className="max-w-[4.2rem] max-h-[3.5rem] md:max-w-[6.875rem] md:max-h-[5.75rem]  aspect-square object-contain"
        />
      </div>
      {!isHome && (
        <>
          <h3 className="text-image mt-8">Exclussive Success.</h3>
          <h4 className="mb-0">A tribute to professionals around the globe.</h4>
        </>
      )}
    </div>
  );
}
