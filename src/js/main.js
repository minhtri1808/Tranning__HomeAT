import { getSVGs, Loading } from "./utilities/util";
import Fullpage from "./libraries/Fullpage";
import Axios from "axios";



const initSwiperProject = () => {
    const swiperProject = new Swiper(".swiper__wrapper .swiper-container", {
        speed: 1000,
        spaceBetween: 24,
        slidesPerView: 2.5,
        pagination: {
            el: '.swiper__wrapper .swiper-pagination-1',
            type: 'bullets',
            clickable: true,
        },
    });
}
const initSwiperTaget = () => {
    const swiperTaget = new Swiper(".target__wrapper .swiper-container", {
        speed: 1000,
        pagination: {
            el: '.target__wrapper .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '#next',
            prevEl: '#prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            1025: {
                slidesPerView: 4,
                spaceBetween: 24
            }
        }
    });
}
const initSwiperInvestment = () => {
    const swiperInvestment = new Swiper(".content__desc .swiper-container", {
        speed: 1000,
        spaceBetween: 24,
        slidesPerView: 4,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            1025: {
                slidesPerView: 4,
                spaceBetween: 24
            }
        }
    })
}
const initSwiperProducer = () => {
    const swiperProducer = new Swiper(".producer__wrapper .swiper-container", {
        speed: 1000,
        spaceBetween: 24,
        slidesPerView: 7,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.producer__wrapper .swiper-button-next',
            prevEl: '.producer__wrapper .swiper-button-prev',
        },
    });
}
const menu = () => {
    const menu = document.querySelector("#menuRes");
    const bot = document.querySelector(".header__bottom");
    const social = document.querySelector(".footer__Isocial");
    if (menu) {
        menu.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(1);
            bot.classList.toggle("active");
            social.classList.toggle("active");
        });
    }
}
const scroll = () => {
    window.onscroll = function() { scrollFunction() };
    const button = document.querySelector("#go-top");

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }

    if (button) {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        })
    }
}
document.addEventListener("DOMContentLoaded", () => {
    getSVGs();
    Loading();
    menu();
    initSwiperProject();
    initSwiperTaget();
    initSwiperInvestment();
    initSwiperProducer();
    scroll();
});