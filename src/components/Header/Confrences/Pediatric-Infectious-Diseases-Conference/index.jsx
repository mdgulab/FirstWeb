import "./index.css"; // Importing the new CSS file
import Footer from "../../../Footer/Footer";
import Header from "../../MainHeader/Header";
import ScientificSession from "./Scientific-Session";
// import Second2 from "../Pediatric-Nutrition-Conference/second2";
import WelcomeMessage from "../Pediatrics-Neonatology-Conference/WelcomeMessage";
import MediaPartners from "../Pediatric-Nutrition-Conference/mediaPartner";
import Recommended from "../Pediatric-Nutrition-Conference/Recommended-conf";
import Location3 from "./Location3";
import { Link } from "react-router-dom";

function Infectious() {
  return (
    <div>
      <Header />
      <div className="conference-container">
        {/* Conference Header */}
        <header className="conference-header-wrapper">
          <h2 className="conference-subheading">International Conference on</h2>
          <h1 className="conference-main-title">
            Global Perspectives in Pediatric Infectious Diseases
          </h1>
          <p className="conference-theme-statement">
            Theme: Integrating Global Strategies for Better Child Health.
          </p>
          <p className="conference-dates-location">
            September 15-16, 2025 | Rome, Italy
          </p>

          {/* Call to Action Buttons */}
          <div className="conference-action-buttons">
            <button className="conference-btn register-now-btn">
              Go to Register Now
            </button>
            <Link to="/InfectionContactForm">
              <button className="conference-btn download-brochure-btn">
                Brochure Download
              </button>
            </Link>
            <Link to="/InfectionAbstractTemplate">
              <button className="conference-btn submit-abstract-btn">
                Abstract Submission
              </button>
            </Link>
            <a
              href="/Pediatrics-and-Neonatology-pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="conference-btn tentative-program-btn">
                Tentative Program
              </button>
            </a>
            <Link to="/Org">
              <button className="conference-btn organizing-committee-btn">
                Organizing Committee
              </button>
            </Link>
          </div>
        </header>

        {/* Conference Info Section */}
        <div className="conference-details-section">
          <div className="conference-description">
            <h3 className="conference-about-title">
              About Pediatric Infectious Diseases Conference
            </h3>
            <p className="conference-about-text">
              Join the Congress on Global Perspectives on Pediatric Infectious
              Diseases Conference in Rome, Italy, September 15–16, 2025.
              Attending could include professionals, researchers, and students.
              The topic of the conference is “Integrating Global Strategies for
              Better Child Health.” Join instruction, seminars, and social
              functions to stay up to date on the most recent advances in
              pediatrics. recognizing, evaluating, and dealing with infectious
              disorders in children is a topic issue is scheduled to be debated
              at the Pediatric Infectious diseases Conference in 2025.
            </p>
            <p className="conference-about-text">
              Explore Barcelona’s cutting edge of pediatric and neonatology
              research. With Stripe Conferences, grow your network and advance
              your career. Come hang with us August 11–12, 2025.Anyone concerned
              in the treatment, investigation, or formulation of policy
              pertaining to infectious disorders in children should not miss the
              Pediatric Infectious disorders Conference.
            </p>
            <p className="conference-about-text">
              Infectious Diseases Congress 2025 gathers pediatric infectious
              disease specialists, pediatricians, epidemiologists,
              microbiologists, and healthcare professionals from around the
              world to exchange knowledge, discuss the latest research, and
              explore innovative approaches to managing pediatric infectious
              diseases.
            </p>
          </div>
          <div className="conference-banner-wrapper">
            <img
              src="https://pediatricsmeets.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-05-13-at-6.27.09-PM-3-1179x800.jpeg"
              alt="Conference Banner"
              className="conference-banner-image"
            />
          </div>
        </div>
      </div>
      <ScientificSession />
      <WelcomeMessage />
      <h4 className="faq-title">Recommended Global Pediatrics Conferences</h4>
      <Recommended />
      <MediaPartners />
      <Location3 />
      <Footer />
    </div>
  );
}

export default Infectious;
