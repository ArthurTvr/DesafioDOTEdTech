document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    loop: true,

    navigation: {
      nextEl: ".slider-controls .swiper-button-next",
      prevEl: ".slider-controls .swiper-button-prev",
    },

    pagination: {
      el: ".slider-controls .swiper-pagination",
      clickable: true,
    },
  });
});

console.log("JS carregou");