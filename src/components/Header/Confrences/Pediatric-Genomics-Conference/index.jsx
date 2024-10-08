import "./index.css"; // Importing the updated CSS file
import Footer from "../../../Footer/Footer";
import Header from "../../MainHeader/Header";
import WelcomeMessage from "../Pediatrics-Neonatology-Conference/WelcomeMessage";
import MediaPartners from "../Pediatric-Nutrition-Conference/mediaPartner";
import Recommended from "../Pediatric-Nutrition-Conference/Recommended-conf";
import Location3 from "./Location3";
import ScientificSession2 from "./Scientific-Session";

function Genomics() {
  return (
    <div>
      <Header />
      <div className="infectious-conference-container">
        {/* Conference Header */}
        <header className="infectious-header-wrapper">
          <h2 className="infectious-subheading">International Conference on</h2>
          <h1 className="infectious-main-title">
            Pediatric Genomics and Precision Diagnostics
          </h1>
          <p className="infectious-theme-statement">
            Theme: Genomic Frontiers in Pediatric Health.
          </p>
          <p className="infectious-dates-location">
            October 06-07, 2025 | Paris, France
          </p>

          {/* Call to Action Buttons */}
          <div className="infectious-action-buttons">
            <button className="infectious-btn infectious-register-now-btn">
              Go to Register Now
            </button>
            <button className="infectious-btn infectious-download-brochure-btn">
              Brochure Download
            </button>
            <button className="infectious-btn infectious-submit-abstract-btn">
              Abstract Submission
            </button>
            <button className="infectious-btn infectious-tentative-program-btn">
              Tentative Program
            </button>
            <button className="infectious-btn infectious-organizing-committee-btn">
              Organizing Committee
            </button>
          </div>
        </header>

        {/* Conference Info Section */}
        <div className="infectious-details-section">
          <div className="infectious-description">
            <h3 className="infectious-about-title">
              About Pediatric Genomics Conference
            </h3>
            <p className="infectious-about-text">
              Pediatric Genomics conference and Pediatric Conferences which is
              scheduled in Paris, France, on October 6-7, 2025. Focused on
              “Genomic Frontiers in Pediatric Health” the event is open to
              professionals, researchers, and students. Engage in keynotes,
              presentations, and networking to stay updated on the latest in
              pediatrics. Advance your career and collaborate internationally
              with Stripe Conferences.
            </p>
            <p className="infectious-about-text">
              Discover the forefront of pediatric genomics research and
              Pediatric Conferences in Rome, Italy. Engage with leading
              professionals, researchers, and students to explore future trends
              and applications. Expand your network and propel your career
              forward with Stripe Conferences. Join us on June 9-10, 2025.
            </p>
          </div>
          <div className="infectious-banner-wrapper">
            <img
              src="https://pediatricsmeets.com/wp-content/uploads/2024/07/1-Home-Page-Banner-e1722494645484.png"
              alt="Conference Banner"
              className="infectious-banner-image"
            />
          </div>
        </div>
      </div>
      <ScientificSession2 />
      <WelcomeMessage />
      <h4 className="infectious-faq-title">
        Recommended Global Pediatrics Conferences
      </h4>
      <Recommended />
      <MediaPartners />
      <Location3 />
      <Footer />
    </div>
  );
}

export default Genomics;
