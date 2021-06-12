window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.navigation'),
          hamburger = document.querySelector('.hamburger');
        
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('navigation_active');
        hamburger.classList.toggle('hamburger_active');
    });
});