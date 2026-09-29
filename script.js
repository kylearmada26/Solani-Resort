const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    navToggle.innerHTML = `<i class="fas ${isOpen ? 'fa-xmark' : 'fa-bars'}" aria-hidden="true"></i>`;
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation menu');
      navToggle.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation menu');
      navToggle.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
      navToggle.focus();
    }
  });
}

const preferredDate = document.getElementById('preferredDate');
if (preferredDate) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
  preferredDate.min = localToday;
}

document.querySelectorAll('[data-package]').forEach((link) => {
  link.addEventListener('click', () => {
    const packageField = document.getElementById('package');
    if (packageField) packageField.value = link.dataset.package;
  });
});

const inquiryForm = document.getElementById('inquiryForm');
const formSuccess = document.getElementById('formSuccess');

if (inquiryForm && formSuccess) {
  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) return;

    formSuccess.classList.add('visible');
    inquiryForm.reset();
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
