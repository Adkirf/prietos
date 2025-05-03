import React from "react";
import football from "../../public/assets/banners/football.png";
import mob_football from "../../public/assets/banners/mob_football.png";
import inspiredtext from "../../public/assets/images/inspired-text.png";

export default function FullScreenMedia() {
  return (
    <>
      <div className="w-full h-[100vh] pt-0  relative">
        <img
          src={football}
          alt="img"
          className="w-full h-full object-cover hidden md:block rounded-none"
        />
        <img
          src={mob_football}
          alt="img"
          className="w-full h-full block md:hidden"
        />
      </div>
    </>
  );
}
