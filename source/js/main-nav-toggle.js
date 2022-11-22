const menuToggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');

mainNav.classList.remove('main-nav--nojs');

menuToggle.addEventListener('click', function() {
  mainNav.classList.toggle('main-nav--opened');
  mainNav.classList.toggle('main-nav--closed');
});
