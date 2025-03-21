// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  const menu = document.querySelector('.hamburger');
  const mediaquery = window.matchMedia('(max-width:768px)');
  function HandleMenuDisplay (e) {
    if (e.matches) {
      menu.style.display = 'flex';
    } else {
      menu.style.display ='none';
    }
  }
  mediaquery.addListener(HandleMenuDisplay);
  HandleMenuDisplay(mediaquery);
  
// Scroll to Top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
// Filter Timeline Events
  function filterEvents() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const events = document.querySelectorAll('.timeline-event');
  
    events.forEach(event => {
      const content = event.textContent.toLowerCase();
      event.style.display = content.includes(searchQuery) ? 'block' : 'none';
    });
  }
  
// Gallery Image Modal
  function viewImage(img) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.onclick = () => modal.remove();
  
    const image = document.createElement('img');
    image.src = img.src;
    image.style.maxWidth = '90%';
    image.style.maxHeight = '90%';
    image.style.borderRadius = '10px';
  
    modal.appendChild(image);
    document.body.appendChild(modal);
  }
  
  
// Contact Form Submission
  function submitContactForm(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('contact-form').reset();
  }
  
