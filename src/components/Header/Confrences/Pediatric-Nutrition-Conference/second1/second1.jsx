import React, { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import "./second1.css";

// Accordion component
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ground-accordion-item">
      <button
        className="ground-accordion-title"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaMicrophone /> : <FaMicrophoneSlash />} {title}
      </button>
      {isOpen && <div className="ground-accordion-content">{content}</div>}
    </div>
  );
};

function Second1() {
  const leftItems = [
    {
      title: "Pediatrics",
      content:
        "Pediatrics is the medical field that focuses on the health of babies, children, and teenagers. Pediatricians are doctors who treat common illnesses, help prevent diseases with vaccines, and make sure kids are growing and developing properly. They also give advice to families on things like nutrition, safety, and mental health. Pediatricians play a key role in helping kids stay healthy and grow up strong.",
    },
    //... other leftItems
  ];

  const rightItems = [
    {
      title: "Pediatric Infectious Diseases",
      content:
        "Pediatric infectious diseases encompass a variety of infections impacting children, from prevalent ailments like influenza to severe illnesses such as meningitis and pneumonia.",
    },
    //... other rightItems
  ];

  return (
    <div className="ground-app">
      <h1 className="ground-main-title">
        Pediatrics Conferences Scientific Sessions
      </h1>
      <div className="ground-part">
        <div className="ground-column ground-left">
          {leftItems.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
        <div className="ground-column ground-right">
          {rightItems.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Second1;
