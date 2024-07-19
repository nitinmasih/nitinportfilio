import React from "react";
import "../styles/aboutlink.scss";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import TrustedCollaborators from "../components/TrustedCollaborators";

// import { useScroll,useTransform ,motion} from "framer-motion";

const AboutLink = () => {
  return (
    <div className="about-link">
      <div className="greeting-profile-image">
        <div className="greeting">
          <div className="greet-heading">
            <p className="design">
              Designing <strong>Tomorrow</strong>
            </p>
          </div>
          <div className="greet-message">
            <p>
              Greetings! I'm Nitin, a passionate product designer based in
              India. With a love for innovation and an eye for detail, I
              specialize in creating digital experiences that captivate and
              inspire.
            </p>
          </div>
        </div>

        <div className="image">
          <img src="images/about.avif" alt="" />
        </div>
      </div>
      <div className="about-experience">
        <div className="images">
          <img src="images/about01.webp" alt="" />
          <img src="images/about02.avif" alt="" />
        </div>
        <div className="about-web-journey">
          <p>
            My creative journey started at Lucknow where I studied for the past
            years. I’ve been able to work with talented people, especially
            across the India. Firstly, I joined Upperquad in Bhopal. Then, I
            worked with the team of tech-lead in India. Lately, I put my skills
            of motion design into practice i my projects.
          </p>
          <div className="project-experience">
            <div className="project-info">
              <h1>20+</h1>
              <hr />
              <p>Projects Completed</p>
            </div>
            <div className="experience-year">
              <div className="years">
                <h1>3+</h1>
                <hr />
                <p>Years Of Experince</p>
              </div>
              <div className="grow-rate">
                <h1>188%</h1>
                <hr />
                <p>Growing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrustedCollaborators/>
      <div><FrequentlyAskedQuestions/></div>
    </div>
  );
};

export default AboutLink;
