const menuToggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', function() {
  mainNav.classList.toggle('main-nav--opened');
  mainNav.classList.toggle('main-nav--closed');
});
