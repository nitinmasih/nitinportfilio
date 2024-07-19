import React, { useRef } from "react";
import "../styles/workingbenefits.scss";
import { useTransform, useScroll, motion } from "framer-motion";

const WorkingBenefits = () => {
  const headingRef = useRef(null);

  const { scrollYProgress: headingScrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start 0.9", "start 0.5"],
  });

  const transformX = useTransform(headingScrollYProgress, [0, 1], [-380, 0]);

  const transition = {
    duration: 0.5,
    ease: "easeOut",
  };

  const numberWorkInfo = [
    {
      h1: 1,
      h2: "Experience",
      p: "With years of hands-on experience in [Your Industry], I bring a wealth of knowledge and expertise to every project",
    },
    {
      h1: 2,
      h2: "User-Centric",
      p: "My design philosophy revolves around understanding users' needs, ensuring that every project is tailored for an exceptional user experience.",
    },
    {
      h1: 3,
      h2: "Innovative",
      p: "I thrive on challenges, constantly seeking innovative solutions that set your project apart in a crowded digital landscape.",
    },
    {
      h1: 4,
      h2: "Design",
      p: "With years of hands-on experience, meticulous attention to detail is at the core of my design process, ensuring a polished and flawless end product.",
    },
  ];

  return (
    <div className="work-benefit">
      <motion.div
        className="work-left-aside"
        ref={headingRef}
        style={{ x: transformX, transition }}
      >
        <div className="heading">
          <h1>WHY WORK</h1>
          <h1 style={{ fontWeight: "bolder" }}>WITH ME</h1>
        </div>
        <p>
          In the world of design, collaboration is key, and here's why
          partnering with me is the right choice
        </p>
      </motion.div>
      <div className="work-right-aside">
        {numberWorkInfo.map((obj, i) => {
          const start = i / numberWorkInfo.length;
          const end = start + 1 / numberWorkInfo.length;
          return <NumberWorkInfo key={i} range={[start, end]} obj={obj} />;
        })}
      </div>
    </div>
  );
};

export default WorkingBenefits;

const NumberWorkInfo = ({ obj, range }) => {
  const workInfoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: workInfoRef,
    offset: ["start 0.9", "start 0.7"],
  });

  const opacity = useTransform(scrollYProgress, range, [0, 1]);
  const translateY = useTransform(scrollYProgress, range, [50, 0]);

  return (
    <motion.div
      className="number-work-info"
      style={{ opacity, translateY }}
      ref={workInfoRef}
    >
      <div className="number">
        <h1 style={{ fontSize: "36px" }}>{obj.h1}</h1>
      </div>
      <div className="work-info">
        <div className="title">
          <h2> {obj.h2}</h2>
        </div>
        <hr />
        <p>{obj.p}</p>
      </div>
    </motion.div>
  );
};
