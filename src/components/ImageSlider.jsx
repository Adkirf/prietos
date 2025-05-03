import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img_1 from "../../public/assets/images/img_1.png";
import img_2 from "../../public/assets/images/img_2.png";
import img_3 from "../../public/assets/images/img_3.png";

export default function ImageSlider() {
  const imagesSecOne = [img_1, img_2, img_3, img_1, img_2, img_3];

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
      swiperInstance.slideTo(imagesSecOne.length - 1);
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
        {imagesSecOne.map((item, index) => (
          <SwiperSlide
            key={index}
            className="!w-[70%] sm:!w-[50%]  md:max-w-[calc(33.333%-8px)] flex justify-center items-center"
          >
            <img
              src={item}
              alt={`img-${index}`}
              className="w-[50vw] md:w-[33vw] rounded-[4px] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
