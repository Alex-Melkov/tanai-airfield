window.addEventListener('load', function () {
  // Скрипт меню бургер
  let header__burger = document.querySelector('.header-container__burger');
  let header_menu = document.querySelector('.header-container__menu');
  let lock = document.querySelector('body');
  let mask = document.querySelector('.mask');

  header__burger.onclick = function () {
    header__burger.classList.toggle('active-menu');
    header_menu.classList.toggle('active-menu');
    lock.classList.toggle('lock');
    mask.classList.toggle('mask-active');
  };
});
