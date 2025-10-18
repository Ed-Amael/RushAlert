// Sticky CTA show/hide on scroll
let lastScrollY = 0;
const sticky = document.getElementById('stickyCta');
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (!sticky) return;
  if (current > lastScrollY && current > 120) {
    sticky.style.transform = 'translateY(-100%)';
  } else {
    sticky.style.transform = 'translateY(0)';
  }
  lastScrollY = current;
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Simple slider controls
const track = document.getElementById('testimonialTrack');
const prevBtn = document.querySelector('.slider__btn--prev');
const nextBtn = document.querySelector('.slider__btn--next');

function slide(direction) {
  if (!track) return;
  const width = track.clientWidth;
  track.scrollBy({ left: direction * (width * 0.9), behavior: 'smooth' });
}

prevBtn && prevBtn.addEventListener('click', () => slide(-1));
nextBtn && nextBtn.addEventListener('click', () => slide(1));
