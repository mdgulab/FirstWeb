import "./index.css"; // Importing updated CSS for styles
import Footer from "../../../Footer/Footer";
import Header from "../../MainHeader/Header";
import WelcomeMessage from "../Pediatrics-Neonatology-Conference/WelcomeMessage";
import Seientific from "./Scientific-Session";
import MediaPartners from "../Pediatric-Nutrition-Conference/mediaPartner";

import Location2 from "./Location";
import Recommended from "../Pediatric-Nutrition-Conference/Recommended-conf";

function Emerging() {
  return (
    <div>
      <Header />
      <div className="conference-page-wrapper">
        {/* Conference Header */}
        <header className="conference-header-section">
          <h2 className="conference-header-subtitle">
            International Conference on
          </h2>
          <h1 className="conference-header-title">
            Emerging Issues in Pediatric Medicine
          </h1>
          <p className="conference-theme-highlight">
            Theme: Fueling the Future: Optimizing Pediatric Nutrition for a
            Healthier World
          </p>
          <p className="conference-schedule-info">
            August 18-19, 2025 | London, UK
          </p>

          {/* Call to Action Buttons */}
          <div className="conference-btn1">
            <button className="register-button">Go to Register Now</button>
            <button className="download-brochure-button">
              Brochure Download
            </button>
            <button className="submit-abstract-button">
              Abstract Submission
            </button>
            <button className="tentative-program-button">
              Tentative Program
            </button>
            <button className="organizing-committee-button">
              Organizing Committee
            </button>
          </div>
        </header>

        {/* Conference Info Section */}
        <div className="conference-info-section">
          <div className="conference-details-content">
            <h3 className="conference-info-title">
              About Pediatric Medicine Conference
            </h3>
            <p className="conference-info-text">
              Attend acknowledge with us! Aug 18–19, 2025, in the UK city of
              London, at the International Conference on Emerging Issues in
              Pediatric Medicine Conference and Pediatrics Events 2025.
              Professionals, researchers, and students are welcome to join for
              this conference, which focuses on “Emerging Issues in Pediatric
              Medicine Conference: Shaping the Future of Child Care.” Learn
              about the most recent developments in pediatric care in 2025 and
              attend pediatric conferences and events, which also include
              keynote addresses and producers and chances for networking. With
              Stripe Conferences, you can collaborate globally and grow your
              career.
            </p>
            <p className="conference-info-text">
              Discover the state-of-the-art in pediatrics and neonatology at the
              2025 Madrid, Spain events, October 20–21. Whether you please are a
              pediatrician, neonatologist, nurse, researcher, or another sort of
              health care provider interested in treatment children, then must
              attend the Pediatric Medicine Conference. Be up on the most latest
              developments in the field of pediatric medicine. On October 20–21,
              2025, please join us for the Pediatric Conferences.
            </p>
          </div>
          <div className="conference-banner-image">
            <img
              src="https://pediatricsmeets.com/wp-content/uploads/2024/07/1-Home-Page-Banner-e1722494645484.png"
              alt="Conference Banner"
              className="conference-banner"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="conference-faq-section"></div>
      </div>
      <Seientific />
      <WelcomeMessage />
      <h4 className="faq-title">Recommended Global Pediatrics Conferences</h4>
      <Recommended />
      <MediaPartners />
      <Location2 />
      <Footer />
    </div>
  );
}

export default Emerging;
