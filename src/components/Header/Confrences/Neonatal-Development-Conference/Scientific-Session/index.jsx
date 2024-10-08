import { CiMicrophoneOn } from "react-icons/ci";
import "./index.css";

function ScientificSession3() {
  const leftSessions = [
    "Pediatrics and Neonatal Intensive Care",
    "Severe, complicated, or recurrent infections",
    "Infections on immune modulating therapy",
    "Pediatric Infectious Diseases",
    "Advances in Vaccination Strategies for Pediatric Populations",
  ];

  const rightSessions = [
    "Respiratory infections",
    "Pediatric Skin Infections",
    "MRSA infection, Lyme disease",
    "The Role of Global Health Initiatives in Reducing",
    "Pediatric Infectious Diseases",
    "Impact of Climate Change on Pediatric Infectious Diseases",
  ];

  return (
    <div className="conference-session-wrapper">
      <center>
        <h2 className="conference-title">Scientific Session</h2>
      </center>
      <center>
        <p className="conference-description">
          Below are the scientific sessions of the conference
        </p>
      </center>
      <div className="conference-session-container">
        <div className="conference-session-left">
          {leftSessions.map((item, index) => (
            <div className="conference-session-item" key={index}>
              <span className="session-icon">
                <CiMicrophoneOn />
              </span>
              <span className="session-title">{item}</span>
            </div>
          ))}
        </div>
        <div className="conference-session-right">
          {rightSessions.map((item, index) => (
            <div className="conference-session-item" key={index}>
              <span className="session-icon">
                <CiMicrophoneOn />
              </span>
              <span className="session-title">{item}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Button at the bottom */}
      <div className="conference-button-container">
        <button className="view-all-sessions-btn">
          View All Scientific Sessions
        </button>
      </div>
      <br />
    </div>
  );
}

export default ScientificSession3;
