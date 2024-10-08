import React from "react";
import "./index.css"; // Import the CSS file

const OrganizingCommittee = () => {
  const members = [
    {
      name: "Alireza Heidari",
      title:
        "Director of the BioSpectroscopy Core Research Laboratory (BCRL), USA",
      image:
        "https://pediatricsmeets.com/wp-content/uploads/2024/08/Ali-reza.png",
    },
    {
      name: "Sergy Suchkov",
      title:
        "Director of the Division of Clinical Immunology & Immunobiotechnology, Helmholtz Eye Res Institute in Moscow, Russia",
      image:
        "https://pediatricsmeets.com/wp-content/uploads/2024/08/Sergy-Suchkov.png",
    },
  ];

  return (
    <div className="org-committee">
      <h2 className="section-title">Organizing Committee</h2>
      <div className="conference-cards2">
        {members.map((member, index) => (
          <div className="conference-card2" key={index}>
            <img
              src={member.image}
              alt={member.name}
              className="conferenceImg1"
            />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
            <a href="#" className="bt1">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizingCommittee;
