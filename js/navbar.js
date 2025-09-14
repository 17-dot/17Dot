// navbar.js
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;

  if (!hamburger || !mobileMenu) {
    console.error('Hamburger or mobile menu element not found');
    return;
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    if (mobileMenu.classList.contains('active')) {
      body.style.overflow = 'hidden';
      mobileMenu.setAttribute('aria-hidden', 'false');
    } else {
      body.style.overflow = '';
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      body.style.overflow = '';
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });

  mobileMenu.addEventListener('click', e => {
    if (e.target === mobileMenu) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      body.style.overflow = '';
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      body.style.overflow = '';
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      body.style.overflow = '';
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
  });
}

function loadNavbar() {
  fetch('navbar.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      console.log('Navbar HTML loaded');
      const container = document.getElementById('navbar-container');
      if (!container) {
        console.error('#navbar-container element not found');
        return;
      }
      container.innerHTML = data;
      initMobileMenu();
    })
    .catch(error => console.error('Error loading navbar:', error));
}



// Export or call loadNavbar() as needed
