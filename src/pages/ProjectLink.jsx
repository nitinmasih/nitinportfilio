import React from "react";
import "../styles/projectlink.scss";
import ContactInfo from "../components/ContactInfo";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import TrustedCollaborators from "../components/TrustedCollaborators";
const ProjectLink = () => {
  const templateImages = [
    {
      img: "images/project01.webp",
      TYPE: "Software",
      name: "FlowBord",
    },
    {
      img: "images/project02.avif",
      TYPE: "AI",
      name: "Nexus AI",
    },
    {
      img: "images/project03.webp",
      TYPE: "Agency",
      name: "Agengify",
    },
    {
      img: "images/project04.avif",
      TYPE: "Software",
      name: "Flexify",
    },
    {
      img: "images/project05.webp",
      TYPE: "Software",
      name: "Taskify",
    },
    {
      img: "images/project06.webp",
      TYPE: "Inspiration",
      name: "Daily Hub",
    },
  ];
  return (
    <div className="projects">
      <div className="project-header">
        <div className="project-heading">
          <div>
            <p>DIGITAL</p>
            <p style={{ fontWeight: "bold" }}>VISION</p>
          </div>
          <p
            style={{
              fontSize: "18px",
              color: "#ADA89F",
            }}
          >
            The Fusion of Art and Tech
          </p>
        </div>
      </div>
      <div className="project-templates">
        {templateImages.map((obj) => {
          return (
            <div className="project-temp">
              <img src={obj.img} alt="" />
              <div className="name-type">
                <div className="name" style={{ fontSize: "20px" }}>
                  {obj.name}
                </div>
                <div>
                  <span style={{ color: "goldenrod", marginRight: "20px" }}>
                    TYPE
                  </span>
                  <span style={{ fontSize: "20px" }}>{obj.TYPE}</span>{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
         
        <TrustedCollaborators/>
         <FrequentlyAskedQuestions/>
         <ContactInfo/> 
    </div>
   
  );
};

export default ProjectLink;
