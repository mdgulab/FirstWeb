import { CiMicrophoneOn } from "react-icons/ci";
import "./index.css";

function ScientificSession2() {
  const leftSessions = [
    "Advancements in Pediatric Genomic Sequencing Technologies",
    "Genetic Basis of Rare Pediatric Diseases",
    "Precision Medicine in Pediatric Oncology",
    "Ethical Considerations in Pediatric Genomic Testing",
  ];

  const rightSessions = [
    "Integrating Genomic Data into Clinical Practice",
    "Genomic Biomarkers for Early Disease Detection",
    "Advances in Whole Exome and Whole Genome Sequencing",
    "TGenetic Counseling and Patient Support in Pediatrics",
  ];

  return (
    <div className="infectious-scientific-session-wrapper">
      <center>
        <h2 className="infectious-scientific-title">Scientific Session</h2>
      </center>
      <center>
        <p className="infectious-scientific-description">
          Below are the scientific sessions of the conference
        </p>
      </center>
      <div className="infectious-scientific-session-container">
        <div className="infectious-scientific-session-left">
          {leftSessions.map((item, index) => (
            <div className="infectious-scientific-session-item" key={index}>
              <span className="infectious-session-icon">
                <CiMicrophoneOn />
              </span>
              <span className="infectious-session-title">{item}</span>
            </div>
          ))}
        </div>
        <div className="infectious-scientific-session-right">
          {rightSessions.map((item, index) => (
            <div className="infectious-scientific-session-item" key={index}>
              <span className="infectious-session-icon">
                <CiMicrophoneOn />
              </span>
              <span className="infectious-session-title">{item}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Button at the bottom */}
      <div className="infectious-scientific-button-container">
        <button className="infectious-view-all-sessions-button">
          View All Scientific Sessions
        </button>
      </div>
      <br />
    </div>
  );
}

export default ScientificSession2;
