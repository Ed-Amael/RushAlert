document.addEventListener('DOMContentLoaded', () => {
  // IntersectionObserver for reveal-on-scroll
  const io = ('IntersectionObserver' in window) ? new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 }) : null;

  document.querySelectorAll('.reveal').forEach(el => {
    if (io) io.observe(el); else el.classList.add('reveal-visible');
  });

  // Video modal logic
  const modal = document.getElementById('video-modal');
  const embed = document.getElementById('video-embed');

  function openModal(url) {
    modal.setAttribute('aria-hidden', 'false');
    const safeUrl = (typeof url === 'string' && url.startsWith('https://')) ? url : 'https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1';
    embed.innerHTML = `<iframe src="${safeUrl}" title="RushAlert Demo" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    embed.innerHTML = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-video]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.getAttribute('data-video-url')));
  });
  document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal(); });

  // Simple success hash handling to focus forms upon Netlify redirect
  if (window.location.search.includes('success=true')) {
    const el = document.getElementById('waitlist');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  if (window.location.search.includes('newsletter=1')) {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
