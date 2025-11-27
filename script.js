document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("show");
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !expanded);
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const slider = document.querySelector(".slider");
  if (slider) {
    const images = [
      "./images/Medien (4).jpg",
      "./images/Medien (3).jpg",
      "./images/Medien (6).jpg",
      "./images/Medien (5).jpg"
    ];
    const img = slider.querySelector("img");
    const prev = slider.querySelector(".prev");
    const next = slider.querySelector(".next");
    let current = 0;
    const showImage = (i) => (img.src = images[i]);
    prev.addEventListener("click", () => {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    });
    next.addEventListener("click", () => {
      current = (current + 1) % images.length;
      showImage(current);
    });
  }

  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMessage");
  const characters = document.querySelectorAll(".character");
  if (form && msg) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const errors = [];
      if (name.length < 2) errors.push("Name muss mindestens 2 Zeichen lang sein.");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        errors.push("Bitte gib eine gültige E-Mail-Adresse ein.");
      if (message.length < 10)
        errors.push("Nachricht muss mindestens 10 Zeichen lang sein.");
      if (errors.length > 0) {
        msg.style.color = "red";
        msg.textContent = errors.join(" ");
        makeCharactersAngry();
      } else {
        msg.style.color = "green";
        msg.textContent = "Danke für deine Nachricht! Wir melden uns bald.";
        makeCharactersHappy();
        form.reset();
      }
    });
  }

  const movieCards = document.querySelectorAll(".movie-card");
  const modal = document.getElementById("movieModal");
  if (movieCards.length && modal) {
    const modalTitle = document.getElementById("modalTitle");
    const modalGenre = document.getElementById("modalGenre");
    const modalDesc = document.getElementById("modalDesc");
    const closeModal = modal.querySelector(".close");
    movieCards.forEach((card) => {
      card.addEventListener("click", () => {
        modalTitle.textContent = card.dataset.title;
        modalGenre.textContent = card.dataset.genre;
        modalDesc.textContent = card.dataset.desc;
        modal.style.display = "flex";
      });
    });
    closeModal.addEventListener("click", () => (modal.style.display = "none"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  }
});
