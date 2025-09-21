const header__wraper = document.querySelector('.header__wraper');
const btn__openMenu = document.querySelector('.header__menu');
const header__aplication = document.querySelector('.header__application');
const header = document.querySelector('.header');
const container = document.querySelector('.container');
const mobile__menu = document.querySelector('.header__mobile__menu');
const body = document.querySelector('.scroll');
const skull_img = document.querySelector(".skull_img");
const shift_1 = document.querySelector(".shift_img-1");
const shift_2 = document.querySelector(".shift_img-2");
const shift_3 = document.querySelector(".shift_img-3");
const shift_4 = document.querySelector(".shift_img-4");
let anideted_skull_up = false;
let animated_skull_down = false;

function open_close__menu() {
    header.classList.toggle('header-open');
    container.classList.toggle('container-open');
    header__aplication.classList.toggle('header__aplication-open');
    header__wraper.classList.toggle('header__wraper-open');
    btn__openMenu.classList.toggle('header__menu-open');
    mobile__menu.classList.toggle('header__mobile__menu-open');
    body.classList.toggle('scroll-off');
}

function skull_animation_down () {
    skull_img.style.animation = "skull_down 0.7s ease-in-out forwards";
    shift_2.style.animation = "shift-down 0.5s ease-in-out forwards 0.6s";
    shift_4.style.animation = "shift-down 0.5s ease-in-out forwards 0.8s";
    shift_1.style.animation = "shift-down 0.5s ease-in-out forwards 1s";
    shift_3.style.animation = "shift-down 0.5s ease-in-out forwards 1.2s";
}

function skull_animation_up () {
    shift_2.style.animation = "shift-up 0.7s ease-in-out forwards";
    shift_4.style.animation = "shift-up 0.7s ease-in-out forwards";
    shift_1.style.animation = "shift-up 0.7s ease-in-out forwards";
    shift_3.style.animation = "shift-up 0.7s ease-in-out forwards";
    skull_img.style.animation = "skull_up 0.7s ease-in-out forwards";
}

function skull_amination() {
    if (window.scrollY > 550 && !anideted_skull_up) {
        skull_animation_up();
        anideted_skull_up = true;
        animated_skull_down = false;
    } else if (window.scrollY > 200 && window.scrollY <= 500 && !animated_skull_down) {
        skull_animation_down();
        anideted_skull_down = true;
        anideted_skull_up = false;
    } else if (window.scrollY <= 200) {
        anideted_skull_up = false;
        animated_skull_down = false;
    }
}


btn__openMenu.addEventListener('click', open_close__menu);
window.addEventListener("scroll", skull_amination);
skull_amination();
