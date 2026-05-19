const revealNodes = document.querySelectorAll(".reveal");
const scrollClassTarget = document.body;

const syncHeaderState = () => {
  if (window.scrollY > 56) {
    scrollClassTarget.classList.add("is-scrolled");
  } else {
    scrollClassTarget.classList.remove("is-scrolled");
  }
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("visible"));
}

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });
