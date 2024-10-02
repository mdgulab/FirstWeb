// sliderSettings.js
export const sliderSettings = {
  spaceBetween: 30,
  slidesPerView: 3,
  navigation: true,
  pagination: { clickable: true },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
};
