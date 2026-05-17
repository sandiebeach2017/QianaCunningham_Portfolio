const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".fade-in").forEach((element) => observer.observe(element));

const navElement = document.querySelector("nav");
const navToggleButton = document.querySelector(".nav-toggle");
const navLinksContainer = document.querySelector(".nav-links");

if (navElement && navToggleButton && navLinksContainer) {
  const setMenuState = (isOpen) => {
    navElement.classList.toggle("is-open", isOpen);
    navToggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  };

  navToggleButton.addEventListener("click", () => {
    setMenuState(!navElement.classList.contains("is-open"));
  });

  navLinksContainer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) setMenuState(false);
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) setMenuState(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
  });
}

const backToTopButton = document.querySelector("#backToTop");

const toggleBackToTopButton = () => {
  if (!backToTopButton) return;
  backToTopButton.classList.toggle("is-visible", window.scrollY > 360);
};

if (backToTopButton) {
  window.addEventListener("scroll", toggleBackToTopButton, { passive: true });
  toggleBackToTopButton();

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const skillFilterButtons = document.querySelectorAll(".skills-filter-btn");
const skillCards = document.querySelectorAll(".skill-card");

if (skillFilterButtons.length && skillCards.length) {
  skillFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;

      skillFilterButtons.forEach((btn) => {
        const isCurrent = btn === button;
        btn.classList.toggle("is-active", isCurrent);
        btn.setAttribute("aria-selected", isCurrent ? "true" : "false");
      });

      skillCards.forEach((card) => {
        const cardGroup = card.dataset.skillGroup;
        const shouldShow = selectedFilter === "all" || cardGroup === selectedFilter;
        card.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });
}
