import { CiMicrophoneOn } from "react-icons/ci";
import "./index.css";

function ScientificSession() {
  const leftSessions = [
    "Pediatrics and Neonatal Intensive Care",
    " Severe, complicated, or recurrent infections",
    "Infections on immune modulating therapy",
    "Pediatric Infectious Diseases",
    "Advances in Vaccination Strategies for Pediatric Populations",
  ];

  const rightSessions = [
    " Respiratory infections",
    "Pediatric Skin Infections",
    "MRSA infection, Lyme disease",
    "The Role of Global Health Initiatives in Reducing ",
    "Pediatric Infectious Diseases",
    "Impact of Climate Change on Pediatric Infectious Diseases",
  ];

  return (
    <div className="scientific-session-wrapper">
      <center>
        <h2 className="scientific-title">Scientific Session</h2>
      </center>
      <center>
        <p className="scientific-description">
          Below are the scientific sessions of the conference
        </p>
      </center>
      <div className="scientific-session-container">
        <div className="scientific-session-left">
          {leftSessions.map((item, index) => (
            <div className="scientific-session-item" key={index}>
              <span className="session-icon">
                <CiMicrophoneOn />
              </span>
              <span className="session-title">{item}</span>
            </div>
          ))}
        </div>
        <div className="scientific-session-right">
          {rightSessions.map((item, index) => (
            <div className="scientific-session-item" key={index}>
              <span className="session-icon">
                <CiMicrophoneOn />
              </span>
              <span className="session-title">{item}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Button at the bottom */}
      <div className="scientific-button-container">
        <button className="view-all-sessions-button">
          View All Scientific Sessions
        </button>
      </div>
      <br />
    </div>
  );
}

export default ScientificSession;
