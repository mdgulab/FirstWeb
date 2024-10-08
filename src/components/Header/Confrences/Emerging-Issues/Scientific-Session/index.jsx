import { CiMicrophoneOn } from "react-icons/ci";
import "./index.css";

function Seientific() {
  const leftItems = [
    "Pediatrics and Neonatal Intensive Care",
    "Clinical Pediatrics",
    "Neonatology and Perinatology",
    "Clinical & Medical Case Reports",
    "Chronic Disease Management",
  ];

  const rightItems = [
    "Pediatric Dermatology",
    "Pediatric Emergency Medicine and Critical Care",
    "Pediatric Cardiology",
    "Pediatric Nutrition",
    "Future of Pediatric Healthcare",
  ];

  return (
    <div>
      <center>
        <h2 className="Titlehead">Scientific Session</h2>
      </center>
      <center>
        <p>Below are the scientific sessions of the conference</p>
      </center>
      <div className="session-container">
        <div className="session-left">
          {leftItems.map((item, index) => (
            <div className="session-item" key={index}>
              <span>
                <CiMicrophoneOn />
              </span>
              <span className="session-title">{item}</span>
            </div>
          ))}
        </div>
        <div className="session-right">
          {rightItems.map((item, index) => (
            <div className="session-item" key={index}>
              <span>
                <CiMicrophoneOn />
              </span>
              <span className="session-title">{item}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Button at the bottom */}
      <div className="button-container">
        <button className="view-all-button">
          View All Scientific Sessions
        </button>
      </div>
      <br />
    </div>
  );
}

export default Seientific;
