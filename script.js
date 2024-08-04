document.addEventListener('DOMContentLoaded', () => {
    // Select the menu button and menu
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');

    // Toggle the 'show' class on the menu when the menu button is clicked
    menuButton.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Smooth scrolling to sections
    const links = document.querySelectorAll('nav .menu a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed header height
                behavior: 'smooth'
            });
            menu.classList.remove('show'); // Close the menu after clicking a link
        });
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});
