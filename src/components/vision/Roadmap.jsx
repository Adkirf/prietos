import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LeaveComponent from "../../assets/LeaveComponent";

const Roadmap = () => {
  const timelineData = [
    {
      id: 1,
      date: "January 1887 - December 1949",
      title: "Prieto's",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      completed: false,
    },
    {
      id: 2,
      date: "April 2024",
      title: "Genesis",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      completed: true,
    },
    {
      id: 3,
      date: "Aug 2025",
      title: "Exclusive Success.",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur...",
      completed: false,
    },
    {
      id: 4,
      date: "Oct 2025",
      title: "Soon",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
      completed: false,
    },
  ];

  const [activeSection, setActiveSection] = useState(0);
  const timelineRef = useRef(null);
  const sectionRefs = useRef([]);
  const progressBarRef = useRef(null);
  const timelineBarRef = useRef(null);
  const lastMarkerRef = useRef(null);
  const [timelineBarHeight, setTimelineBarHeight] = useState(0);

  // Scroll animation for timeline progress
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 60%", "end end"],
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!progressBarRef.current) return;
      const progressRect = progressBarRef.current.getBoundingClientRect();

      let newActive = 0;
      sectionRefs.current.forEach((ref, idx) => {
        if (ref) {
          const marker = ref.querySelector(".circle-marker");
          if (marker) {
            const markerRect = marker.getBoundingClientRect();
            if (progressRect.bottom >= markerRect.top) {
              newActive = idx; // or use item.id if you prefer
            }
          }
        }
      });
      setActiveSection(newActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateTimelineBarHeight = () => {
      if (timelineBarRef.current && lastMarkerRef.current) {
        const barRect = timelineBarRef.current.getBoundingClientRect();
        const markerRect = lastMarkerRef.current.getBoundingClientRect();
        // Center of the marker relative to the bar
        const height = markerRect.top + markerRect.height / 2 - barRect.top;
        setTimelineBarHeight(height);
      }
    };

    updateTimelineBarHeight();
    window.addEventListener("resize", updateTimelineBarHeight);
    return () => window.removeEventListener("resize", updateTimelineBarHeight);
  }, []);

  return (
    <div
      ref={timelineRef}
      className="relative bg-black min-h-screen text-white py-16 px-4 md:px-8 overflow-hidden"
    >
      <div className="flex items-center justify-center">
        <h2 className="pb-36">Legacy.</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Timeline bar */}
        <div
          ref={timelineBarRef}
          className="absolute left-4 md:left-1/2 md:translate-x-[calc(-50%)]  w-[0.2rem]"
          style={{ height: timelineBarHeight }}
        >
          <div className="relative h-full">
            {/* Background track */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-600 rounded-full"></div>

            {/* Animated progress */}
            <motion.div
              ref={progressBarRef}
              className="absolute top-0 left-0 w-full rounded-full origin-top bg-gold"
              style={{
                height: timelineBarHeight,
                backgroundColor: "var(--color-accent)",
                scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
              }}
            ></motion.div>
          </div>
        </div>

        {/* Timeline content */}
        <div className="">
          {timelineData.map((item, index) => {
            const isActive = activeSection >= item.id;
            const isLast = index === timelineData.length - 1;

            return (
              <div
                key={item.id}
                ref={(el) => (sectionRefs.current[item.id] = el)}
                data-index={item.id}
                className={`relative mb-24 flex flex-col md:flex-row  ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Circle marker */}

                <div
                  className="absolute md:left-1/2 circle-marker translate-x-[calc(-50%+0.1rem)] md:translate-x-[calc(-50%)] flex items-center justify-center"
                  ref={isLast ? lastMarkerRef : null}
                >
                  <motion.div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      isActive ? "border-gold" : "border-gray-500"
                    }`}
                    animate={{
                      backgroundColor: "black",
                      borderColor: isActive ? "var(--color-accent)" : "#6b7280",
                      scale: isActive ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.completed && (
                      <svg
                        className="w-3 h-3 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`md:w-1/2 ml-6 md:flex md:flex-col  ${
                    index % 2 === 0 ? "md:ml-0" : "md:mr-0  md:text-right"
                  }`}
                >
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.5,
                      y: isActive ? 0 : 10,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <p
                      className={`${
                        index % 2 === 0
                          ? "md:translate-x-[calc(100%+1.5rem)] md:justify-self-end"
                          : "md:-translate-x-[calc(100%+1.5rem)] md:justify-self-start"
                      }  text-gray-400  text-sm`}
                    >
                      {item.date}
                    </p>
                    <div
                      className={`flex flex-row gap-8 mb-2 ${
                        index % 2 === 0
                          ? ""
                          : "md:justify-self-end flex-row-reverse"
                      }`}
                    >
                      <h3 className={`text-2xl font-bold text-white`}>
                        {item.title}
                      </h3>
                      {item.completed && (
                        <div className="flex flex-row justify-center items-center gap-1 text-gold">
                          <LeaveComponent />
                          <p className="">SOLD OUT </p>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
