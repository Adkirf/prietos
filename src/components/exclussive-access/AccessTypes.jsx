import React, { useState, useRef } from "react";
import cloths from "../../../public/assets/images/cloths.png";
import TreeComponent from "../../assets/TreeComponent";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@/components/animate-ui/headless/accordion";
import { ArrowRight } from "lucide-react";

const content = [
  {
    title: "Exclusive Access",
    content: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    price: "Request only",
    bottom: "Request here",
  },
  {
    title: "Reserved Access",
    price: "Pre-Payment",
    content: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        text: "Reserve your place in line with a $20 prepayment. Each reservation secures one piece, with the $20 credited toward your purchase.",
      },
    ],
    bottom: "Buy access $29.99",
  },
  {
    title: "Public Access",
    content: [
      {
        text: "Public access details go here. You can add more information as needed.",
      },
    ],
    price: "",
    bottom: "Get Notified",
  },
];

export default function AccessTypes() {
  const [openIdx, setOpenIdx] = useState(null);
  // Store close functions for each panel
  const closeFns = useRef([]);

  return (
    <section className="flex justify-between gap-2 flex-col lg:flex-row px-2">
      <img src={cloths} alt="tree" className="mx-auto w-full lg:w-3/7 " />
      <div className="mx-auto w-full lg:w-4/7 flex flex-col gap-2 items-center">
        <div className="bg-[#846747] px-4 py-5 md:px-14 md:py-10 relative overflow-hidden w-full h-full rounded ">
          <Accordion>
            {content.map((item, idx) => (
              <AccordionItem key={item.title}>
                {({ open, close }) => {
                  // Store the close function for this panel
                  closeFns.current[idx] = close;
                  return (
                    <>
                      <AccordionButton
                        className={`flex justify-between w-full ${
                          idx !== 0 ? "border-t border-white/30" : ""
                        }`}
                        onClick={() => {
                          // If opening a new panel, close all others
                          if (openIdx !== idx) {
                            closeFns.current.forEach((fn, i) => {
                              if (i !== idx && typeof fn === "function") fn();
                            });
                            setOpenIdx(idx);
                          } else {
                            // If closing the currently open panel
                            setOpenIdx(null);
                          }
                        }}
                      >
                        <div className="relative">
                          <h3 className="mb-0 leading-6 text-white">
                            {item.title}
                          </h3>
                          {item.price && !open && (
                            <div className="flex flex-col leading-none text-[#FFF4EB]">
                              <p className="mb-0 text-[10px] md:text-[13px] lg:text-[13px] absolute overflow-visible right-0">
                                {item.price}
                              </p>
                              <span className="h-5" />
                            </div>
                          )}
                        </div>
                      </AccordionButton>
                      <AccordionPanel>
                        <div className=" w-full ">
                          {item.content.map((text, i) => (
                            <p key={i} className="text-[#FFF4EB]">
                              {text.text}
                            </p>
                          ))}
                        </div>
                        <div className="flex justify-start items-center gap-2 pt-7">
                          <p className="text-10 md:text-13 lg:text-[13px] font-[400] text-[#FFF4EB]">
                            {item.bottom}
                          </p>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </AccordionPanel>
                    </>
                  );
                }}
              </AccordionItem>
            ))}
          </Accordion>
          {/* Bottom background image (tree pattern) */}
          <div className="absolute bottom-0 right-0 w-[200px] md:w-[300px] opacity-70 pointer-events-none">
            <TreeComponent color="#DAA967" />
          </div>
        </div>
      </div>
    </section>
  );
}
