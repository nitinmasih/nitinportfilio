import React, { useEffect } from "react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import "../styles/contactinfo.scss";

const ContactInfo = () => {
  const controls = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    let timeoutId;
    const scrollHandler = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        controls.start({ opacity: 1, y: 0 });
      }, 100); // Debounce delay
    };

    const unsubscribe = scrollY.onChange(() => {
      scrollHandler();
    });

    // Ensure cleanup on unmount
    return () => {
      clearTimeout(timeoutId);
      unsubscribe();
    };
  }, [controls, scrollY]);

  return (
    <div className="contact-info">
      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1>
          LET'S<strong> CONNECT</strong>
        </h1>
      </motion.div>
      <motion.div
        className="contact-image"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      >
        <div className="left-aside">
          <hr />
        </div>
        <div className="right-aside">
          <p>Contact</p>
        </div>
      </motion.div>
      <motion.footer
        className="contact-footer"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
      >
        <div className="footer-left-aside">
          <p>We collaborate with ambitious brands and people worldwide.</p>
          <p>
            Get in touch to find out more about digital experiences to
            effectively reach and engage customers and target audiences.
          </p>
        </div>
        <div className="footer-right-aside">
          <p>hello@protify.com</p>
          <p>123 Design Street, Suite 101 Cityville, Province +1 (555) 123-4567</p>
        </div>
      </motion.footer>
      <motion.p
        className="created-by"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
      >
        Created by Nitin
      </motion.p>
    </div>
  );
};

export default ContactInfo;
