import Footer from "../../Footer/Footer";
import Header from "../../Header/MainHeader/Header";
import "./HomePage.css"; // Custom CSS file for styling
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accordion from "../HomePart1/Accordation";
import { FaHandPointRight } from "react-icons/fa";
import MediaPartners from "../../Header/Confrences/Pediatric-Nutrition-Conference/second4";
import Part2 from "../../Header/Confrences/Pediatrics-Neonatology-Conference/part2";

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
          <h2>Pediatrics Conferences</h2>
          <p>
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
      <section className="conference-cards-section">
        <h2 className="section-title">Upcoming Conferences 2025</h2>
        <div className="conference-cards">
          <div className="conference-card">
            <img
              src="https://via.placeholder.com/300x200?text=Pediatrics+and+Neonatology"
              alt="Pediatrics and Neonatology"
              className="conference-image"
            />
            <h3 className="upcoming-card-title">Pediatrics and Neonatology</h3>
            <p>
              <i className="fa fa-calendar"></i> June 16–17, 2025
            </p>
            <p>
              <i className="fa fa-map-marker"></i> Zurich, Switzerland
            </p>
            <a href="#" className="btn-secondary">
              Register Now
            </a>
          </div>

          <div className="conference-card">
            <img
              src="https://via.placeholder.com/300x200?text=Pediatric+Nutrition"
              alt="Pediatric Nutrition"
              className="conference-image"
            />
            <h3 className="upcoming-card-title">Pediatric Nutrition</h3>
            <p>
              <i className="fa fa-calendar"></i> July 07-08, 2025
            </p>
            <p>
              <i className="fa fa-map-marker"></i> Barcelona, Spain
            </p>
            <a href="#" className="btn-secondary">
              Register Now
            </a>
          </div>

          <div className="conference-card">
            <img
              src="https://via.placeholder.com/300x200?text=Emerging+Issues+in+Pediatric+Medicine"
              alt="Emerging Issues in Pediatric Medicine"
              className="conference-image"
            />
            <h3 className="upcoming-card-title">
              Emerging Issues in Pediatric Medicine
            </h3>
            <p>
              <i className="fa fa-calendar"></i> August 18-19, 2025
            </p>
            <p>
              <i className="fa fa-map-marker"></i> London, UK
            </p>
            <a href="#" className="btn-secondary">
              Register Now
            </a>
          </div>

          <div className="conference-card">
            <img
              src="https://via.placeholder.com/300x200?text=Pediatric+Nutrition"
              alt="Pediatric Nutrition"
              className="conference-image"
            />
            <h3 className="upcoming-card-title">Pediatric Nutrition</h3>
            <p>
              <i className="fa fa-calendar"></i> July 07-08, 2025
            </p>
            <p>
              <i className="fa fa-map-marker"></i> Barcelona, Spain
            </p>
            <a href="#" className="btn-secondary">
              Register Now
            </a>
          </div>
        </div>
      </section>
      <br />

      <Part2 />
      <br />
      <div className="OrgCommittee">
        <h2 className="section-title">Organizing Committee</h2>
        <br />
        <br />
        <div className="conference-cards2">
          <div className="conference-card2">
            <img
              src="https://pediatricsmeets.com/wp-content/uploads/2024/08/Ali-reza.png"
              alt="Pediatrics and Neonatology"
              className="conferenceImg1"
            />
            <h3>Alireza Heidari</h3>
            <p>
              <br />
              Director of the BioSpectroscopy Core Research Laboratory (BCRL),
              USA
            </p>

            <a href="#" className="bt1">
              Read More
            </a>
          </div>

          <div className="conference-card2">
            <img
              src="https://pediatricsmeets.com/wp-content/uploads/2024/08/Sergy-Suchkov.png"
              alt="Pediatric Nutrition"
              className="conferenceImg1"
            />
            <h3>Sergy Suchkov</h3>
            <p>
              <i className=""></i> Director of the Division of Clinical
              Immunology &Immunobiotechnology, Helmholtz Eye Res Institute in
              Moscow, Russia
            </p>

            <a href="#" className="bt1">
              Read More
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <center className="Liner1">
        <h2 className="linerGread"> Why Should We Attend </h2>
      </center>
      <div className="attend">
        <div className="card4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Font_Awesome_5_solid_hand-point-right.svg/1024px-Font_Awesome_5_solid_hand-point-right.svg.png"
            alt="Pediatric Nutrition"
            className="icons"
          />
          <h3>Build Stronger Relationship</h3>
          <p>
            <i className=""></i> Building strong relationships requires trust,
            Pediatrics Nutrition communication, and mutual respect. Show
            empathy, actively listen, and offer support. Share experiences, set
            common goals, and celebrate successes together.
          </p>

          {/* <a href="#" className="bt1">Read More</a> */}
        </div>

        <div className="card4">
          <img
            src="https://t4.ftcdn.net/jpg/01/01/48/09/360_F_101480925_dWEgCvJIagLTy36eiBmoyIRmxoqcKNeo.jpg"
            alt="Pediatric Nutrition"
            className="icons"
          />
          <h3>Remember What You Learn</h3>
          <p>
            <i className=""></i>Meet and learn from leading Pediatrics Nutrition
            professionals in the pediatrics field, gaining new insights and
            forming valuable connections. Explore the latest advancements,
            research, and innovations in pediatric healthcare.{" "}
          </p>

          {/* <a href="#" className="bt1">Read More</a> */}
        </div>
        <div className="card4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs3TTdu2SpqRX0f2OAI-MdkHhH7cmkimL4uQ&s"
            alt="Pediatric Nutrition"
            className="icons"
          />
          <h3>Build Stronger Relationship</h3>
          <p>
            <i className=""></i> Discover the latest Pediatrics Nutrition and
            advancements in food technology, from sustainable practices to new
            processing techniques, and discuss how they can be applied to your
            projects.
          </p>

          {/* <a href="#" className="bt1">Read More</a> */}
        </div>
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
    </div>
  );
};

export default HomePage;
