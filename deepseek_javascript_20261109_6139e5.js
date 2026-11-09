(function () {
  "use strict";

  function handleImageErrors() {
    var images = document.querySelectorAll(".site-img");
    images.forEach(function (img) {
      img.addEventListener("error", function () {
        var wrapper = img.parentElement;
        if (!wrapper) return;
        var placeholder = document.createElement("div");
        placeholder.className = "img-placeholder";
        placeholder.textContent = img.getAttribute("data-fallback") || "Картинка скоро появится";
        if (img.parentNode) {
          img.parentNode.replaceChild(placeholder, img);
        }
      }, { once: true });
    });
  }

  function revealCards() {
    var cards = document.querySelectorAll(".card");
    cards.forEach(function (card, index) {
      card.style.animationDelay = (index * 0.15) + "s";
      card.classList.add("reveal");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    handleImageErrors();
    revealCards();
    console.log("Сайт vertel загружен. XIVIVIDE × Сырная Броня.");
  });
})();