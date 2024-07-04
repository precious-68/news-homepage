// Add any necessary JavaScript here for responsiveness (e.g., toggling menus)

// Example: Responsive menu toggle (if needed)
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});
