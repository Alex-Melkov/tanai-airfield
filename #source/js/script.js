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
  //===================================================================================

  //Скрипт добавляет/удаляет паддинг справа header при открытии/закрытии модального окна
  const btns_open_modal = document.querySelectorAll('[data-fancybox]');
  const header = document.querySelector('.header');

  for (let btn of btns_open_modal) {
    btn.addEventListener('click', function (e) {
      let lockPaddingValue = window.innerWidth - header.offsetWidth + 'px';

      lock.classList.add('lock');
      header.style.paddingRight = lockPaddingValue;
    });
  }

  document.body.addEventListener('click', function (e) {
    if (e.target.closest('.fancybox__container')) {
      if (e.target.closest('.fancybox__content') && !e.target.closest('.is-close')) return;

      setTimeout(function () {
        header.style.paddingRight = '0px';
        lock.classList.remove('lock');
      }, 90);
    }
  });
  //===================================================================================

  // Скрипт добавления еще одного инпута с именем в modal-subscribe
  const btn_add_person = document.querySelector(
    '.modal-subscribe__form__wrapper__name-block__buttons__add-person',
  );
  const btn_remove_person = document.querySelector(
    '.modal-subscribe__form__wrapper__name-block__buttons__remove-person',
  );

  btn_add_person.addEventListener('click', function (e) {
    const container_inputs = document.querySelector(
      '.modal-subscribe__form__wrapper__name-block__inputs',
    );
    const inputs = document.querySelectorAll(
      '.modal-subscribe__form__wrapper__name-block__inputs__item',
    );

    function addInput() {
      let input = document.createElement('input');
      input.className = 'modal-subscribe__form__wrapper__name-block__inputs__item';
      input.setAttribute('type', 'text');
      input.setAttribute('name', 'name');
      input.setAttribute('placeholder', 'Имя и Фамилия');
      input.setAttribute('required', true);
      container_inputs.append(input);
    }

    if (btn_remove_person.classList.contains('hidden')) {
      btn_remove_person.classList.remove('hidden');
    }

    if (inputs.length < 4) {
      addInput();
    } else if (inputs.length === 4) {
      addInput();
      btn_add_person.setAttribute('disabled', true);
    }
  });

  // Скрипт удаления одного инпута с именем из modal-subscribe
  btn_remove_person.addEventListener('click', function (e) {
    const inputs = document.querySelectorAll(
      '.modal-subscribe__form__wrapper__name-block__inputs__item',
    );

    function removeInput(input) {
      input.remove();
    }

    if (inputs.length > 2) {
      if (inputs.length === 5) {
        btn_add_person.removeAttribute('disabled');
      }
      removeInput(inputs[inputs.length - 1]);
    } else if (inputs.length === 2) {
      removeInput(inputs[inputs.length - 1]);
      btn_remove_person.classList.add('hidden');
    }
  });
  //===================================================================================

  // Скрипт плавного перехода по якорям
  const anchors = document.querySelectorAll('a[data-anchor]');

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
  //===================================================================================

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
  //===================================================================================

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
      991: {
        spaceBetween: 50,
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
  //===================================================================================

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
        spaceBetween: 15,
        slidesPerView: 3,
      },
      1920: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
  //===================================================================================

  //Инициализация свайпера Корпоративы
  const corporate_clients_top_swiper_1 = new Swiper('.corporate-clients-top-swiper-1', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.corporate-clients-top-swiper-1-pagination',
      clickable: true,
    },
  });
  //===================================================================================

  //Инициализация свайпера Свадебные торжества
  const corporate_clients_top_swiper_2 = new Swiper('.corporate-clients-top-swiper-2', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.corporate-clients-top-swiper-2-pagination',
      clickable: true,
    },
  });
  //===================================================================================

  //Инициализация свайпера Конференц-зал
  const corporate_clients_bottom_swiper = new Swiper('.corporate-clients-bottom-swiper', {
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      991: {
        spaceBetween: 25,
        slidesPerView: 3,
      },
    },
    pagination: {
      el: '.corporate-clients-bottom-swiper-pagination',
      clickable: true,
    },
  });
  //===================================================================================

  //Инициализация мини-карты
  let map = document.getElementById('map');

  if (map) {
    DG.then(function () {
      map = DG.map('map', {
        center: [54.760303, 85.112495],
        zoom: 13,
      });
      mapicon = DG.icon({
        iconUrl: 'img/pin.svg' /* Иконка маркера */,
        iconAnchor: [71, 67],
        popupAnchor: [0, 20],
        className: 'map-icon',
        iconSize: [141, 67] /* Размер иконки */,
      });
      DG.marker([54.760303, 85.112495], { icon: mapicon }).addTo(map); /* Координаты маркера */
    });
  }
  //===================================================================================

  //Отключаем перетаскивание у модалок
  Fancybox.bind('[data-fancybox]', {
    dragToClose: false,
  });
});
