document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({behavior: 'smooth'});
      }
    });
  });

  // Contact form submission simulation
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  form.addEventListener('submit', e => {
    e.preventDefault();

    feedback.textContent = 'Sending...';
    setTimeout(() => {
      feedback.textContent = 'Thank you for your message! I will get back to you soon.';
      form.reset();
    }, 1500);
  });
});
