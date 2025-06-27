import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import LeaveComponenet from "../assets/LeaveComponent";

export function ImageSlider({ imageSequence, autoSlide }) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const sliderRef = useRef(null);
  const [triggeredThresholds, setTriggeredThresholds] = useState({
    half: false,
    twoThirds: false,
    full: false,
  });

  const goToNextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goToLastSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideTo(imageSequence.length - 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      // Calculate how much of the component is visible
      const visibleTop = Math.max(rect.top, 0);
      const visibleBottom = Math.min(rect.bottom, windowHeight);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const totalHeight = rect.height;
      const visibleRatio = visibleHeight / totalHeight;

      // Only trigger when the component is in the viewport
      if (visibleHeight > 0) {
        if (visibleRatio >= 0.5 && !triggeredThresholds.half) {
          goToLastSlide();
          setTriggeredThresholds((prev) => ({ ...prev, half: true }));
        }
        /*  if (visibleRatio >= 2 / 3 && !triggeredThresholds.twoThirds) {
          goToNextSlide();
          setTriggeredThresholds((prev) => ({ ...prev, twoThirds: true }));
        }
        if (visibleRatio >= 1 && !triggeredThresholds.full) {
          goToNextSlide();
          setTriggeredThresholds((prev) => ({ ...prev, full: true }));
        } */
      } else {
        // Reset triggers if component is out of view
        setTriggeredThresholds({ half: false, twoThirds: false, full: false });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggeredThresholds, swiperInstance]);

  return (
    <section ref={sliderRef}>
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        spaceBetween={8}
        slidesPerView={3}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 0.25,
          momentumBounce: false,
        }}
        speed={3000}
        resistance={true}
        resistanceRatio={0.75}
        centeredSlides={false}
        grabCursor={true}
        className="mySwiper"
      >
        {imageSequence.map((item, index) => (
          <SwiperSlide
            key={index}
            className="!w-[70%] sm:!w-[50%]  md:max-w-[calc(33.333%-8px)] flex justify-center items-center"
          >
            <img
              src={item}
              alt={`img-${index}`}
              className="w-full md:w-[33vw] rounded-[4px] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export function ImageCarussel({ imageSequence }) {
  return (
    <section className="max-w-[100vw]">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: imageSequence.length }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-0">
                <Card className="p-0 m-0 !bg-black border-none text-text-primary text-thin">
                  <CardContent className="flex flex-col items-center justify-center p-0 ">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute flex flex-row items-center p-1 gap-1 bg-black top-2 left-2 rounded">
                        <LeaveComponenet />
                        {index % 2 === 0 ? (
                          <>
                            <p className="text-[0.5rem] md:text-[0.6rem] lg:text-[0.7rem] text-gold">
                              SOLD OUT
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="text-thin ">499</p>
                            <p className="text-[0.5rem] md:text-[0.6rem] lg:text-[0.7rem] self-start opacity-75">
                              /500
                            </p>
                          </>
                        )}
                      </div>
                      <img
                        src={imageSequence[index]}
                        alt={`img-${index}`}
                        className="w-full object-cover aspect-square"
                      />
                    </div>
                    <div>
                      <p className="text-text-primary py-4">
                        Some example name
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/*         <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </section>
  );
}
