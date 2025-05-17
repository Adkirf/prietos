import React from "react";
import tree_logo from "../../public/assets/banners/tree_logo.svg";
import { ArrowRight } from "lucide-react";

export default function Subscribe() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row w-full ">
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <img
            src={tree_logo}
            alt="bg"
            className=" w-[80px] h-[60px]  md:w-[150px] md:h-[120px] lg:w-[214px] lg:h-[176px]"
          />
        </div>
        <div className="w-full px-4 md:py-0 md:w-2/3 md:max-w-[60vw]">
          <h2 className="">Request access.</h2>
          <div className="relative">
            <ArrowRight className="absolute right-0 h-5 w-5 top-5" />
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full text-[20px] border-b-2 outline-none border-white py-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
