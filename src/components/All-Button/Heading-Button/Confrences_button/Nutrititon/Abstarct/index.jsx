import Header from "../../../../../Header/MainHeader/Header.jsx";
import Footer from "../../../../../Footer/Footer.jsx";
import "./index.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaClipboardList,
  FaUsers,
  FaFileAlt,
  FaLaptopCode,
} from "react-icons/fa";

const forums = [
  { name: "Keynote Forum", icon: <FaChalkboardTeacher /> },
  { name: "Mini-Plenary Sessions", icon: <FaClipboardList /> },
  { name: "Distinguished Speakers Forum", icon: <FaUsers /> },
  { name: "Student Forum", icon: <FaUserGraduate /> },
  { name: "Poster Sessions", icon: <FaFileAlt /> },
  { name: "Young Researchers Forum", icon: <FaUsers /> },
  { name: "Educational Workshops", icon: <FaLaptopCode /> },
  { name: "Research Workshop", icon: <FaClipboardList /> },
  { name: "Corporate Workshop", icon: <FaUsers /> },
  { name: "Highlights Of The Day Sessions", icon: <FaClipboardList /> },
  { name: "Meet The Professor", icon: <FaUsers /> },
  { name: "Educational Sessions", icon: <FaLaptopCode /> },
  { name: "Training Programs", icon: <FaClipboardList /> },
];

function NutritionAbstractTemplate() {
  return (
    <div>
      <div style={{ backgroundColor: "var(--black)" }}>
        <Header />
      </div>

      <div className="abst-template-updated-hero-container">
        <div className="abst-template-updated-overlay">
          <div className="abst-template-updated-text-container">
            <h1 className="abst-template-updated-heading">
              Pediatrics Nutrition and Food Security Abstract Submission Form
            </h1>
            <p className="abst-template-updated-subheading">
              Feel free to let me know if there’s anything else you need help
              with!
            </p>
            <p className="abst-template-updated-sub-heading">
              Abstract Template
            </p>
            <a
              href="/Sample_Abstract_Template.docx"
              download
              className="abst-template-updated-download-button"
            >
              Download Here
            </a>
          </div>
        </div>
      </div>

      <div className="abst-template-updated-main-content">
        <div className="abst-template-updated-form-container">
          <div className="abst-template-updated-form">
            <h2>Submit Abstract</h2>

            <form>
              <label className="abst-template-updated-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="abst-template-updated-input"
                required
              />

              <label className="abst-template-updated-label">Email</label>
              <input
                type="email"
                name="email"
                className="abst-template-updated-input"
                required
              />

              <label className="abst-template-updated-label">
                Phone Number
              </label>
              <PhoneInput
                country={"us"}
                className="abst-template-updated-input"
              />

              <label className="abst-template-updated-label">
                Abstract Title
              </label>
              <input
                type="text"
                name="abstractTitle"
                className="abst-template-updated-input"
                required
              />

              <label className="abst-template-updated-label">Topic</label>
              <select
                name="topic"
                className="abst-template-updated-select"
                required
              >
                <option value="">Select Topic</option>
                <option value="neonatology">Neonatology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="child-care">Child Care</option>
                <option value="healthcare">Healthcare</option>
              </select>

              <button type="submit" className="abst-template-updated-button">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="abst-template-updated-forum-section">
          <h2 className="abst-template-updated-forum-heading">
            Explore Our Forums
          </h2>
          <div className="abst-template-updated-forum-container">
            {forums.map((forum) => (
              <div
                key={forum.name}
                className="abst-template-updated-forum-card"
              >
                <div className="abst-template-updated-icon">{forum.icon}</div>
                <div className="abst-template-updated-forum-name">
                  {forum.name}
                </div>
              </div>
            ))}
          </div>
          <a
            href="/publications"
            className="abst-template-updated-publications-link"
          >
            View Publications
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default NutritionAbstractTemplate;
