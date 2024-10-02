// import React from "react";
import "./index.css";

const Loaction = () => {
  return (
    <div className="App">
      <div className="container">
        {/* Left section: Information about a place */}
        <div className="info-section">
          <h2 className="section-title">About Barcelona</h2>
          <p className="info-content">
            Barcelona is a city with a wide range of original leisure options
            that encourage you to visit time and time again. Overlooking the
            Mediterranean Sea, and famous for Gaudi and other Art Nouveau
            architecture, Barcelona is one of Europe’s trendiest cities. It’s a
            hub of new trends in the world of culture, fashion, and cuisine. It
            combines the creativity of its artists and designers with respect
            and care for local traditions.
            <br />
            <br />
            As a cultural hub, Barcelona is famous for its art, music, and
            literature, being the birthplace of iconic artists such as Pablo
            Picasso and Joan Miro. With its lively streets, beautiful beaches,
            and world-class dining and nightlife, Barcelona offers an enchanting
            mix of old-world charm and modern vitality.
          </p>
        </div>

        {/* Right section: Embedded Google Map */}
        <div className="map-section">
          <iframe
            title="Zurich Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.448515488575!2d8.54169401568639!3d47.37688667916867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a098d7864af%3A0x54d6d4f5393e8b8b!2sZurich%2C%20Switzerland!5e0!3m2!1sen!2sin!4v1695926124652!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Loaction;
