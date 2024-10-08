import "./index.css";

function Recommended() {
  const topics = [
    {
      name: "Pediatric Neonatology 2025, Spain",
      url: "https://example.com/neonatology",
    },
    {
      name: "Pediatric Medicine 2025, UK",
      url: "https://example.com/medicine",
    },
    {
      name: "Pediatric Infectious Diseases 2025, Italy",
      url: "https://example.com/infectious-diseases",
    },
    {
      name: "Pediatrics Genomics 2025, France",
      url: "https://example.com/genomics",
    },
    {
      name: "Neonatal Development 2025, France",
      url: "https://example.com/neonatal-development",
    },
  ];

  return (
    <div className="SpeakerList">
      {topics.map((topic, index) => (
        <div className="SpeakerItem" key={index}>
          <a
            href={topic.url}
            className="SpeakerText"
            target="_blank"
            rel="noopener noreferrer"
          >
            {topic.name}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Recommended;
