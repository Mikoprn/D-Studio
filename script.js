// navigation on mobile
const mobileMenu = document.querySelector('.mobile__menu');
const navLinks = document.querySelector('.nav__links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav__link').forEach(n => n.addEventListener('click', () =>{
    mobileMenu.classList.remove('active');
    navLinks.classList.remove('active');
}));

//close menu outsite 
document.addEventListener('click', function (event) {
    if (!mobileMenu.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

//change background nav on scroll
window.addEventListener('scroll', () => {
document.querySelector('header').classList.toggle('window-scrolled', window.scrollY > 0);
})