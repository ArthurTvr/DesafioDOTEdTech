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

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const buttons = card.querySelectorAll(".btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isActive = card.classList.contains("active");

      // fecha todos
      cards.forEach(c => c.classList.remove("active"));

      // se não estava ativo, abre
      if (!isActive) {
        card.classList.add("active");
      }
    });
  });
});