// ===================================================
// Qiana Cunningham — Portfolio Script
// ===================================================

// ----- Year in footer -----
document.getElementById('year').textContent = new Date().getFullYear();

// ----- Mobile nav toggle -----
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ----- Active nav link on scroll -----
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

function setActiveLink() {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const top    = section.offsetTop - 90;
    const bottom = top + section.offsetHeight;
    const id     = section.getAttribute('id');
    const link   = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < bottom);
    }
  });
}

window.addEventListener('scroll', setActiveLink);
setActiveLink();

// ----- Contact form (client-side only) -----
// To make this form actually send emails, connect it to a backend service
// such as EmailJS, Formspree, or your own server endpoint.
const contactForm = document.getElementById('contactForm');
const formStatus  = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name    = contactForm.name.value.trim();
  const email   = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formStatus.style.color = '#f44336';
    formStatus.textContent = 'Please fill in all fields.';
    return;
  }

  // Replace this block with your actual form submission logic
  // e.g., fetch('/api/contact', { method: 'POST', body: ... })
  formStatus.style.color = '#4caf50';
  formStatus.textContent = 'Thanks for reaching out! I\'ll get back to you soon.';
  contactForm.reset();
});
