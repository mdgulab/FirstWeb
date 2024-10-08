import React from "react";
import "./index.css"; // Import the CSS file

const UpcomingConferences = () => {
  const conferences = [
    {
      title: "Pediatrics and Neonatology",
      date: "June 16–17, 2025",
      location: "Zurich, Switzerland",
      image:
        "https://via.placeholder.com/300x200?text=Pediatrics+and+Neonatology",
    },
    {
      title: "Pediatric Nutrition",
      date: "July 07-08, 2025",
      location: "Barcelona, Spain",
      image: "https://via.placeholder.com/300x200?text=Pediatric+Nutrition",
    },
    {
      title: "Emerging Issues in Pediatric Medicine",
      date: "August 18-19, 2025",
      location: "London, UK",
      image:
        "https://via.placeholder.com/300x200?text=Emerging+Issues+in+Pediatric+Medicine",
    },
    {
      title: "Pediatrics and Neonatology",
      date: "June 16–17, 2025",
      location: "Zurich, Switzerland",
      image:
        "https://via.placeholder.com/300x200?text=Pediatrics+and+Neonatology",
    },
    {
      title: "Pediatric Nutrition",
      date: "July 07-08, 2025",
      location: "Barcelona, Spain",
      image: "https://via.placeholder.com/300x200?text=Pediatric+Nutrition",
    },
  ];

  return (
    <section className="conference-cards-section">
      <h2 className="section-title">Upcoming Conferences 2025</h2>

      {/* Marquee for announcements or highlights */}
      <div className="marquee">
        <div className="marquee-content">
          Exciting news! Upcoming Pediatric Conferences! Don't miss them! | Join
          us for insightful sessions and networking opportunities! | Register
          now for early bird pricing!
        </div>
      </div>

      <div className="conference-cards">
        {conferences.map((conference, index) => (
          <div className="conference-card" key={index}>
            <img
              src={conference.image}
              alt={conference.title}
              className="conference-image"
            />
            <h3 className="upcoming-card-title">{conference.title}</h3>
            <p>
              <i className="fa fa-calendar"></i> {conference.date}
            </p>
            <p>
              <i className="fa fa-map-marker"></i> {conference.location}
            </p>
            <a href="#" className="btn-secondary">
              Register Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingConferences;
