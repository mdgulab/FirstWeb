// ConferencePage.js
import "./index.css"; // Importing CSS for styles
import Footer from "../../../Footer/Footer";
import Header from "../../MainHeader/Header";
import GroundPart from "./Conferences_Seientific/Groundpart";
import WelcomeMessage from "./WelcomeMessage";
import Loaction from "./location";
import FAQS from "./FAQS";
import MediaPartners from "../Pediatric-Nutrition-Conference/mediaPartner";
import Recommended from "../Pediatric-Nutrition-Conference/Recommended-conf";
import { Link } from "react-router-dom";
function ConferencePage() {
  return (
    <div>
      <Header />
      <div className="conference-page">
        {/* Conference Header */}
        <header className="conference-header">
          <h2>International Conference on</h2>
          <h1>Pediatrics & Neonatology 2025</h1>
          <p className="conference-theme">
            Theme: Advancing Global Health for Children and Newborns
          </p>
          <p className="conference-date">
            June 16-17, 2025 | Zurich, Switzerland
          </p>
          {/* Call to Action Buttons */}
          <div className="cta-buttons">
            <button className="register-btn">Go to Register Now</button>
            <Link to="/ContactForm">
              <button className="brochure-btn">Brochure Download</button>
            </Link>
            <Link to="/AbstractTemplate">
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
        <div className="conference-info">
          <div className="conference-infoin">
            <h3>About Pediatrics Neonatology Conference</h3>
            <p className="conference-about-p">
              The Pediatrics and Neonatology Conference 2025 will take place in
              Zurich, Switzerland, on June 16–17, 2025. As the main emphasis on
              “Advancing Global Health for Children and Newborns”
            </p>
            <p className="conference-about-p">
              Scholars, practitioners, and students are invited to attend the
              2025 Pediatrics Neonatology Conference. To stay up updated on the
              latest developments in pediatrics, attend keynote public
              appearances lectures, and networking events. You may collaborate
              globally and grow your career with Stripe Conferences.
            </p>
            <p className="conference-about-p">
              Research presented in London, UK in 2025 at the Pediatrics
              Neonatology Conference. Engage in dialogue with leading
              authorities, academics, and students to explore future
              advancements and applications in pediatric healthcare. Expand your
              professional network and progress your career with Stripe
              Conferences. Visit us in London, UK on August 25–26, 2025.
            </p>
          </div>
          <div>
            <img
              className="conference-img"
              src="https://pediatricsmeets.com/wp-content/uploads/2024/09/Pediatrics-2025-1400x700.png"
              alt="Conference Banner"
            />
          </div>
        </div>
      </div>
      <GroundPart />
      <WelcomeMessage />
      <center>
        <h2>Recommended Global Pediatrics Conferences</h2>
      </center>
      <Recommended />
      <MediaPartners />
      <Loaction />
      <br />
      <center>
        <h4>FAQS</h4>
      </center>
      <br />
      <FAQS />
      <Footer />
    </div>
  );
}

export default ConferencePage;
