import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./index.css";
import { sliderSettings } from "./UpcommingData.jsx";

import { Link } from "react-router-dom";
function index() {
  const conferences = [
    {
      title: "Pediatrics and Neonatology",
      date: "June 16–17, 2025",
      location: "Zurich, Switzerland",
      image:
        "https://via.placeholder.com/300x200?text=Pediatrics+and+Neonatology",
    },
    {
      title: "Pediatric Nutrition",
      date: "July 07-08, 2025",
      location: "Barcelona, Spain",
      image: "https://via.placeholder.com/300x200?text=Pediatric+Nutrition",
    },
    {
      title: "Emerging Issues in Pediatric Medicine",
      date: "August 18-19, 2025",
      location: "London, UK",
      image:
        "https://via.placeholder.com/300x200?text=Emerging+Issues+in+Pediatric+Medicine",
    },
    {
      title: "Pediatrics and Neonatology",
      date: "June 16–17, 2025",
      location: "Zurich, Switzerland",
      image:
        "https://via.placeholder.com/300x200?text=Pediatrics+and+Neonatology",
    },
    {
      title: "Pediatric Nutrition",
      date: "July 07-08, 2025",
      location: "Barcelona, Spain",
      image: "https://via.placeholder.com/300x200?text=Pediatric+Nutrition",
    },
  ];

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="pprimaryText">Upcoming Conferences</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {conferences.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img
                  className="card-img"
                  src={card.image}
                  height="160"
                  alt="error"
                />

                <span className="secondaryText r-price">{card.date}</span>

                <span style={{ color: "rgb(250, 126, 2)" }}>{card.title}</span>
                <span className="primaryText-2">{card.location}</span>

                <div className="flexCenter registerButton">
                  <Link to="/register-now/">
                    <button className="button-2 card-btn-2222">
                      Register Now
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default index;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
