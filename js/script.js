window.addEventListener("load",(function(){let e=document.querySelector(".header-container__burger"),t=document.querySelector(".header-container__menu"),i=document.querySelector("body"),n=document.querySelector(".mask");e.onclick=function(){e.classList.toggle("active-menu"),t.classList.toggle("active-menu"),i.classList.toggle("lock"),n.classList.toggle("mask-active")};const o=document.querySelectorAll("[data-fancybox]"),r=document.querySelector(".header");for(let e of o)e.addEventListener("click",(function(e){let t=window.innerWidth-r.offsetWidth+"px";i.classList.add("lock"),r.style.paddingRight=t}));document.body.addEventListener("click",(function(e){if(e.target.closest(".fancybox__container")){if(e.target.closest(".fancybox__content")&&!e.target.closest(".is-close"))return;setTimeout((function(){r.style.paddingRight="0px",i.classList.remove("lock")}),90)}}));const a=document.querySelector(".modal-subscribe__form__wrapper__name-block__buttons__add-person"),c=document.querySelector(".modal-subscribe__form__wrapper__name-block__buttons__remove-person");a.addEventListener("click",(function(e){const t=document.querySelector(".modal-subscribe__form__wrapper__name-block__inputs"),i=document.querySelectorAll(".modal-subscribe__form__wrapper__name-block__inputs__item");function n(){let e=document.createElement("input");e.className="modal-subscribe__form__wrapper__name-block__inputs__item",e.setAttribute("type","text"),e.setAttribute("name","name"),e.setAttribute("placeholder","Имя и Фамилия"),e.setAttribute("required",!0),t.append(e)}c.classList.contains("hidden")&&c.classList.remove("hidden"),i.length<4?n():4===i.length&&(n(),a.setAttribute("disabled",!0))})),c.addEventListener("click",(function(e){const t=document.querySelectorAll(".modal-subscribe__form__wrapper__name-block__inputs__item");function i(e){e.remove()}t.length>2?(5===t.length&&a.removeAttribute("disabled"),i(t[t.length-1])):2===t.length&&(i(t[t.length-1]),c.classList.add("hidden"))}));const s=document.querySelectorAll("a[data-anchor]");for(let e of s)e.addEventListener("click",(function(t){t.preventDefault();const i=e.getAttribute("href").slice(1);document.getElementById(i).scrollIntoView({behavior:"smooth",block:"start"})}));new Swiper(".main-team-swiper",{direction:"horizontal",breakpoints:{320:{spaceBetween:24,slidesPerView:2},576:{spaceBetween:26,slidesPerView:2},768:{spaceBetween:30,slidesPerView:2}},navigation:{nextEl:".main-team-swiper-button-next",prevEl:".main-team-swiper-button-prev"}}),new Swiper(".main-airtube-swiper",{direction:"horizontal",loop:!0,centeredSlides:!0,initialSlide:1,breakpoints:{320:{spaceBetween:20,slidesPerView:1},991:{spaceBetween:50,slidesPerView:3},1920:{spaceBetween:50,slidesPerView:3}},pagination:{el:".main-airtube-swiper-pagination",clickable:!0},navigation:{nextEl:".main-airtube-swiper-button-next",prevEl:".main-airtube-swiper-button-prev"}}),new Swiper(".main-photo-video-swiper",{direction:"horizontal",loop:!0,centeredSlides:!0,initialSlide:1,breakpoints:{320:{spaceBetween:10,slidesPerView:3},768:{spaceBetween:16,slidesPerView:3},1200:{spaceBetween:15,slidesPerView:3},1920:{spaceBetween:30,slidesPerView:3}},scrollbar:{el:".swiper-scrollbar",draggable:!0}}),new Swiper(".corporate-clients-top-swiper-1",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:30,pagination:{el:".corporate-clients-top-swiper-1-pagination",clickable:!0}}),new Swiper(".corporate-clients-top-swiper-2",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:30,pagination:{el:".corporate-clients-top-swiper-2-pagination",clickable:!0}});let l=document.getElementById("map");l&&DG.then((function(){l=DG.map("map",{center:[54.760303,85.112495],zoom:13}),mapicon=DG.icon({iconUrl:"img/pin.svg",iconAnchor:[71,67],popupAnchor:[0,20],className:"map-icon",iconSize:[141,67]}),DG.marker([54.760303,85.112495],{icon:mapicon}).addTo(l)})),Fancybox.bind("[data-fancybox]",{dragToClose:!1})}));