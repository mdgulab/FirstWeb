import Header from "../../../../../Header/MainHeader/Header.jsx";
import Footer from "../../../../../Footer/Footer.jsx";
import "/src/components/All-Button/Heading-Button/Confrences_button/Neonatology/Abstarct/index.css";
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
function InfectionAbstractTemplate() {
  return (
    <div>
      <div style={{ backgroundColor: "var(--black)" }}>
        <Header />
      </div>
      <div className="abst-template-hero-container">
        <div className="abst-template-overlay">
          <div className="abst-template-text-container">
            <h1 className="abst-template-heading">
              Pediatric Infectious Diseases Abstract Submission Form
            </h1>
            <p className="abst-template-SubHeading">
              Feel free to let me know if there’s anything else you need help
              with!
            </p>
            <p className="abst-template-sub-heading">Abstract Template</p>
            <a
              href="/Sample_Abstract_Template.docx"
              download
              className="abst-template-download-button"
            >
              Download Here
            </a>
          </div>
        </div>
      </div>
      <div className="abst-template-main-content">
        <div className="abst-template-form-container">
          <form className="abst-template-form">
            <label className="abst-template-label">
              Full Name
              <input
                type="text"
                name="fullName"
                className="abst-template-input"
                required
              />
            </label>
            <label className="abst-template-label">
              Phone Number
              <PhoneInput
                country={"in"}
                value={""}
                onChange={(phone) => console.log(phone)}
                inputStyle={styles.phoneInput3}
              />
            </label>
            <label className="abst-template-label">
              Your Email
              <input
                type="email"
                name="email"
                className="abst-template-input"
                required
              />
            </label>
            <label className="abst-template-label">
              Abstract Session
              <select
                name="abstractSession"
                className="abst-template-select"
                required
              >
                <option value="">—Please choose an option—</option>
                <option value=" Innovations in Pediatric Nutritional Sciences">
                  Innovations in Pediatric Nutritional Sciences
                </option>
                <option value="Advancements in Neonatal Intensive Care: Innovations and Best Practic">
                  Advancements in Neonatal Intensive Care: Innovations and Best
                  Practic
                </option>
                <option value="Neonatal Nutrition: Strategies for Optimal Growth and Development">
                  Neonatal Nutrition: Strategies for Optimal Growth and
                  Development
                </option>
                <option value="Genetic Disorders in Pediatrics: Advances in Diagnosis and Treatment">
                  Genetic Disorders in Pediatrics: Advances in Diagnosis and
                  Treatment
                </option>
                <option value="Childhood Obesity: Prevention and Management Strategies">
                  Childhood Obesity: Prevention and Management Strategies
                </option>
                <option value="Neonatal Resuscitation: Techniques and Protocols">
                  Neonatal Resuscitation: Techniques and Protocols
                </option>
                <option value="Preterm Birth: Management and Outcomes">
                  Preterm Birth: Management and Outcomes
                </option>
                <option value="Integrating Nutrition into Pediatric Oncology Care">
                  Integrating Nutrition into Pediatric Oncology Care
                </option>
                <option value="Ethical Considerations in Pediatric Nutrition Research">
                  Ethical Considerations in Pediatric Nutrition Research
                </option>
                <option value="Technological Advances in Pediatric Nutrition">
                  Technological Advances in Pediatric Nutrition
                </option>
                <option value="Pediatric Nutrition and Infectious Diseases">
                  Pediatric Nutrition and Infectious Diseases
                </option>
                <option value="Pediatric Surgical Extremities">
                  Pediatric Surgical Extremities
                </option>
                <option value=" Neonatal Pain Management: Approaches and Protocols">
                  Neonatal Pain Management: Approaches and Protocols
                </option>
              </select>
            </label>

            <label className="abst-template-label">
              Abstract Type
              <select
                name="abstractType"
                className="abst-template-select"
                required
              >
                <option value="">—Please choose an option—</option>
                <option value="Keynote Presentation">
                  Keynote Presentation
                </option>
                <option value="Oral Presentation">Oral Presentation</option>
                <option value="E-Poster">E-Poster</option>
              </select>
            </label>
            <label className="abst-template-label">
              File Upload
              <input
                type="file"
                name="fileUpload"
                className="abst-template-input"
                required
              />
            </label>
            <button type="submit" className="abst-template-button">
              Submit
            </button>
          </form>
        </div>

        <div className="abst-template-forum-section">
          <h2 className="abst-template-forum-heading">
            <u>Abstract Forums</u>
          </h2>
          <div className="abst-template-forum-container">
            {forums.map((forum, index) => (
              <div key={index} className="abst-template-forum-card">
                <div className="abst-template-icon">{forum.icon}</div>
                <div className="abst-template-forum-name">{forum.name}</div>
              </div>
            ))}
          </div>
          <a href="#" className="abst-template-publications-link">
            Journal Publications
            <br />
            Go to Publications Page.
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  phoneInput3: {
    width: "100%",
    padding: "22px",
    paddingLeft: "40px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginBottom: "15px",
  },
};

export default InfectionAbstractTemplate;
