// Vanta Background
VANTA.WAVES({
  el: "#vanta-bg",
  color: 0x0077b5,
  shininess: 50,
  waveHeight: 20,
  waveSpeed: 1,
  zoom: 1
});

// Typing effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Engineer", "Researcher", "Fluid Mechanics Enthusiast"];
let textArrayIndex = 0;
let charIndex = 0;
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 250);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// Scroll animations
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));
