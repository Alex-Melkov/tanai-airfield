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

  // Скрипт плавного перехода по якорям
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').slice(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  //Инициализация свайпера Команда
  const main_team_slide = new Swiper('.main-team-swiper', {
    direction: 'horizontal',
    breakpoints: {
      320: {
        spaceBetween: 24,
        slidesPerView: 2,
      },
      576: {
        spaceBetween: 26,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: '.main-team-swiper-button-next',
      prevEl: '.main-team-swiper-button-prev',
    },
  });

  //Инициализация свайпера Аэротруба
  const main_airtube_swiper = new Swiper('.main-airtube-swiper', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    initialSlide: 1,
    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      1920: {
        spaceBetween: 50,
        slidesPerView: 3,
      },
    },
    pagination: {
      el: '.main-airtube-swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.main-airtube-swiper-button-next',
      prevEl: '.main-airtube-swiper-button-prev',
    },
  });
});
