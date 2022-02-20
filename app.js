const mobileMenu = document.querySelector('.mobile-menu')
const navBar = document.querySelector('.main-header__nav-bar__nav-links')




mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('toggle')
    navBar.classList.toggle('nav-bar--active')
})