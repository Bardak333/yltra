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

case__scroller_btn_next.addEventListener('click', next_case);
case__slider_next_btn.addEventListener('click', next_case);

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

case__scroller_btn_back.addEventListener('click', back_case);
case__slider_back_btn.addEventListener('click', back_case);
 
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