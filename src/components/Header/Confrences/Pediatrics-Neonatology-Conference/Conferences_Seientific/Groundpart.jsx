import React, { useState } from "react";
import "./Groundpart.css";

// Accordion component
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

function GroundPart() {
  // Left column content
  const leftItems = [
    {
      title: "Pediatrics",
      content:
        "Pediatrics is the medical field that focuses on the health of babies, children, and teenagers. Pediatricians are doctors who treat common illnesses, help prevent diseases with vaccines, and make sure kids are growing and developing properly. They also give advice to families on things like nutrition, safety, and mental health. Pediatricians play a key role in helping kids stay healthy and grow up strong.",
    },
    {
      title: "Pediatrics and Neonatal Intensive Care",
      content:
        "Pediatrics and Neonatal Intensive Care (NICU) focus on the specialized care of newborns, particularly those who are premature, critically ill, or have complex medical conditions. Pediatricians and neonatologists work together in the NICU to provide life-saving care, closely monitoring vital signs, administering treatments, and supporting the development of these vulnerable infants.",
    },
    {
      title: "Clinical Pediatrics",
      content:
        "Pediatricians in this field diagnose and manage a wide range of health issues in infants, children, and adolescents, from routine check-ups and vaccinations to the treatment of acute and chronic illnesses. They work closely with families to monitor growth, address developmental concerns, and provide guidance on nutrition, behavior, and preventive care.",
    },
    {
      title: "Neonatology and Perinatology",
      content:
        "Neonatology and perinatology are specialized fields within pediatrics and obstetrics that focus on the care of newborns and the health of mothers and their babies during pregnancy and immediately after birth.",
    },
    {
      title: "Pediatric Dermatology​",
      content:
        "Pediatric dermatology is a subspecialty of dermatology focused on diagnosing and treating skin, hair, and nail conditions in infants, children, and adolescents. Pediatric dermatologists address a wide range of skin issues, from common conditions like eczema, acne, and birthmarks to more complex disorders such as genetic skin diseases and severe allergic reactions.",
    },
    {
      title: "Pediatric Emergency Medicine and Critical Care​",
      content:
        "Pediatric Emergency Medicine and Critical Care focus on providing urgent and life-saving care to children who are seriously ill or injured. Doctors in this field are specially trained to quickly assess and treat emergencies like severe infections, breathing problems, injuries, or other critical conditions in children.",
    },
    {
      title: "Pediatric Nursing​",
      content:
        " Pediatric nursing is the specialized care of infants, children, and adolescents by trained nurses. They  assist with everything from routine check-ups and vaccinations to caring for children with chronic illnesses or those recovering from surgery. Pediatric nurses play a key role in educating families about health issues, managing medications, and providing comfort to young patients.",
    },
    {
      title: "Pediatric Cardiology​",
      content:
        "Pediatric cardiology focuses on diagnosing and treating heart conditions in children, from infancy through adolescence. Pediatric cardiologists deal with a range of issues, including congenital heart defects (conditions present at birth), heart murmurs, arrhythmias (irregular heartbeats), and other cardiovascular problems.",
    },
    {
      title: "Pediatric Nutrition​",
      content:
        "Pediatric nutrition is the study and practice of providing proper dietary care for infants, children, and adolescents.Pediatric nutritionists and dietitians assess dietary needs, provide guidance on healthy eating habits, and develop nutrition plans to address specific issues like allergies, obesity, or undernutrition.",
    },
    {
      title: "Pediatric, Neonatal Nutrition and Baby food​",
      content:
        "Pediatric nutrition ensures that children get the balanced nutrients they need to grow and stay healthy. Neonatal nutrition specifically addresses the needs of newborns, especially those who are premature or have special conditions. Baby food, introduced around six months of age, includes pureed fruits, vegetables, and cereals, designed to be easy for babies to eat.",
    },
    {
      title: " Genetic and Metabolic Disorders in Pediatrics and Neonatology​",
      content:
        "Genetic disorders are caused by abnormalities in the child’s DNA and can lead to conditions like cystic fibrosis or Down syndrome. Metabolic disorders affect how the body breaks down and uses food, leading to conditions such as phenylketonuria (PKU) or galactosemia.",
    },
    {
      title: "Precision Medicine in Pediatrics​",
      content:
        "Precision medicine helps improve the accuracy of diagnoses, predict how a child will respond to treatments, and offer targeted therapies that can lead to better outcomes and fewer side effects.",
    },
    {
      title: "Pediatric Oncology",
      content:
        "Pediatric oncology is the field of medicine that focuses on diagnosing and treating cancer in children. Pediatric oncologists are doctors who specialize in caring for young patients with various types of cancer, such as leukemia, brain tumors, or solid tumors. They use treatments like chemotherapy, radiation, and surgery to fight the cancer.",
    },
  ];

  // Right column content
  const rightItems = [
    {
      title: "Pediatric Infectious Diseases",
      content:
        "Pediatric infectious diseases encompass a variety of infections impacting children, from prevalent ailments like influenza to severe illnesses such as meningitis and pneumonia.",
    },
    {
      title: "Pediatric Surgery",
      content:
        "Pediatric surgery is a branch of medicine that deals with performing surgeries on babies, children, and teenagers. Pediatric surgeons are doctors who specialize in operating on young patients to treat conditions like congenital defects, injuries, or diseases.  Pediatric surgery aims to help children recover from their conditions, improve their quality of life, and support their healthy development.",
    },
    {
      title: "Pediatric Urology & Nephrology",
      content:
        " Pediatric urology deals with conditions affecting the urinary tract, such as urinary tract infections, bedwetting, and congenital issues like hypospadias or undescended testicles. Pediatric nephrology focuses on kidney-related problems, including kidney infections, kidney stones, and chronic kidney disease.",
    },
    {
      title: "Clinical & Medical Case Reports",
      content:
        "Pediatric organ transplantation is a medical procedure where a child receives a healthy organ, like a kidney, liver, or heart, from a donor to replace a damaged or failing organ. This process is often necessary for children with severe organ failure due to disease or congenital conditions. After the transplant, children require ongoing medical care to ensure their bodies accept the new organ and to prevent complications",
    },
    {
      title: "Pediatric Organ Transplantation",
      content:
        "Pediatric surgical extremities involve surgeries performed on a child’s arms, legs, hands, or feet to correct deformities, injuries, or congenital conditions. These surgeries may be needed to treat broken bones, congenital issues like clubfoot, or conditions that affect a child’s ability to move and function normally. Pediatric surgeons who specialize in extremities aim to restore the child’s mobility and function, allowing them to grow and develop with as much normalcy as possible. ",
    },
    {
      title: "Critical Care and its Applications​",
      content:
        "Critical care is typically provided in an Intensive Care Unit (ICU) and is essential for patients who are critically ill due to conditions like severe infections, major surgeries, trauma, or respiratory failure. It involves the use of advanced medical technology, close monitoring, and specialized care to support vital organs like the heart, lungs, and kidneys. ",
    },
    {
      title: "Child and Adolescent Behavioral Health​",
      content:
        " Child and adolescent behavioral health focuses on the mental and emotional well-being of children and teenagers. Specialists in this field work with children, adolescents, and their families to diagnose, treat, and manage these conditions through therapy, counseling, medication, and other supportive strategies.",
    },
    {
      title: "Maternal and Child Care​",
      content:
        "Maternal and child care is a branch of healthcare focused on the well-being of mothers and their children, from pregnancy through early childhood. This care includes prenatal check-ups, nutritional guidance, childbirth preparation, and postnatal care for both mother and baby. ",
    },
    {
      title: "Pediatric Trauma & Depression​",
      content:
        "Pediatric trauma and depression are significant concerns in children’s mental and physical health. Pediatric trauma refers to physical injuries children may suffer due to accidents, falls, or violence, as well as emotional trauma from events like abuse, neglect, or the loss of a loved one. Pediatric depression involves persistent feelings of sadness, hopelessness, and loss of interest in activities, which can affect a child’s daily life, relationships, and development. ",
    },
    {
      title: "Clinical Trials and Case Reports in Pediatrics​",
      content:
        "Clinical trials and case reports are essential tools in pediatric medicine for advancing knowledge and improving care for children. Clinical trials are research studies conducted to evaluate the safety and effectiveness of new treatments, medications, or interventions in children. Case reports are detailed descriptions of individual pediatric cases, often highlighting rare or unusual conditions. They provide valuable insights by documenting how specific cases are diagnosed and treated, offering lessons that can be applied in similar situations. ",
    },

    {
      title: "Neonatal Brain Development​",
      content:
        "Neonatal brain development refers to the growth and maturation of a baby’s brain during the first few weeks and months of life. This period is crucial as the brain undergoes rapid development, forming the basic structures and connections needed for future learning, behavior, and cognitive functions.",
    },
    {
      title: "Future of Pediatric Healthcare​",
      content:
        "The future of pediatric healthcare is poised to be shaped by advancements in technology, personalized medicine, and a focus on preventive care. Innovations like telemedicine will make it easier for families to access specialized care and consult with experts remotely.",
    },
  ];
  return (
    <div>
      <div className="App">
        <h1 className="main-title">
          Pediatrics Conferences Scientific Sessions
        </h1>
        <div className="ground-part">
          <div className="column left">
            {leftItems.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
          <div className="column right">
            {rightItems.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>

      <center>
        <button className="bottom-button2">View All Scintific Session</button>
      </center>
    </div>
  );
}

export default GroundPart;
