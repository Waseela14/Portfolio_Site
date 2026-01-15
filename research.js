

function initResearchCards() {
  const cards = document.querySelectorAll("#research .card");

  cards.forEach(card => {
    const btn = card.querySelector(".learn-more");
    if (!btn) return;

    btn.addEventListener("click", e => {
      e.stopPropagation();
      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    });
  });

  document.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("active"));
  });
}
