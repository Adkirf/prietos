import React, { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import g1 from "../../../public/assets/images/g1.png";
import gg2 from "../../../public/assets/images/gg2.png";
import g2 from "../../../public/assets/images/g2.png";
import g3 from "../../../public/assets/images/g3.png";
import g4 from "../../../public/assets/images/g4.png";
import g5 from "../../../public/assets/images/g5.png";
import g6 from "../../../public/assets/images/g6.png";
import g7 from "../../../public/assets/images/g7.png";
import g8 from "../../../public/assets/images/g8.png";
import g10 from "../../../public/assets/images/g10.png";
import g9 from "../../../public/assets/images/g9.png";
import g11 from "../../../public/assets/images/g11.png";
import gg7 from "../../../public/assets/images/gg7.png";
import g12 from "../../../public/assets/images/g12.png";
import g13 from "../../../public/assets/images/g13.png";
import follow_1 from "../../../public/assets/images/follow_1.svg";
import follow_2 from "../../../public/assets/images/follow_2.svg";
import follow_3 from "../../../public/assets/images/follow_3.svg";

// Animation variants outside the component
const imageVariants = {
  hidden: ({ direction }) => ({ opacity: 0, x: direction }),
  visible: ({ direction, index, reduceMotion }) =>
    reduceMotion
      ? { opacity: 1, x: 0, transition: { duration: 0 } }
      : {
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            stiffness: 60,
            damping: 18,
            delay: 0.12 * index,
          },
        },
};

function VideoCard({
  src,
  titleImage,
  name,
  desc,
  direction,
  index,
  reduceMotion,
  colIdx,
  hasAnimated,
  isActive = false,
  onTouch = null,
}) {
  // Detect if device is touch
  const isTouch =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  return (
    <motion.figure
      className="relative mb-1 md:mb-4 break-inside-avoid group rounded "
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={imageVariants}
      custom={{ direction: direction * 80, index, reduceMotion }}
      onTouchStart={onTouch}
      tabIndex={isTouch ? 0 : undefined}
    >
      {titleImage && (
        <div
          className={
            `absolute top-[6px] md:top-[20px] left-[6px] md:left-[10px] flex flex-col items-start md:flex-row md:justify-start gap-[6px] md:items-center transition-opacity duration-200 pointer-events-none z-10 ` +
            (isTouch
              ? isActive
                ? "opacity-100 pointer-events-auto"
                : "opacity-0"
              : "opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto")
          }
        >
          <img
            src={titleImage}
            alt="titl"
            className="md:w-[36px] md:h-[36px] w-[24px] h-[24px]"
          />
          <div className="flex flex-col md:max-w-[193px]">
            <p className="text-[12px] md:text-[14px] font-bold leading-[15px] text-white mb-0">
              {name}
            </p>
            <p className="text-[12px] md:text-[16px] font-normal leading-[15px] text-white mb-0">
              {desc}
            </p>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={`img-${colIdx}-${index}`}
        className="w-full rounded object-cover"
      />
    </motion.figure>
  );
}

// Helper to split images into columns
function splitIntoColumns(arr, numCols) {
  const cols = Array.from({ length: numCols }, () => []);
  arr.forEach((item, idx) => {
    cols[idx % numCols].push(item);
  });
  return cols;
}

// ScrollingColumn component
function ScrollingColumn({
  images,
  direction = 1,
  hasAnimated,
  reduceMotion,
  colIdx,
}) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  // Drift slower for subtle effect
  const drift = direction * 0.2;
  const y = useTransform(scrollY, (value) =>
    hasAnimated && !reduceMotion ? value * drift : 0
  );

  // Repeat images enough times to always fill the column, even with drift
  const REPEAT_COUNT = 5; // Adjust as needed for your drift range and column height
  const repeatedImages = Array(REPEAT_COUNT).fill(images).flat();

  // Track which card is active (tapped) for mobile
  const [activeIndex, setActiveIndex] = React.useState(null);

  // Close overlay on outside tap (mobile only)
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (!isTouch) return;
    function handleTouch(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) {
        setActiveIndex(null);
      }
    }
    document.addEventListener("touchstart", handleTouch);
    return () => document.removeEventListener("touchstart", handleTouch);
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full h-full flex flex-col gap-1 md:gap-4 overflow-hidden"
      style={{ minHeight: 0 }}
    >
      <motion.div
        style={{
          y,
          position: "absolute",
          top: "-50%",
          left: 0,
          width: "100%",
          transform: "translateY(-50%)",
        }}
        className="flex flex-col gap-1 md:gap-4 w-full"
      >
        {repeatedImages.map((src, index) => (
          <VideoCard
            key={index}
            src={src.src}
            titleImage={src.titleImage}
            name={src.name}
            desc={src.desc}
            direction={direction}
            index={index}
            reduceMotion={reduceMotion}
            colIdx={colIdx}
            hasAnimated={hasAnimated}
            isActive={activeIndex === index}
            onTouch={(e) => {
              e.stopPropagation();
              setActiveIndex(activeIndex === index ? null : index);
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function VideoGrid() {
  const imagesSecgrid = [
    {
      desc: "@ford_t • 128.6M followers",
      name: "Tom Ford",
      src: g1,
      titleImage: follow_1,
    },
    {
      desc: "@newuser1 • 1K followers",
      name: "New User 1",
      src: g1,
      titleImage: follow_1,
    },
    {
      desc: "@rob • CEO, Audi WV",
      name: "Robert Thompson",
      src: gg2,
      titleImage: follow_2,
    },
    {
      desc: "@newuser3 • 3K followers",
      name: "New User 3",
      src: g2,
      titleImage: follow_1,
    },
    {
      desc: "@dummy1 • 10K followers",
      name: "Dummy User 1",
      src: g2,
      titleImage: follow_1,
    },
    {
      desc: "@dummy2 • 20K followers",
      name: "Dummy User 2",
      src: g3,
      titleImage: follow_2,
    },
    {
      desc: "@dummy3 • 30K followers",
      name: "Dummy User 3",
      src: g4,
      titleImage: follow_3,
    },
    {
      desc: "@dummy4 • 40K followers",
      name: "Dummy User 4",
      src: g5,
      titleImage: follow_1,
    },
    {
      desc: "@dummy5 • 50K followers",
      name: "Dummy User 5",
      src: g6,
      titleImage: follow_2,
    },
    {
      desc: "@dummy6 • 60K followers",
      name: "Dummy User 6",
      src: g7,
      titleImage: follow_3,
    },
    {
      desc: "@edwaaaard • CTO, Apple",
      name: "Edward Smith",
      src: g8,
      titleImage: follow_3,
    },
    {
      desc: "@dummy7 • 70K followers",
      name: "Dummy User 7",
      src: g10,
      titleImage: follow_1,
    },
    {
      desc: "@dummy8 • 80K followers",
      name: "Dummy User 8",
      src: g9,
      titleImage: follow_2,
    },
    {
      desc: "@dummy9 • 90K followers",
      name: "Dummy User 9",
      src: g11,
      titleImage: follow_3,
    },
    {
      desc: "@dummy10 • 100K followers",
      name: "Dummy User 10",
      src: gg7,
      titleImage: follow_1,
    },
    {
      desc: "@edwaaaard • CTO, Apple",
      name: "Edward Smith",
      src: g12,
      titleImage: follow_3,
    },
    {
      desc: "@dummy11 • 110K followers",
      name: "Dummy User 11",
      src: g13,
      titleImage: follow_2,
    },
  ];

  // Animation control: only play once
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  // Responsive column count (match your Tailwind classes)
  // 3 columns by default, 5 on large screens
  // We'll use window.innerWidth for a simple responsive check
  const [numCols, setNumCols] = React.useState(3);
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setNumCols(5);
      else if (window.innerWidth >= 640) setNumCols(3);
      else setNumCols(2);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columns = splitIntoColumns(imagesSecgrid, numCols);

  return (
    <section className="flex flex-col gap-12">
      <h2 className="ml-4">
        Inspired by <span className="text-image">Success.</span>
      </h2>
      <div ref={ref} className=" w-full flex gap-2 md:gap-4  px-2 relative">
        {!reduceMotion && (
          <>
            <div className="video-grid-fade video-grid-fade-top" />
            <div className="video-grid-fade video-grid-fade-bottom" />
          </>
        )}
        {columns.map((colImages, colIdx) => (
          <div
            key={colIdx}
            className="flex-1 min-w-0 relative h-[150vh] overflow-hidden"
          >
            <ScrollingColumn
              images={colImages}
              direction={colIdx % 2 === 0 ? -1 : 1}
              hasAnimated={hasAnimated}
              reduceMotion={reduceMotion}
              colIdx={colIdx}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
