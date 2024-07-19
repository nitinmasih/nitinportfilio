import React, { useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import "../styles/trustedcollaborators.scss";

const imgObj = [
  {
    img: "images/collab01.png",
  },
  {
    img: "images/collab02.png",
  },
  {
    img: "images/collab03.jpeg",
  },
  {
    img: "images/collab04.png",
  },
  {
    img: "images/collab05.jpeg",
  },
  {
    img: "images/collab06.png",
  },
];

const TrustedCollaborators = () => {
  return (
    <div className="trusted-collab">
      <div className="heading">
        <h1>TRUSTED</h1>
        <h1>
          <strong>COLLABORATORS</strong>
        </h1>
      </div>
      <div className="collaborator-logo">
        {imgObj.map((obj, i) => {
          const start = i / imgObj.length;
          const end = start + 1 / imgObj.length;
          return (
            <div className="collaborator-item" key={i}>
              <Images obj={obj} range={[start, end]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustedCollaborators;

const Images = ({ obj, range }) => {
  const imageInfoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageInfoRef,
    offset: ["start 0.9", "start 0.6"],
  });

  const opacity = useTransform(scrollYProgress, range, [0, 1]);
  const translateY = useTransform(scrollYProgress, range, [300, 0]);

  return (
    <motion.div
      style={{ opacity, translateY }}
      ref={imageInfoRef}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <img src={obj.img} alt="Collaborator logo" />
    </motion.div>
  );
};
