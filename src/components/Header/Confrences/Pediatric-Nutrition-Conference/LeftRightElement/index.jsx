import React from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import "./index.css";

function Second2() {
  const leftItems = [
    "Innovations in Pediatric Nutritional Sciences",
    "Impact of Early Nutrition on Long-Term Health",
    "Micronutrient Deficiencies in Pediatric Populations",
    "Childhood Obesity: Prevention and Management Strategies",
    "Pediatric Malnutrition: Diagnosis, Treatment, and Prevention",
  ];

  const rightItems = [
    "Nutrition Education and Behavioral Change in Children and Families",
    "Sustainable Approaches to Pediatric Nutrition",
    "Pediatric Nutrition and Infectious Diseases",
    "Role of Technology in Enhancing Pediatric Nutrition and Food Security",
  ];

  return (
    <div>
      <div className="MainHead">
        <div className="Left">
          {leftItems.map((item, index) => (
            <div className="LeftIn" key={index}>
              <span>
                <CiMicrophoneOn />
              </span>
              <span className="LeftIn1">{item}</span>
            </div>
          ))}
        </div>
        <div className="right">
          {rightItems.map((item, index) => (
            <div className="LeftIn" key={index}>
              <span>
                <CiMicrophoneOn />
              </span>
              <span className="LeftIn1">{item}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Button at the bottom */}
      <div className="button-container">
        <button className="bottom-button">View All Scintific Session</button>
      </div>
      <br />
    </div>
  );
}

export default Second2;
