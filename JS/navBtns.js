const mainBtnDesctop = document.getElementById('header_main');
const aboutUsBtnDesctop = document.getElementById('header_aboutUs');
const diplomasBtnDesctop = document.getElementById('header_diplomas');
const contactsBtnDesctop = document.getElementById('header_contacts');

const mainBtnMobile = document.getElementById('header_main_mobile');
const aboutUsBtnMobile = document.getElementById('header_aboutUs_mobile');
const diplomasBtnMobile = document.getElementById('header_diplomas_mobile');
const contactsBtnMobile = document.getElementById('header_contacts_mobile');


function scrollToElement(className, offset = 0) {

    console.log('Функция работает');
    const element = document.querySelector(className);
    const elementRect = element.getBoundingClientRect();
    const elementAbsoluteTop = window.pageYOffset + elementRect.top;

    const targetPosition = elementAbsoluteTop - offset;

    window.scrollTo({

        top: Math.max(0, targetPosition),
        behavior: 'smooth'
    });
    console.log('Функция сработала');
}

mainBtnDesctop.addEventListener('click', () => {
    scrollToElement('.main', 0);
});

aboutUsBtnDesctop.addEventListener('click', () => {
    scrollToElement('.aboutUs', 150);
});

diplomasBtnDesctop.addEventListener('click', () => {
    scrollToElement('.diplomas', 100);
});

contactsBtnDesctop.addEventListener('click', () => {
    scrollToElement('.footer', 0);
});

mainBtnMobile.addEventListener('click', () => {
    scrollToElement('.main', 0);
    open_close__menu();
});

aboutUsBtnMobile.addEventListener('click', () => {
    scrollToElement('.aboutUs', 50);
    open_close__menu();
});

diplomasBtnMobile.addEventListener('click', () => {
    scrollToElement('.diplomas', 50);
    open_close__menu();
});

contactsBtnMobile.addEventListener('click', () => {
    scrollToElement('.footer', 0);
    open_close__menu();
});