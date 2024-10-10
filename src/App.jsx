import TravelVisa from "./components/Header/TravelVisa/TravelVisa.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Venue from "./components/Header/Venue/Venue.jsx";
import Contact from "./components/Header/Contact/Contact.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/Home/HomePage.jsx";
import Accordion from "./components/HomePage/HomePart1/Accordation.jsx";
import Header from "./components/Header/MainHeader/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Guideline from "./components/Header/Guideline/Guideline.jsx";
import ConferencePage from "./components/Header/Confrences/Pediatrics-Neonatology-Conference/index.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Nutrition from "./components/Header/Confrences/Pediatric-Nutrition-Conference/index.jsx";
import Emerging from "./components/Header/Confrences/Emerging-Issues/index.jsx";
import Infectious from "./components/Header/Confrences/Pediatric-Infectious-Diseases-Conference/index.jsx";
import Genomics from "./components/Header/Confrences/Pediatric-Genomics-Conference/index.jsx";
import Devlopment from "./components/Header/Confrences/Neonatal-Development-Conference/index.jsx";
import ContactForm from "./components/All-Button/Heading-Button/Confrences_button/Neonatology/index.jsx";
import AbstractTemplate from "./components/All-Button/Heading-Button/Confrences_button/Neonatology/Abstarct/index.jsx";
import Org from "./components/All-Button/Heading-Button/Confrences_button/Organizing Committee/index.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage />}></Route>
        <Route path="/Infectious" element={<Infectious />}></Route>
        <Route path="/Emerging" element={<Emerging />}></Route>
        <Route path="/Nutrition" element={<Nutrition />}></Route>
        <Route path="/ConfrencePage" element={<ConferencePage />}></Route>
        <Route path="/Travelvisa" element={<TravelVisa />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Guideline" element={<Guideline />} />
        <Route path="/Footer" element={<Footer />}></Route>
        <Route path="/Venue" element={<Venue />}></Route>
        <Route path="/Header" element={<Header />}></Route>
        <Route path="/accordian" element={<Accordion />}></Route>
        <Route path="/Genomics" element={<Genomics />}></Route>
        <Route path="/Devlopment" element={<Devlopment />}></Route>
        <Route path="/ContactForm" element={<ContactForm />}></Route>
        <Route path="/AbstractTemplate" element={<AbstractTemplate />}></Route>
        <Route path="/Org" element={<Org />}></Route>
        <Route index element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
