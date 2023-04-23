const navbarMenu = document.querySelector('.navbar-menu'),
    menuIcon = navbarMenu.querySelector('i'),
    menuItems = navbarMenu.querySelectorAll('.menu-items .item'),
    login = document.querySelector('.login');

navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    login.classList.toggle('expand');
    if (menuIcon.className === 'bx bx-menu') {
        menuIcon.className = 'bx bx-x';
    } else {
        menuIcon.className = 'bx bx-menu';
    }
});

menuItems.forEach(item => {
    navbarMenu.classList.remove('active');
})

