import "./index.css";

function Part2() {
  return (
    <div>
      <div className="welcome-section">
        <div className="speaker-card">
          <img
            src="https://pediatricsmeets.com/wp-content/uploads/2024/08/Ali-reza.png"
            alt="Alireza Heidari"
            className="speaker-img"
          />
          <h3 className="speaker-name">Alireza Heidari</h3>
          <p className="speaker-title">
            Director of the BioSpectroscopy Core Research Laboratory (BCRL), USA
          </p>

          <a href="#" className="btn-read-more">
            Read More
          </a>
        </div>

        <div className="welcome-message-container">
          <h3 className="welcome-title">
            <center>Welcome Message</center>
          </h3>
          <p className="welcome-text">
            Dear Colleagues and Esteemed Guests,
            <br />
            <br />
            I extend a warm welcome to the International Conference on
            Pediatrics and Food Security (Pediatric Nutrition 2025), scheduled
            for March 24–25, 2025, in Barcelona, Spain. I am Alireza Heidari
            from the Faculty of Chemistry at California South University (CSU),
            and it is my privilege to serve as the chair for this esteemed
            event. Our conference is designed to convene leading researchers,
            industry pioneers, and academics, fostering exploration at the
            forefront of Pediatric Nutrition and Food Security. Through dynamic
            discussions, novel insights, and collaborative endeavors, we aim to
            chart the course for future advancements in our field. Your
            participation and contributions are fundamental to the success of
            this summit. Together, we aspire not only to deepen our collective
            understanding but also to propel innovation within Pediatric
            Nutrition and Food Security.
            <br />
            <br />
            <strong>Warm regards,</strong>
            <br />
            Prof. Dr. Alireza Heidari, Ph.D., D.Sc.
            <br />
            Head of Cancer Research Institute (CRI) &
            <br />
            Director of the Bio Spectroscopy Core Research Laboratory (BCRL) at
            <br />
            Board Member of the World Association of Theoretical and
            Computational Chemists (WATOC) &
            <br />
            Continuous Member of the American Association for Cancer Research
            (AACR), Philadelphia, Pennsylvania, USA &
            <br />
            President of the American International Standards Institute (AISI),
            Irvine, California, USA.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Part2;
