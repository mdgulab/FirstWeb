import { useState } from "react";
import "./index.css";
// import { Form } from 'react-router-dom';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▼ " : "► "} {title}
      </button>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const FAQS = () => {
  const items = [
    {
      title: "What is Pediatrics Nutrition?",
      content:
        "Pediatrics Conferences is the branch of medicine that involves the medical care of infants, children, and adolescents. The age limit typically ranges from birth up to 18 years of age.",
    },
    {
      title: "How often should my child visit the pediatrician?",
      content:
        "Regular visits to the pediatrician are recommended during the early years for checkups, vaccinations, and tracking developmental milestones.",
    },
    {
      title: "What vaccines are recommended for children?",
      content:
        "Vaccines such as MMR, polio, and hepatitis B are recommended. Consult your pediatrician for a complete vaccine schedule.",
    },
    {
      title: "Are vaccines safe for my child?",

      content:
        "Yes, vaccines are thoroughly tested and monitored to ensure they are safe for children. They help prevent serious diseases.",
    },
    {
      title: "What are common illnesses in children?",
      content:
        "Common illnesses include colds, ear infections, and stomach viruses. Maintaining good hygiene can help reduce the risk.",
    },
  ];

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default FAQS;

import { useState } from "react";
import "./index.css";
// import { Form } from 'react-router-dom';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▼ " : "► "} {title}
      </button>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const FAQS = () => {
  const items = [
    {
      title:
        "What are the dates and location of the Pediatrics Neonatology Conference 2025?",
      content:
        "The Pediatrics Neonatology Conference will be held from 24-25 MARCH,2025 in Barcelona,Spain. Pediatric Conference 2025",
    },
    {
      title: "Who should attend the Pediatrics Neonatology Conference ?",
      content:
        "The Pediatrics Neonatology Conference is ideal for pediatricians, neonatologists, researchers, nurses, healthcare professionals, and students interested in pediatrics and neonatology. Pediatric Conference 2025",
    },
    {
      title: "What topics will be covered at the Pediatric Events 2025?",
      content:
        "The Pediatrics Neonatology Conference will cover a range of topics including neonatal care, pediatric nutrition, pediatric infectious diseases, congenital disorders, child development, and more. Pediatric Conference 2025",
    },
    {
      title: "How can I register for the Pediatrics Conferences 2025?",

      content:
        "Registration can be completed online via our official website Pediatric Events 2025",
    },
  ];

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default FAQS;
