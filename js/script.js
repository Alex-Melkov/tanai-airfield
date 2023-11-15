window.addEventListener("load",(function(){let e=document.querySelector(".header-container__burger"),t=document.querySelector(".header-container__menu"),n=document.querySelector("body"),i=document.querySelector(".mask");e.onclick=function(){e.classList.toggle("active-menu"),t.classList.toggle("active-menu"),n.classList.toggle("lock"),i.classList.toggle("mask-active")};const o=document.querySelectorAll("[data-fancybox]"),c=document.querySelector(".header");for(let e of o)e.addEventListener("click",(function(e){let t=window.innerWidth-c.offsetWidth+"px";n.classList.add("lock"),c.style.paddingRight=t}));document.body.addEventListener("click",(function(e){if(e.target.closest(".fancybox__container")){if(e.target.closest(".fancybox__content")&&!e.target.closest(".is-close"))return;setTimeout((function(){c.style.paddingRight="0px",n.classList.remove("lock")}),90)}}));const a=document.querySelector(".modal-subscribe__form__wrapper__name-block__buttons__add-person"),r=document.querySelector(".modal-subscribe__form__wrapper__name-block__buttons__remove-person");a.addEventListener("click",(function(e){const t=document.querySelector(".modal-subscribe__form__wrapper__name-block__inputs"),n=document.querySelectorAll(".modal-subscribe__form__wrapper__name-block__inputs__item");function i(){let e=document.createElement("input");e.className="modal-subscribe__form__wrapper__name-block__inputs__item",e.setAttribute("type","text"),e.setAttribute("name","name"),e.setAttribute("placeholder","Имя и Фамилия"),e.setAttribute("required",!0),t.append(e)}r.classList.contains("hidden")&&r.classList.remove("hidden"),n.length<4?i():4===n.length&&(i(),a.setAttribute("disabled",!0))})),r.addEventListener("click",(function(e){const t=document.querySelectorAll(".modal-subscribe__form__wrapper__name-block__inputs__item");function n(e){e.remove()}t.length>2?(5===t.length&&a.removeAttribute("disabled"),n(t[t.length-1])):2===t.length&&(n(t[t.length-1]),r.classList.add("hidden"))}));const s=document.querySelectorAll("a[data-anchor]");for(let e of s)e.addEventListener("click",(function(t){t.preventDefault();const n=e.getAttribute("href").slice(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}));new Swiper(".main-team-swiper",{direction:"horizontal",breakpoints:{320:{spaceBetween:24,slidesPerView:2},576:{spaceBetween:26,slidesPerView:2},768:{spaceBetween:30,slidesPerView:2}},navigation:{nextEl:".main-team-swiper-button-next",prevEl:".main-team-swiper-button-prev"}}),new Swiper(".main-airtube-swiper",{direction:"horizontal",loop:!0,centeredSlides:!0,initialSlide:1,breakpoints:{320:{spaceBetween:20,slidesPerView:1},991:{spaceBetween:50,slidesPerView:3},1920:{spaceBetween:50,slidesPerView:3}},pagination:{el:".main-airtube-swiper-pagination",clickable:!0},navigation:{nextEl:".main-airtube-swiper-button-next",prevEl:".main-airtube-swiper-button-prev"}}),new Swiper(".main-photo-video-swiper",{direction:"horizontal",loop:!0,centeredSlides:!0,initialSlide:1,breakpoints:{320:{spaceBetween:10,slidesPerView:3},768:{spaceBetween:16,slidesPerView:3},1200:{spaceBetween:15,slidesPerView:3},1920:{spaceBetween:30,slidesPerView:3}},scrollbar:{el:".swiper-scrollbar",draggable:!0}}),new Swiper(".corporate-clients-top-swiper-1",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:30,pagination:{el:".corporate-clients-top-swiper-1-pagination",clickable:!0}}),new Swiper(".corporate-clients-top-swiper-2",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:30,pagination:{el:".corporate-clients-top-swiper-2-pagination",clickable:!0}}),new Swiper(".corporate-clients-bottom-swiper",{direction:"horizontal",loop:!0,breakpoints:{320:{spaceBetween:20,slidesPerView:1},991:{spaceBetween:25,slidesPerView:3}},pagination:{el:".corporate-clients-bottom-swiper-pagination",clickable:!0}});let l=document.getElementById("map-1");l&&DG.then((function(){l=DG.map("map-1",{center:[54.760303,85.112495],zoom:13}),mapicon=DG.icon({iconUrl:"img/pin.svg",iconAnchor:[71,67],popupAnchor:[0,20],className:"map-1-icon",iconSize:[141,67]}),DG.marker([54.760303,85.112495],{icon:mapicon}).addTo(l)}));let p=document.getElementById("map-2");p&&DG.then((function(){p=DG.map("map-2",{center:[54.924019,83.000317],zoom:13}),mapicon=DG.icon({iconUrl:"img/pin.svg",iconAnchor:[71,67],popupAnchor:[0,20],className:"map-2-icon",iconSize:[141,67]}),DG.marker([54.924019,83.000317],{icon:mapicon}).addTo(p)}));let d=document.getElementById("map-3");d&&DG.then((function(){d=DG.map("map-3",{center:[55.356488,86.120525],zoom:13}),mapicon=DG.icon({iconUrl:"img/pin.svg",iconAnchor:[71,67],popupAnchor:[0,20],className:"map-3-icon",iconSize:[141,67]}),DG.marker([55.356488,86.120525],{icon:mapicon}).addTo(d)}));let m=document.getElementById("map-4");m&&DG.then((function(){m=DG.map("map-4",{center:[54.754724,85.114861],zoom:13}),mapicon=DG.icon({iconUrl:"img/pin.svg",iconAnchor:[71,67],popupAnchor:[0,20],className:"map-4-icon",iconSize:[141,67]}),DG.marker([54.754724,85.114861],{icon:mapicon}).addTo(m)})),Fancybox.bind("[data-fancybox]",{dragToClose:!1});let u=document.querySelectorAll(".contacts-bottom__container__content__tab-list__item"),_=document.querySelectorAll(".contacts-bottom__container__content__adress__item"),b=[];for(let e=0;e<u.length;e++)b.push(u[e]);document.querySelector(".contacts-bottom__container__content__tab-list").addEventListener("click",(e=>{if("LI"!==e.target.tagName)return!1;let t=e.target.dataset.filter.slice(-1),n=e.target.dataset.filter;_.forEach((e=>{e.classList.remove("visible"),e.classList.contains(n)&&e.classList.add("visible")})),u.forEach((e=>{e.classList.remove("active-tab"),b[t].classList.contains("active-tab")||b[t].classList.add("active-tab")}))}))}));