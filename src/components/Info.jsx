import React, { useRef } from "react";
import "../styles/info.scss";
import { useScroll, motion, useTransform } from "framer-motion";

const Info = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
  offset: ["start 0.9", "start 0.5"],
  });

  const para =
    "Hello, I'm Nitin, a passionate Product Designer based in India. With a creative spirit and an eye for detail, I specialize in crafting user-centric and visually appealing digital experiences.";

  const words = para.split(" ");
  
 

  return (
    <div className="information" ref={element}>
      <div className="info">
        <h2>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </h2>
      </div>
    </div>
  );
};

export default Info;

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <motion.span className="word" style={{ opacity }} transition={{duration:3 }}>
      {children}{" "}
    </motion.span>
  );
};
