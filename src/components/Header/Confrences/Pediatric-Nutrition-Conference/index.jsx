import "./index1.css"; // Importing CSS for styles
import Footer from "../../../Footer/Footer";
import Header from "../../MainHeader/Header";
import FAQS from "../Pediatrics-Neonatology-Conference/FAQS";
import Location from "../Pediatrics-Neonatology-Conference/location";
import WelcomeMessage from "../Pediatrics-Neonatology-Conference/WelcomeMessage";
import Second2 from "./LeftRightElement";
import MediaPartners from "./mediaPartner";
import Recommended from "./Recommended-conf";
import { Link } from "react-router-dom";
function Nutrition() {
  return (
    <div>
      <Header />
      <div className="conference-wrapper">
        {/* Conference Header */}
        <header className="conference-top-header">
          <h2 className="conference-subtitle">International Conference on</h2>
          <h2 className="conference-main-title">
            Pediatrics Nutrition and Food Security
          </h2>
          <p className="conference-highlight-theme">
            Theme: Fueling the Future: Optimizing Pediatric Nutrition for a
            Healthier World
          </p>
          <p className="conference-date-location">
            July 07-08, 2025 | Barcelona, Spain
          </p>

          {/* Call to Action Buttons */}
          <div className="cta-buttons">
            <Link to="#">
              <button className="register-btn">Go to Register Now</button>
            </Link>

            <Link to="/NutritionContactForm">
              <button className="brochure-btn">Brochure Download</button>
            </Link>
            <Link to="/NutritionAbstractTemplate">
              <button className="abstract-btn">Abstract Submission</button>
            </Link>
            <a
              href="/Pediatrics-and-Neonatology-pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="program-btn">Tentative Program</button>
            </a>
            <Link to="/Org">
              <button className="organizing-btn">Organizing Committee</button>
            </Link>
          </div>
        </header>

        {/* Conference Info Section */}
        <div className="conference-details-section">
          <div className="conference-description">
            <h3 className="conference-about-title">
              About Pediatrics Neonatology Conference
            </h3>
            <p className="conference-about-paragraph">
              We express an invitation to you to get involved in the
              International Conference on Pediatric Nutrition Conference and
              Food Security, which will be taking up residence in Barcelona,
              Spain, on July 7-8, 2025. With the theme “Fueling the Future:
              Optimizing Pediatric Nutrition for a Healthier World” at its
              center, this event is accessible to professionals, researchers,
              and students alike. Join part in seminars, keynote speaks, and
              networking events to stay up to date on the latest advancements in
              pediatrics. With Stripe Conferences, you may work with people all
              over the world and expand your career chances.
            </p>
            <p className="conference-about-paragraph">
              Discover Barcelona’s state-of-the-art pediatric and neonatology
              research. Build interactions with leading experts, scholars, and
              students to talk about new developments and their real-world
              implications. With Stripe Conferences, you can grow your
              professional network and further your career. We forward to see
              you on August 18 and 19, 2025.
            </p>
            {/* <p className="conference-about-paragraph">
              Research presented in London, UK in 2025 at the Pediatrics
              Neonatology Conference. Engage in dialogue with leading
              authorities, academics, and students to explore future
              advancements and applications in pediatric healthcare. Expand your
              professional network and progress your career with Stripe
              Conferences. Visit us in London, UK on August 25–26, 2025.
            </p> */}
          </div>
          <div className="conference-image">
            <img
              src="https://pediatricsmeets.com/wp-content/uploads/2024/07/2-City-Banner-e1722488157999.png"
              alt="Conference Banner"
              className="conference-banner-img"
            />
          </div>
        </div>
      </div>
      <br />
      <center>
        <h2>Pediatric Nutrition Conference Scientific Sessions</h2>
      </center>
      <Second2 />
      <WelcomeMessage />
      <center>
        <h2>Recommended Global Pediatrics Conferences </h2>
      </center>
      <Recommended />
      <MediaPartners />

      <Location />
      <h4 className="conference-faq-title">FAQS</h4>
      <FAQS />

      <br />
      <Footer />
    </div>
  );
}

export default Nutrition;
