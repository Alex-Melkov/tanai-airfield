window.addEventListener("load",(function(){let e=document.querySelector(".header-container__burger"),t=document.querySelector(".header-container__menu"),i=document.querySelector("body"),n=document.querySelector(".mask");e.onclick=function(){e.classList.toggle("active-menu"),t.classList.toggle("active-menu"),i.classList.toggle("lock"),n.classList.toggle("mask-active")};const r=document.querySelectorAll("[data-fancybox]"),o=document.querySelector(".header");for(let e of r)e.addEventListener("click",(function(e){const t=window.innerWidth-o.offsetWidth+"px";o.style.paddingRight=t}));document.body.addEventListener("click",(function(e){if(e.target.closest(".fancybox__container")){if(e.target.closest(".fancybox__content")&&!e.target.closest(".is-close"))return;setTimeout((function(){o.style.paddingRight="0px"}),90)}}));const s=document.querySelector(".modal-subscribe__form__wrapper__name-block__add-person");s.addEventListener("click",(function(e){const t=document.querySelector(".modal-subscribe__form__wrapper__name-block__inputs");if(5===document.querySelectorAll(".modal-subscribe__form__wrapper__name-block__inputs__item").length)s.setAttribute("disabled",!0);else{let e=document.createElement("input");e.className="modal-subscribe__form__wrapper__name-block__inputs__item",e.setAttribute("type","text"),e.setAttribute("name","name"),e.setAttribute("placeholder","Имя и Фамилия"),e.setAttribute("required",!0),t.append(e)}}));const a=document.querySelectorAll('a[href*="#"]');for(let e of a)e.addEventListener("click",(function(t){t.preventDefault();const i=e.getAttribute("href").slice(1);document.getElementById(i).scrollIntoView({behavior:"smooth",block:"start"})}));new Swiper(".main-team-swiper",{direction:"horizontal",breakpoints:{320:{spaceBetween:24,slidesPerView:2},576:{spaceBetween:26,slidesPerView:2},768:{spaceBetween:30,slidesPerView:2}},navigation:{nextEl:".main-team-swiper-button-next",prevEl:".main-team-swiper-button-prev"}}),new Swiper(".main-airtube-swiper",{direction:"horizontal",loop:!0,centeredSlides:!0,initialSlide:1,breakpoints:{320:{spaceBetween:20,slidesPerView:1},1200:{spaceBetween:30,slidesPerView:3},1920:{spaceBetween:50,slidesPerView:3}},pagination:{el:".main-airtube-swiper-pagination",clickable:!0},navigation:{nextEl:".main-airtube-swiper-button-next",prevEl:".main-airtube-swiper-button-prev"}}),new Swiper(".main-photo-video-swiper",{direction:"horizontal",loop:!0,centeredSlides:!0,initialSlide:1,breakpoints:{320:{spaceBetween:10,slidesPerView:3},768:{spaceBetween:16,slidesPerView:3},1200:{spaceBetween:30,slidesPerView:3}}})}));