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
const window_width = document.documentElement.clientWidth;
let animated_skull_down = false;
const case__scroller_btn_back = document.querySelector(".case__scroller-btn_back");
const case__scroller_btn_next = document.querySelector(".case__scroller-btn_next");
const case_counter_btn = document.querySelectorAll('.case__counter-btn');
const case_counter_container = document.querySelector('.case__counter');
const case_items = document.querySelector('.case__items');
let case__items_translate = 0;
const case_description_items = document.querySelector('.case__description__items');
case_description_items_traanslate = 0;
let case_count = 0;

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
    skull_img.style.animation = "skull_down 0.5s ease-in-out forwards 0.5s";
    shift_2.style.animation = "shift-down 0.5s ease-in-out forwards 1.2s";
    shift_4.style.animation = "shift-down 0.5s ease-in-out forwards 1.4s";
    shift_1.style.animation = "shift-down 0.5s ease-in-out forwards 1.6s";
    shift_3.style.animation = "shift-down 0.5s ease-in-out forwards 1.8s";
}

function skull_animation_jump () { 

    shift_2.style.transform = 'translateY(0)';
    shift_4.style.transform = 'translateY(0)';
    shift_1.style.transform = 'translateY(0)';
    shift_3.style.transform = 'translateY(0)';

    shift_2.style.animation = "shift-jump 6s ease-in-out infinite 0.1s";
    shift_4.style.animation = "shift-jump 6s ease-in-out infinite 0.2s";
    shift_1.style.animation = "shift-jump 6s ease-in-out infinite 0.3s";
    shift_3.style.animation = "shift-jump 6s ease-in-out infinite 0.4s";
}

function skull_animation() {
    if (window_width >= 1194 && !animated_skull_down) {
        skull_animation_down();
        animated_skull_down = true;
        setTimeout(skull_animation_jump, 3000);
    }
    else {
        if (window.scrollY > 200 && !animated_skull_down) {
            skull_animation_down();
            anideted_skull_down = true;
            setTimeout(skull_animation_jump, 3000);
        }
    }
}

function next_case () {
    if (case_count >= 0 && case_count < 3) {
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_count++;
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case__items_translate -= 346;
        case_items.style.transform = `translateX(${case__items_translate}px)`;
        case_description_items_traanslate -= 360;
        case_description_items.style.transform = `translateX(${case_description_items_traanslate}px)`;
    }
    else if (case_count == 3) {
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_count++;
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_counter_container.style.transform = 'translateX(-45px)';
        case__items_translate -= 345;
        case_items.style.transform = 'translateX(${case__items_translate}px)';
        case_description_items_traanslate -= 360;
        case_description_items.style.transform = `translateX(${case_description_items_traanslate}px)`;
    }
    else if (case_count == 4) {
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_count++;
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_counter_container.style.transform = 'translateX(-125px)';
        case__items_translate -= 346;
        case_items.style.transform = `translateX(${case__items_translate}px)`;
        case_description_items_traanslate -= 360;
        case_description_items.style.transform = `translateX(${case_description_items_traanslate}px)`;
    }
    else if (case_count == 5) {
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_count++;
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_counter_container.style.transform = 'translateX(-205px)';
        case__items_translate -= 346;
        case_items.style.transform = `translateX(${case__items_translate}px)`;
        case_description_items_traanslate -= 360;
        case_description_items.style.transform = `translateX(${case_description_items_traanslate}px)`;
    }
    else if (case_count == 6) {
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_count++;
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_counter_container.style.transform = 'translateX(-285px)';
        case__items_translate -= 346;
        case_items.style.transform = `translateX(${case__items_translate}px)`;
        case_description_items_traanslate -= 360;
        case_description_items.style.transform = `translateX(${case_description_items_traanslate}px)`;
    }
}

function back_case () {
    if (case_count <= 7 && case_count > 4) {
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_count--;
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case__items_translate += 346;
        case_items.style.transform = `translateX(${case__items_translate}px)`;
        case_description_items_traanslate += 360;
        case_description_items.style.transform = `translateX(${case_description_items_traanslate}px)`;
    }
    else if (case_count == 4) {
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_count--;
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_counter_container.style.transform = 'translateX(-245px)';
        case__items_translate += 346;
        case_items.style.transform = `translateX(${case__items_translate}px)`;
        case_description_items_traanslate += 360;
        case_description_items.style.transform = `translateX(${case_description_items_traanslate}px)`;
    }
    else if (case_count == 3) {
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_count--;
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_counter_container.style.transform = 'translateX(-165px)';
        case__items_translate += 346;
        case_items.style.transform = `translateX(${case__items_translate}px)`;
        case_description_items_traanslate += 360;
        case_description_items.style.transform = `translateX(${case_description_items_traanslate}px)`;
    }
    else if (case_count == 2) {
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_count--;
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_counter_container.style.transform = 'translateX(-90px)';
        case__items_translate += 346;
        case_items.style.transform = `translateX(${case__items_translate}px)`;
        case_description_items_traanslate += 360;
        case_description_items.style.transform = `translateX(${case_description_items_traanslate}px)`;
    }
    else if (case_count == 1) {
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_count--;
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case__items_translate += 346;
        case_items.style.transform = `translateX(${case__items_translate}px)`;
        case_counter_container.style.transform = 'translateX(0)';
        case_description_items_traanslate += 360;
        case_description_items.style.transform = `translateX(${case_description_items_traanslate}px)`;
    }
}


btn__openMenu.addEventListener('click', open_close__menu);
window.addEventListener("scroll", skull_animation);
skull_animation();
case__scroller_btn_next.addEventListener('click', next_case);
case__scroller_btn_back.addEventListener('click', back_case);