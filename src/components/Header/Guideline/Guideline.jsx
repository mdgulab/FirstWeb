import './Guideline.css';
import Header from '../MainHeader/Header';
import Footer from '../../Footer/Footer';

function Guideline() {
  return (
    <div className="guideline-container">
      <Header />
      <div className="back-img">
        <h2 className="speaker-heading">Speaker Guidelines</h2>
      </div>
      <div className="guideline-content">
        <h2 className="heading2">Speaker Guidelines</h2>
        <ul>
          <h3 className="heading3">Speaker Guidelines</h3>
          <li>Authors are requested to submit the abstract (250-300 words) and biography(80-100 words) and your photograph that shows your clear face in 250*250 size.</li>
          <li>Selected abstract submissions will be presented during oral sessions generally lasting for 3-4 hours. Authors will present their research/overview, etc. in a specific topic area, and presentations will be moderated by experts in the field.</li>
          <li>A scientific overview may be included in an oral abstract session, as appropriate, or a moderator may provide a brief transnational summary at the close of a session. Co-mediators will introduce speakers and facilitate audience questions.</li>
          <h3 className='heading3'>Presentation Length</h3>
          <li>Oral presenters will be allocated 25 minutes for their presentation and 5 minutes for questions and answers. If the presentation exceeds 25 minutes, the moderator will shorten the Q&A period that follows the presentation.</li>
          <li>Our experience indicates that up to 20 slides is optimal, allowing 1 minute per slide. You may choose to use more than 20 slides, but please be sure to complete your presentation within the allocated 25 minutes. The content slides should give an overview of the research with conclusions and future research direction.</li>
          <h3 className='heading3'>Slide Format</h3>
          <li>Prepare slides that clearly mentioned abstract title, your name, university/hospital/company and country. Conference name or logo should be added in the first slide of PPT.</li>
          <li>Kindly use Microsoft Power Point Presentation to prepare the slides.</li>
          <li>All the speakers should prepare the PPT (Power Point Presentation) to present at the scheduled time. We request all the presenters send the final PPT to conference manager before 7 days of the event. The sending PPT name should be with presenting speaker name and the same PPT will be available on day of event.</li>
          <li>If you are unable to send the the PPT in email (when size of the file exceeds), please use wetransfer or any drive links from google, outlook. Please do inform conference manager once you send an email or share a link.</li>
          <li>Speakers must check their slides twicely (content, images) and listen to audio if you include anything</li>
          <h3 className='heading3'>Benefits Of Joining</h3>
          <li>Networking Opportunities</li>
          <li>Knowledge Sharing</li>
          <li>Professional Development</li>
          <li>Exposure to Innovations</li>
          <li>Presentation Opportunities</li>
          <li>Brand Visibility</li>
          <li>Talent Acquisition</li>
          <li>Strategic Insights</li>
          <li>Partnerships and Collaborations</li>
          <li>Market Research</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Guideline;
