// Vanta Background
VANTA.NET({
  el: "#vanta-bg",
  color: 0x58a6ff,
  backgroundColor: 0x0d1117,
  points: 10,
  maxDistance: 20,
  spacing: 15
});

// Fade in Scroll Animations
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));
