  import React from "react";
  import { motion } from "framer-motion";
  import "../styles/about.scss";

  const About = () => {
    return (
      <div className="about">
        <motion.div 
          className="about-hero"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="about-info">
            <div className="title-header">
              <motion.h5 
                className="title"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Elevating Ideas, Creating Experiences
              </motion.h5>
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Web design & custom Framer development
              </motion.h1>
              <motion.p 
                className="info-about"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                I collaborate with early-stage startups to craft visually stunning
                and functional websites using Framer.
              </motion.p>
            </div>
          </div>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Contact
          </motion.button>
        </motion.div>

        <motion.div 
          className="image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <img src="images/portfo.jpg" alt="Profile" />
        </motion.div>
      </div>
    );
  };

  export default About;
  