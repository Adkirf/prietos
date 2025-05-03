import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * FlipCard
 * @param {React.ReactNode} front - The front face (e.g., <FullScreenMedia />)
 * @param {React.ReactNode} back - The back face (e.g., <VideoGrid />)
 */
export default function FlipCardSections({ front, back }) {
  // --- State for flip and phase ---
  const [flipped, setFlipped] = useState(false); // triggers the animation
  const [flipFinished, setFlipFinished] = useState(false); // animation done
  const [hasBeenFullyOut, setHasBeenFullyOut] = useState(false); // for phase transition
  const [hasReturnedAfterOut, setHasReturnedAfterOut] = useState(false); // for phase transition
  const [frontHeight, setFrontHeight] = useState(0);
  const [backHeight, setBackHeight] = useState(0);
  const [measured, setMeasured] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // for fade-in effect

  // --- Refs for measuring heights ---
  const frontRef = useRef(null);
  const backRef = useRef(null);

  // --- Intersection Observer for fully out/in detection (threshold 0) ---
  const { ref: outOfViewRef, inView: anyInView } = useInView({ threshold: 0 });

  // --- Sentinel observer for bottom of front face ---
  const { ref: sentinelRef, inView: sentinelInView } = useInView({
    threshold: 1.0,
  });

  // --- Compose refs for the outer container ---
  const setOuterRef = (node) => {
    outOfViewRef(node);
  };

  // --- Measure heights after mount ---
  useLayoutEffect(() => {
    if (frontRef.current && backRef.current) {
      setFrontHeight(frontRef.current.offsetHeight);
      setBackHeight(backRef.current.offsetHeight);
      setMeasured(true);
    }
  }, [front, back]);

  // --- Trigger flip only once when sentinel is fully in view ---
  React.useEffect(() => {
    if (sentinelInView && !flipFinished && measured) {
      setFlipped(true);
    }
  }, [sentinelInView, flipFinished, measured]);

  // --- After animation, allow phase transition ---
  const handleAnimationComplete = () => {
    if (flipped && !flipFinished) {
      setFlipFinished(true);
    }
  };

  // --- Track fully out of view, then back in, for stacked layout ---
  React.useEffect(() => {
    if (!flipFinished) return;
    // When card is fully out of view (not even partially visible)
    if (!anyInView && !hasBeenFullyOut) {
      setHasBeenFullyOut(true);
    }
    // When card is back in view after being fully out
    if (hasBeenFullyOut && anyInView && !hasReturnedAfterOut) {
      setHasReturnedAfterOut(true);
      setFadeIn(true); // trigger fade-in when stacked layout is about to show
    }
  }, [flipFinished, anyInView, hasBeenFullyOut, hasReturnedAfterOut]);

  // --- Combined height for container ---
  const combinedHeight = frontHeight + backHeight;

  // --- PHASE 2: Stacked layout ---
  if (flipFinished && hasBeenFullyOut && hasReturnedAfterOut) {
    return (
      <motion.div
        className="flip-card-stacked-container"
        ref={setOuterRef}
        style={{ width: "100%", minHeight: combinedHeight || undefined }}
        initial={{ opacity: 0 }}
        animate={{ opacity: fadeIn ? 1 : 0 }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: fadeIn ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          <div ref={frontRef}>{front}</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: fadeIn ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div ref={backRef}>{back}</div>
        </motion.div>
      </motion.div>
    );
  }

  // --- PHASE 1: 3D flip animation ---
  return (
    <div
      className="flip-card-container"
      ref={setOuterRef}
      style={{
        width: "100%",
        height: combinedHeight || "auto",
        minHeight: combinedHeight || undefined,
        position: "relative",
        transition: "height 0.5s cubic-bezier(0.19,1,0.22,1)",
        overflow: "hidden",
      }}
    >
      {/* Hidden for measuring heights only, not visible */}
      <div
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          width: "100%",
          zIndex: -1,
        }}
      >
        <div ref={frontRef}>{front}</div>
        <div ref={backRef}>{back}</div>
      </div>
      {/* 3D Flip Card */}
      <motion.div
        className="flip-card"
        animate={{ rotateX: flipped ? 180 : 0 }}
        transition={{ duration: 2.2, ease: [0.19, 1, 0.22, 1] }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
        onAnimationComplete={handleAnimationComplete}
      >
        <div
          className="flip-card-face front"
          style={{ zIndex: flipped ? 1 : 2, position: "relative" }}
        >
          {front}
          {/* Sentinel at the bottom of the front face */}
          <div
            ref={sentinelRef}
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              height: 1,
              pointerEvents: "none",
            }}
          />
        </div>
        <div
          className="flip-card-face back"
          style={{
            zIndex: flipped ? 2 : 1,
            transform: "rotateX(180deg)",
          }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}
