AOS.init();
const menuIcon = document.querySelector('.ri-menu-line');
const sideNav = document.getElementById('side-nav');

menuIcon.addEventListener('click', () => {
    sideNav.classList.toggle('nav-slide-in');

    if (sideNav.classList.contains('nav-slide-out')) {
        sideNav.classList.remove('nav-slide-out');
    } else {
        sideNav.classList.add('nav-slide-out');
    }
});
document.addEventListener('click', (e) => {
    console.log(e.target)
    if (!e.target.classList.contains('tagName')) {
        sideNav.classList.remove('nav-slide-in');
        sideNav.classList.add('nav-slide-out');
    }
})