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

  //Скрипт добавляет/удаляет паддинг справа header при открытии/закрытии модального окна
  const btns_open_modal = document.querySelectorAll('[data-fancybox]');
  const header = document.querySelector('.header');

  for (let btn of btns_open_modal) {
    btn.addEventListener('click', function (e) {
      const lockPaddingValue = window.innerWidth - header.offsetWidth + 'px';

      header.style.paddingRight = lockPaddingValue;
    });
  }

  document.body.addEventListener('click', function (e) {
    if (e.target.closest('.fancybox__container')) {
      if (e.target.closest('.fancybox__content') && !e.target.closest('.is-close')) return;

      setTimeout(function () {
        header.style.paddingRight = '0px';
      }, 90);
    }
  });

  // Скрипт добавления еще одного инпута с именем в modal-subscribe
  const btn_add_person = document.querySelector(
    '.modal-subscribe__form__wrapper__name-block__add-person',
  );

  btn_add_person.addEventListener('click', function (e) {
    const container_inputs = document.querySelector(
      '.modal-subscribe__form__wrapper__name-block__inputs',
    );
    const inputs = document.querySelectorAll(
      '.modal-subscribe__form__wrapper__name-block__inputs__item',
    );
    //Если количество инпутов равно 5, то отключаем кнопку
    if (inputs.length === 5) {
      btn_add_person.setAttribute('disabled', true);
    } else {
      let input = document.createElement('input');
      input.className = 'modal-subscribe__form__wrapper__name-block__inputs__item';
      input.setAttribute('type', 'text');
      input.setAttribute('name', 'name');
      input.setAttribute('placeholder', 'Имя и Фамилия');
      input.setAttribute('required', true);
      container_inputs.append(input);
    }
  });

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

  //Инициализация свайпера Фото-Видео съёмка прыжка
  const main_photo_video_swiper = new Swiper('.main-photo-video-swiper', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    initialSlide: 1,
    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 16,
        slidesPerView: 3,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  });
});
