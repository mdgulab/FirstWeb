import Footer from "../../Footer/Footer";
import Header from "../../Header/MainHeader/Header";
import "./HomePage.css"; // Custom CSS file for styling
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accordion from "../HomePart1/Accordation";
import { FaHandPointRight } from "react-icons/fa";
import MediaPartners from "../../Header/Confrences/Pediatric-Nutrition-Conference/mediaPartner";
import WelcomeMessage from "../../Header/Confrences/Pediatrics-Neonatology-Conference/WelcomeMessage";
import UpcomingConferences from "./Upcomming_conf";
import OrganizingCommittee from "./OrganizingCommittee";
import WhyAttend from "./WhyShouldWeAttend";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <header className="hero">
        <img
          src="https://images.freecreatives.com/wp-content/uploads/2016/04/Free-Website-BAckgrounds1.jpg" // Replace with a relevant banner image URL
          alt="Conference Background"
          className="hero-image"
        />
        <div className="overlay">
          <h2 className="mainPagehead">Pediatrics Conferences</h2>
          <p className="mainPageP">
            Advances in Pediatrics & Neonatology: Highlighting New Treatments,
            Surgical Techniques, and Medical Breakthroughs in Pediatric Health
            Care
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </header>
      <section className="about-section">
        <div className="about-text">
          <h2>About Pediatrics Conferences</h2>
          <p className="HomeP1">
            Pediatrics Conferences and Neonatology Conferences 2025 focuses on
            the medical care of infants, children, and adolescents.
            Pediatricians are responsible for the physical, mental, and
            emotional well-being of young patients from birth through the
            teenage years. They diagnose and treat a wide range of conditions,
            from common childhood illnesses to complex, chronic diseases.
            <br />
            <br />
            Pediatrics Conferences is a subspecialty within pediatrics that
            concentrates on Pediatrics Nutrition Events, Emerging Issues
            Congress, and Pediatrics Infectious Diseases Summit. Neonatologists
            are experts in the management of premature babies, infants with
            congenital abnormalities, and those who require intensive care after
            birth.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://pediatricsmeets.com/wp-content/uploads/2024/07/Banner-3-e1722488631835.png"
            alt="About Image"
            className="about-img"
          />
        </div>
      </section>
      {/* Conference Cards Section */}
      <UpcomingConferences />
      <br />

      <WelcomeMessage />
      <br />

      {/* organizingCommittee */}
      <OrganizingCommittee />
      {/* why shoud be attend */}
      <WhyAttend />
      <MediaPartners />
      <center>
        <h2 className="gradient-underline">
          Frequently Asked Questions (FAQS)
        </h2>
      </center>
      <br />
      <Accordion />
      <br />
      <Footer />
    </div>
  );
};

export default HomePage;
