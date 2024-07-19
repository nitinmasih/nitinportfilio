import React from "react";
import About from "../components/About"
import Info from "../components/Info";
import OurWorkAnimation from "../components/OurWorkAnimation";
import Experience from "../components/Experience";
import WorkingBenefits from "../components/WorkingBenefits";
import ContactInfo from "../components/ContactInfo";
import TrustedCollaborators from "../components/TrustedCollaborators";

const Home = () => {
  return (
    <div>
      <About />
      <Info />
      <OurWorkAnimation />
      <Experience />
      <WorkingBenefits />
      <TrustedCollaborators />
      <ContactInfo />
    </div>
  );
};

export default Home;
