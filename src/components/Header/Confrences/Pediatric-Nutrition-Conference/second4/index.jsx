// MediaPartners.js
import "./index.css"; // Ensure this path is correct

const MediaPartners = () => {
  const mediaPartners = [
    {
      logo: "https://pediatricsmeets.com/wp-content/uploads/2024/07/inomics-1.webp",
    },
    {
      logo: "https://pediatricsmeets.com/wp-content/uploads/2024/07/ellevents-1.webp",
    },
    {
      logo: "https://pediatricsmeets.com/wp-content/uploads/2024/07/10times-logoblack-3-1.webp",
    },
    {
      logo: "https://pediatricsmeets.com/wp-content/uploads/2024/07/events-in-ammeric-1.webp",
    },
    {
      logo: "https://pediatricsmeets.com/wp-content/uploads/2024/07/tradefest-_2_-1.webp",
    },
  ];

  return (
    <div>
      <h2 className="MediaPartnersTitle">Our Media Partners</h2>
      <div className="MediaPartnersList">
        {mediaPartners.map((partner, index) => (
          <div className="MediaPartnerItem" key={index}>
            <img
              src={partner.logo}
              alt={`Media Partner ${index + 1}`} // Updated alt text for accessibility
              className="MediaPartnerLogo"
            />
            {/* Removed the partner name */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaPartners;
