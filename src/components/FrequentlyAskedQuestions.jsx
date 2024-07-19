import React, {  useState } from "react";
import "../styles/FAQ.scss";
// import { transform } from "framer-motion";
const quesAns = [
  {
    ques: "What services do you offer?",
    ans: "Specializing in UI/UX design, web development, and branding.",
    hr: <hr />,
  },
  {
    ques: "How can I contact you for a project?",
    ans: "Use the contact form on my site for prompt collaboration.",
    hr: <hr />,
  },
  {
    ques: "What sets your design approach apart?",
    ans: "Creativity, user-centricity, and functionality drive my designs.",
    hr: <hr />,
  },
  {
    ques: "Can you work on remote projects?",
    ans: "Absolutely! I collaborate globally using digital tools",
    hr: <hr />,
  },
  {
    ques: "How do you handle feedback?",
    ans: "Feedback is welcomed and integrated throughout the design process.",
    hr: <hr />,
  },
  {
    ques: "Can I see examples of your work?",
    ans: "Explore my diverse portfolio on the website or request references.",
    hr: <hr />,
  },
];
const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="fa-questions">
      <div className="faq-heading">
        <h1>Frequently ASKED <strong>QUESTIONS</strong></h1>
        
      </div>
      <div className="quest-ans">
        {quesAns.map((obj, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index}>
              <div className="question-answer">
                <div
                  className="question-icon"
                  onClick={() => handleClick(index)}
                >
                  <div className="question">
                    <h3>{obj.ques}</h3>
                  </div>
                  <div className="open-icon" onClick={handleClick}>
                    <div className="horizontal"></div>
                    <div className={`vertical ${isOpen ? "open" : ""}`}></div>
                  </div>
                </div>

                <div className={`answer ${isOpen ? "open" : ""}`}>
                  <p>{obj.ans}</p>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
