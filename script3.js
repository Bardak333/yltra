const header__wraper = document.querySelector('.header__wraper');
const btn__openMenu = document.querySelector('.header__menu');
const header__aplication = document.querySelector('.header__application');
const header = document.querySelector('.header');
const container = document.querySelector('.container');
const mobile__menu = document.querySelector('.header__mobile__menu');
const body = document.querySelector('.scroll');

function open_close__menu() {
    header.classList.toggle('header-open');
    container.classList.toggle('container-open');
    header__aplication.classList.toggle('header__aplication-open');
    header__wraper.classList.toggle('header__wraper-open');
    btn__openMenu.classList.toggle('header__menu-open');
    mobile__menu.classList.toggle('header__mobile__menu-open');
    body.classList.toggle('scroll-off');
}

btn__openMenu.addEventListener('click', open_close__menu);
