import "./index.css";

const Location5 = () => {
  return (
    <div className="city-app">
      <div className="city-container">
        {/* Left section: Information about a place */}
        <div className="city-info-section">
          <h2 className="city-section-title">About Barcelona</h2>
          <p className="city-info-content">
            Barcelona is a city with a wide range of original leisure options
            that encourage you to visit time and time again. Overlooking the
            Mediterranean Sea, and famous for Gaudí and other Art Nouveau
            architecture, Barcelona is one of Europe’s trendiest cities.It’s a
            hub of new trends in the world of culture, fashion and cuisine. It
            combines the creativity of its artists and designers with respect
            and care for local traditions.
          </p>
          <br />
        </div>

        {/* Right section: Embedded Google Map */}
        <div className="city-map-section">
          <iframe
            title="Barcelona Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d380074.9316546685!2d12.52423!3d41.907148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Metropolitan%20City%20of%20Rome%20Capital%2C%20Italy!5e0!3m2!1sen!2sus!4v1728301415564!5m2!1sen!2sus"
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

export default Location5;
