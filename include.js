document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("[data-include]");

  sections.forEach(section => {
    const file = section.getAttribute("data-include");

    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${file}`);
        }
        return response.text();
      })
      .then(html => {
        // Inject HTML
        section.innerHTML = html;

        // Initialize JS for research section
        if (section.id === "research" && typeof initResearchCards === "function") {
          initResearchCards();
        }

        // Future sections can be added here
        // if (section.id === "teaching") initTeaching();
        // if (section.id === "publications") initPublications();
      })
      .catch(error => {
        section.innerHTML = "<p>Content could not be loaded.</p>";
        console.error(error);
      });
  });
});
