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
let window_width = document.documentElement.clientWidth;
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

const case_counter_container = document.querySelector('.case__counter');
const case_description_items = document.querySelector('.case__description__items');
const case_items = document.querySelector('.case__items');
const case_counter_btn = document.querySelectorAll('.case__counter-btn');
let case_count = 0;
const case__scroller_btn_back = document.querySelector(".case__scroller-btn_back");
const case__scroller_btn_next = document.querySelector(".case__scroller-btn_next");

const case__slider_back_btn = document.querySelector('.case__slider-back_btn');
const case__slider_next_btn = document.querySelector('.case__slider-next_btn');

function next_case () {
    if (case_count >= 0 && case_count < case_counter_btn.length - 1) {
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_count++;
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_items.style.transform = `translateX(${case_count * -100}%)`;
        case_description_items.style.transform = `translateX(${case_count * -100}%)`;
        window_width = document.documentElement.clientWidth;
        if (window_width >= 1194) {
            case_counter_container.style.transform = `translateX(${case_count * -3}%)`;
        }
        else {
            case_counter_container.style.transform = `translateX(${case_count * -12}%)`;
        }
    }
}

function back_case () {
    if (case_count <= case_counter_btn.length - 1 && case_count >= 1) {
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_count--;
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_items.style.transform = `translateX(${case_count * -100}%)`;
        case_description_items.style.transform = `translateX(${case_count * -100}%)`;
        window_width = document.documentElement.clientWidth;
        if (window_width >= 1194) {
            case_counter_container.style.transform = `translateX(${case_count * -3}%)`;
        }
        else {
            case_counter_container.style.transform = `translateX(${case_count * -12}%)`;
        }
    }
}

function view_case (count) {
    case_items.style.transform = `translateX(${count * -100}%)`;
    case_description_items.style.transform = `translateX(${count * -100}%)`;
    window_width = document.documentElement.clientWidth;
    if (window_width >= 1194) {
        case_counter_container.style.transform = `translateX(${count * -3}%)`;
    }
    else {
        case_counter_container.style.transform = `translateX(${count * -12}%)`;
    }
    case_count = count;
}

case_counter_btn.forEach ((btn, index) => {
    btn.addEventListener("click", () => {
        case_counter_btn[case_count].classList.toggle('case__counter-btn_active');
        case_counter_btn[index].classList.toggle('case__counter-btn_active');
        case_items.style.transform = `translateX(${index * -100}%)`;
        case_description_items.style.transform = `translateX(${index * -100}%)`;
        window_width = document.documentElement.clientWidth;
        if (window_width >= 1194) {
            case_counter_container.style.transform = `translateX(${index * -3}%)`;
        }
        else {
            case_counter_container.style.transform = `translateX(${index * -12}%)`;
        }
        case_count = index;
    })
});


const diplomas_items = document.querySelectorAll('.diplomas__container--item');
const diplomas_btn_next = document.querySelector('.diplomas__nav-btn_next');
const diplomas_btn_back = document.querySelector('.diplomas__nav-btn_back');
let diplomas_count = 0;

function next_diplom() {
    let diplomas_container = document.querySelector('.diplomas__container');
    const containerRect = diplomas_container.getBoundingClientRect();
    
    for (let i = 0; i < diplomas_items.length; i++) {
        const rect = diplomas_items[i].getBoundingClientRect();
        
        // Правильная проверка: элемент за правым краем КОНТЕЙНЕРА
        if (rect.left > containerRect.right || i === diplomas_items.length - 1) {
            diplomas_items[i].scrollIntoView({ behavior: 'smooth', inline: 'end'});
            diplomas_count = i;
            return;
        }
    }
}

function back_diplom() {
    let diplomas_container = document.querySelector('.diplomas__container');
    const containerRect = diplomas_container.getBoundingClientRect();
    
    for (let i = diplomas_items.length - 1; i >= 0; i--) {
        const rect = diplomas_items[i].getBoundingClientRect();
        
        // Правильная проверка: элемент за левым краем КОНТЕЙНЕРА
        if (rect.right < containerRect.left || i === 0) {
            diplomas_items[i].scrollIntoView({ behavior: 'smooth', inline: 'start'});
            diplomas_count = i;
            return;
        }
    }
}



diplomas_btn_back.addEventListener('click', back_diplom);
diplomas_btn_next.addEventListener('click', next_diplom);
btn__openMenu.addEventListener('click', open_close__menu);
window.addEventListener("scroll", skull_animation);
skull_animation();
case__scroller_btn_next.addEventListener('click', next_case);
case__scroller_btn_back.addEventListener('click', back_case);
case__slider_back_btn.addEventListener('click', back_case);
case__slider_next_btn.addEventListener('click', next_case); 
