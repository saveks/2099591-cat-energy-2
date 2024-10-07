const navMain = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-navigation__toggle');

navMain.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-navigation--close')) {
    navMain.classList.remove('main-navigation--close');
    navMain.classList.add('main-navigation--open');
  } else {
    navMain.classList.add('main-navigation--close');
    navMain.classList.remove('main-navigation--open');
  }
});
