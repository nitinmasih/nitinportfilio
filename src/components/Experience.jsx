import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/experience.scss";

const Experience = () => {
  const templateRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: templateRef,
    offset: ["start 0.9", "start 0.4"],
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [
    {
      img: "images/exp-img.avif",
      name: "TASKIFY",
      type: "SOFTWARE",
      description:
        "Taskify's integration with Discord fosters effective communication and collaboration within online communities.",
      year: "2K20",
    },
    {
      img: "images/exp-img01.avif",
      name: "CODING",
      type: "AGENCY",
      description: "Description for CODING.",
      year: "2K21",
    },
    {
      img: "images/exp-img02.avif",
      name: "NEXUS AI",
      type: "AI",
      description: "Description for NEXUS AI.",
      year: "2K22",
    },
    {
      img: "images/exp-img03.avif",
      name: "DAILYHUB",
      type: "INSPIRATION",
      description: "Description for DAILYHUB.",
      year: "2K23",
    },
    {
      img: "images/exp-img04.avif",
      name: "FLEXIFY",
      type: "SOFTWARE",
      description: "Description for FLEXIFY.",
      year: "2K24",
    },
    {
      img: "images/exp-img05.avif",
      name: "DAILYHUB",
      type: "INSPIRATION",
      description: "Description for DAILYHUB.",
      year: "2K25",
    },
    {
      img: "images/exp-img06.avif",
      name: "FLEXIFY",
      type: "SOFTWARE",
      description: "Description for DAILYHUB.",
      year: "2K25",
    },
  ];

  return (
    <div className="experience">
      <div className="templates-info" ref={templateRef}>
        {images.map((item, index) => (
          <div className="template-image-data" key={index}>
            <Template progress={scrollYProgress} item={item} />
            {windowWidth > 770 && (
              <div className="info" >
                <div className="year">
                  <p>{item.year}</p>
                </div>
                <div className="dash"></div>
                <div className="info-text">{item.description}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

const Template = ({ item, progress }) => {
  const opacity = useTransform(progress, [0, 1], [0, 1]);
  const scale = useTransform(progress, [0, 1], [0.5, 1]);

  return (
    <motion.div className="templates" style={{ opacity, scale }}>
      <div className="template">
        <img src={item.img} alt={item.name} />
        <div className="template-label">
          <p>{item.name}</p>
          <p>
            <span>TYPE</span> {item.type}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
