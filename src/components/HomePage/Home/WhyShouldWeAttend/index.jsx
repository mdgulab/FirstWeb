import React from "react";
import "./index.css"; // Import the CSS file

const WhyAttend = () => {
  const reasons = [
    {
      title: "Build Stronger Relationship",
      description:
        "Building strong relationships requires trust, communication, and mutual respect. Show empathy, actively listen, and offer support. Share experiences, set common goals, and celebrate successes together.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Font_Awesome_5_solid_hand-point-right.svg/1024px-Font_Awesome_5_solid_hand-point-right.svg.png",
    },
    {
      title: "Remember What You Learn",
      description:
        "Meet and learn from leading Pediatrics Nutrition professionals in the pediatrics field, gaining new insights and forming valuable connections. Explore the latest advancements, research, and innovations in pediatric healthcare.",
      image:
        "https://t4.ftcdn.net/jpg/01/01/48/09/360_F_101480925_dWEgCvJIagLTy36eiBmoyIRmxoqcKNeo.jpg",
    },
    {
      title: "Discover New Advancements",
      description:
        "Discover the latest Pediatrics Nutrition and advancements in food technology, from sustainable practices to new processing techniques, and discuss how they can be applied to your projects.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs3TTdu2SpqRX0f2OAI-MdkHhH7cmkimL4uQ&s",
    },
  ];

  return (
    <div>
      <center className="attend-heading-center">
        <h2 className="attend-title">Why Should We Attend</h2>
      </center>
      <div className="attend-cards-container">
        {reasons.map((reason, index) => (
          <div className="attend-card" key={index}>
            <img
              src={reason.image}
              alt={reason.title}
              className="attend-icon"
            />
            <h3 className="attend-card-title">{reason.title}</h3>
            <p className="attend-card-description">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyAttend;
