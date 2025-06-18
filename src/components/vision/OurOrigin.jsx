import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef, useEffect } from "react";
import TreeComponent from "../../assets/TreeComponent";

export default function OurOrigin() {
  const ref = useRef(null);
  // Get scroll progress for this section (0 to 1 over 200vh)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: treeScrollProgress } = useScroll({
    target: ref,
    offset: ["start start", "start -220%"],
  });

  const treeOpacity = useTransform(treeScrollProgress, [0, 0.8, 1], [1, 1, 0]);
  const treeHeight = useTransform(
    treeScrollProgress,
    [0, 0.8, 1],
    [159, 350, 400]
  );

  const p1Opacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.18, 0.45, 0.55],
    [0, 1, 1, 1, 0]
  );
  const p1Y = useTransform(
    scrollYProgress,
    [0, 0.18, 0.45, 0.5],
    [40, 0, 0, -40]
  );

  // Paragraph 2: fade in 0.5-0.6, visible 0.6-0.9, fade out 0.9-1
  const p2Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.9, 1],
    [0, 1, 1, 0]
  );
  const p2Y = useTransform(scrollYProgress, [0.4, 0.9, 1], [140, 0, -40]);

  return (
    <section
      ref={ref}
      className="relative !px-0 w-full h-[300vh] flex flex-col justify-start items-center bg-black"
    >
      <div className="h-[80vh] md:h-[67vh] z-10 sticky top-[20vh] md:top-[33vh] w-full flex justify-between overflow-hidden items-end">
        <h2 className=" ml-8 min-w-fit self-start">Origin.</h2>
        <motion.div
          style={{
            opacity: treeOpacity,
          }}
        >
          <TreeComponent height={treeHeight} />
        </motion.div>
      </div>
      {/* Animated Paragraphs */}
      <div className="relative flex flex-col items-center w-full max-w-4xl mt-32 md:mt-40 min-h-[160vh]">
        <motion.p
          style={{
            opacity: p1Opacity,
            y: p1Y,
            position: "absolute",
            top: "10vh",
            left: 0,
            right: 0,
            willChange: "opacity, transform",
          }}
          className="text-lg md:text-2xl px-6 md:px-0 text-center"
        >
          Prieto’s love for fashion has always been rooted in elegance and
          class, inspired by the timeless artistry of women’s clothing. On a
          journey to his family roots in Andorra, Spain, he found himself
          captivated by the region’s breathtaking harmony of nature and culture.
        </motion.p>
        <motion.p
          style={{
            opacity: p2Opacity,
            y: p2Y,
            position: "absolute",
            top: "50vh",
            left: 0,
            right: 0,
            willChange: "opacity, transform",
          }}
          className="text-lg md:text-2xl px-6 md:px-0 text-center"
        >
          It was there that Prieto realized that, in a world of abundance, true
          beauty lies in uniqueness. Just as Andorra’s distinct character sets
          it apart, Prieto envisioned fashion as a deeply personal expression
          and where every design is exclusive to the individual.
        </motion.p>
      </div>
    </section>
  );
}
