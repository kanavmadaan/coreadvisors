(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');
  const year = document.querySelector('#year');

  if (year) year.textContent = new Date().getFullYear();

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Contact form -> mailto (no backend needed)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const email = data.get('email') || '';
      const type = data.get('type') || '';
      const message = data.get('message') || '';

      const subject = encodeURIComponent(`CoreAdvisors Inquiry — ${type}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nBusiness Type: ${type}\n\nMessage:\n${message}\n`
      );

      window.location.href = `mailto:hello@coreadvisors.ca?subject=${subject}&body=${body}`;
    });
  }
})();