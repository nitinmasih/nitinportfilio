import React, { useState, useEffect } from "react";
import About from "../components/About";
import Info from "../components/Info";
import OurWorkAnimation from "../components/OurWorkAnimation";
import Experience from "../components/Experience";
import WorkingBenefits from "../components/WorkingBenefits";
import ContactInfo from "../components/ContactInfo";
import TrustedCollaborators from "../components/TrustedCollaborators";

const Home = () => {
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

  return (
    <div>
      <About />
      <Info />
      <OurWorkAnimation />
      {(windowWidth < 450 || windowWidth > 1200) && <Experience />}
      <WorkingBenefits />
      <TrustedCollaborators />
      <ContactInfo />
    </div>
  );
};

export default Home;
