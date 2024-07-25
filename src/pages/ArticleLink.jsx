import React from "react";
import "../styles/articlelink.scss";
import { Link } from "react-router-dom";
import ContactInfo from "../components/ContactInfo";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
const ArticleLink = () => {
  return (
    <div className="article-link">
      <div className="article-hero">
        <div className="article-title">
          <p className="article-header">Articles</p>
          <p className="article-slogan">The Fusion of Art and Tech.</p>
        </div>
      </div>
      <div className="article-info">
        <div className="article-one">
          <div className="date">Nov22,2022</div>
          <div className="article-about">User-Centric Design</div>
          <div className="article-content">
            <p className="article-content-heading">
              THE ART OF USER-CENTRIC DESIGN
            </p>
            <p className="article-theme">
              In the ever-evolving landscape of design, the concept of
              user-centricity stands as the cornerstone.
            </p>
            <Link to={"/article/one"}>Read Article </Link>
          </div>
        </div>
        <div className="article-two">
          <div className="date">May,2023</div>
          <div className="article-about">UI/UX Design Trends</div>
          <div className="article-content">
            <p className="article-content-heading">
              NAVIGATING THE TRENDS: UI/UX IN 2023
            </p>
            <p className="article-theme">
              In the dynamic realm of UI/UX design, staying ahead of the curve
              is crucial.
            </p>
            <Link to={"/article/two"}>Read Article </Link>
          </div>
        </div>
        <div className="article-three">
          <div className="date">feb,2024</div>
          <div className="article-about">Product Design</div>
          <div className="article-content">
            <p className="article-content-heading">
              CRAFTING AN EFFECTIVE PRODUCT DESIGN STRATEGY
            </p>
            <p className="article-theme">
              In the realm of product design, success hinges on a well-crafted
              strategy that seamlessly combines creativity.
            </p>
            <Link to={"/article/three"}>Read Article </Link>
          </div>
        </div>
      </div>
      <FrequentlyAskedQuestions />
      <ContactInfo />
    </div>
  );
};

export default ArticleLink;
