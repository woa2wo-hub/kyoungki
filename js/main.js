/* =====================================================
   PORTFOLIO JS — main.js
   ===================================================== */

// ── THEME TOGGLE (다크 기본값) ──
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('portfolioTheme') || 'dark';

if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    localStorage.setItem('portfolioTheme', isLight ? 'light' : 'dark');
  });
}

// ── NAV SCROLL ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ── FILTER ──
// 
const filterBtns = document.querySelectorAll('.filter__btn');
const cards = document.querySelectorAll('.card[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      const cat = card.dataset.category;
      const show = filter === 'all' || cat === filter;
      if (show) {
        card.classList.remove('card--hidden');
        card.style.display = 'flex';
      } else {
        card.classList.add('card--hidden');
        card.style.display = 'none';
      }
    });

    // featured 카드 grid-column: all/app일 때만 span 2
    cards.forEach(card => {
      if (card.classList.contains('card--featured')) {
        card.style.gridColumn = (filter === 'all' || filter === 'app') ? '' : 'span 1';
      }
    });
  });
});

// ── SCROLL FADE-UP ──
const fadeEls = document.querySelectorAll(
  '.hero__content, .about__grid, .works__title, .filter, .contact__inner, .intro__grid, .video-section__title, .video-grid'
);
fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
fadeEls.forEach(el => observer.observe(el));

// 카드 stagger 
const cardArr = Array.from(cards);
cardArr.forEach(card => card.classList.add('card-fade'));

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const i = cardArr.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('card-visible'), i * 60);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });
cardArr.forEach(el => cardObserver.observe(el));

// ── ACTIVE NAV LINK ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current
      ? 'var(--accent)'
      : '';
  });
});
