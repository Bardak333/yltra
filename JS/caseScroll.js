const caseCounterContainer = document.querySelector('.case__counter');
const caseDescriptionItems = document.querySelector('.case__description__items');
const caseItems = document.querySelector('.case__items');
const caseCounterBtn = document.querySelectorAll('.case__counter-btn');
let caseCount = 0;
const caseScrollerBtnBack = document.querySelector(".case__scroller-btn_back");
const caseScrollerBtnNext = document.querySelector(".case__scroller-btn_next");

const caseSliderBackBtn = document.querySelector('.case__slider-back_btn');
const caseSliderNextBtn = document.querySelector('.case__slider-next_btn');

function nextCase () {
    if (caseCount >= 0 && caseCount < caseCounterBtn.length - 1) {
        caseCounterBtn[caseCount].classList.toggle('case__counter-btn_active');
        caseCount++;
        caseCounterBtn[caseCount].classList.toggle('case__counter-btn_active');
        caseItems.style.transform = `translateX(${caseCount * -100}%)`;
        caseDescriptionItems.style.transform = `translateX(${caseCount * -100}%)`;
        windowOnWidth = document.documentElement.clientWidth;
        if (windowOnWidth >= 1194) {
            caseCounterContainer.style.transform = `translateX(${caseCount * -3}%)`;
        }
        else {
            caseCounterContainer.style.transform = `translateX(${caseCount * -12}%)`;
        }
    }
}

caseScrollerBtnNext.addEventListener('click', nextCase);
caseSliderNextBtn.addEventListener('click', nextCase);

function backCase () {
    if (caseCount <= caseCounterBtn.length - 1 && caseCount >= 1) {
        caseCounterBtn[caseCount].classList.toggle('case__counter-btn_active');
        caseCount--;
        caseCounterBtn[caseCount].classList.toggle('case__counter-btn_active');
        caseItems.style.transform = `translateX(${caseCount * -100}%)`;
        caseDescriptionItems.style.transform = `translateX(${caseCount * -100}%)`;
        windowOnWidth = document.documentElement.clientWidth;
        if (windowOnWidth >= 1194) {
            caseCounterContainer.style.transform = `translateX(${caseCount * -3}%)`;
        }
        else {
            caseCounterContainer.style.transform = `translateX(${caseCount * -12}%)`;
        }
    }
}

caseScrollerBtnBack.addEventListener('click', backCase);
caseSliderBackBtn.addEventListener('click', backCase);
 
function viewCase (count) {
    caseItems.style.transform = `translateX(${count * -100}%)`;
    caseDescriptionItems.style.transform = `translateX(${count * -100}%)`;
    windowOnWidth = document.documentElement.clientWidth;
    if (window_width >= 1194) {
        caseCounterContainer.style.transform = `translateX(${count * -3}%)`;
    }
    else {
        caseCounterContainer.style.transform = `translateX(${count * -12}%)`;
    }
    caseCount = count;
}

caseCounterBtn.forEach ((btn, index) => {
    btn.addEventListener("click", () => {
        caseCounterBtn[caseCount].classList.toggle('case__counter-btn_active');
        caseCounterBtn[index].classList.toggle('case__counter-btn_active');
        caseItems.style.transform = `translateX(${index * -100}%)`;
        caseDescriptionItems.style.transform = `translateX(${index * -100}%)`;
        windowOnWidth = document.documentElement.clientWidth;
        if (windowOnWidth >= 1194) {
            caseCounterContainer.style.transform = `translateX(${index * -3}%)`;
        }
        else {
            caseCounterContainer.style.transform = `translateX(${index * -12}%)`;
        }
        caseCount = index;
    })
});