import React from "react";
import football from "../../public/assets/banners/football.png";
import mob_football from "../../public/assets/banners/mob_football.png";

const desktopSrc = football;
const mobileSrc = mob_football;

export default function FullScreenMedia({ desktopSrc, mobileSrc }) {
  return (
    <>
      <div className="w-full h-[100vh] pt-0  relative">
        <img
          src={desktopSrc}
          alt="img"
          draggable={false}
          className="w-full h-full object-cover hidden md:block rounded-none"
        />
        <img
          src={mobileSrc}
          alt="img"
          draggable={false}
          className="w-full h-full object-cover block md:hidden"
        />
      </div>
    </>
  );
}
