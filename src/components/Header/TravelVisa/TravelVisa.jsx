import Header from "../MainHeader/Header";
import Footer from "../../Footer/Footer";
import "./TravelVisa.css";

function TravelVisa() {
  return (
    <div>
      <Header />
      <div className="img4">
        <div className="Visahead">
          <h2 className="Visah2">Travel Visa Process</h2>
        </div>
      </div>

      <div className="VisaContents">
        <div className="VisaText">
          <h3 className="Visah3">
            VISA Requirements for International Attendees
          </h3>
          <p>
            <strong>Attendees:</strong> Please note that visa requirements vary
            depending on your nationality and country of residence. To determine
            if you need a visa to attend the conference, please visit the
            website of the embassy or consulate of the country where the
            conference will be held.
          </p>
          <p>
            <strong>Visa Application Process:</strong> If you require a visa,
            you will need to apply for one well in advance of the conference.
            The application process can take several weeks or even months, so it
            is important to start planning early.
          </p>
        </div>
        <div className="VisaImage">
          <img
            className="visaimg"
            src="https://pediatricsmeets.com/wp-content/uploads/2024/08/New-Project.webp"
            alt="Visa Process"
          />
        </div>
      </div>

      <div className="VisaMoreInfo">
        <p>
          <strong>Visa Application Documents:</strong> The specific documents
          you need to provide will vary depending on your nationality and the
          type of visa you are applying for. However, some common requirements
          include:
        </p>
        <ul>
          <li>A completed visa application form</li>
          <li>A valid passport</li>
          <li>Two passport-sized photographs</li>
          <li>A letter of invitation from the conference organizers</li>
          <li>Proof of financial means to support yourself during your stay</li>
          <li>Proof of travel arrangements</li>
        </ul>

        <p>
          <strong>Where to Apply for a Visa:</strong> You can apply at the
          embassy or consulate of the country where the conference will be held.
          Some countries also allow you to apply online or by mail.
        </p>

        <p>
          <strong>Processing Times:</strong> Visa processing times can vary
          depending on your nationality and where you are applying from. Ensure
          to allow enough time for your visa to be processed before travel.
        </p>

        <p>
          <strong>Additional Information:</strong> For more details, please
          visit the embassy or consulate website of the country where the
          conference will be held. You can also contact the conference
          organizers for assistance.
        </p>

        <h4>Tips for International Attendees:</h4>
        <ul>
          <li>Check the visa requirements for your country well in advance.</li>
          <li>Start the application process as early as possible.</li>
          <li>Ensure all your documents are accurate and complete.</li>
          <li>Contact the embassy or consulate for any questions.</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default TravelVisa;
