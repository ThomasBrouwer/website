function initializeNavbar() {
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-button');
    const sideNav = document.querySelector('.side-nav');
    const overlay = document.querySelector('.overlay');

    menuButton.addEventListener('click', () => {
        sideNav.classList.add('active');
        overlay.classList.add('active');
    });

    function closeMenu() {
        sideNav.classList.remove('active');
        overlay.classList.remove('active');
    }

    closeButton.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
} 