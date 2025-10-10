const headerBtnApplication = document.querySelector('.header__application');
const mainBtnApplication = document.querySelector('.main__widget-3--btn');
const aboutUsBtnApplication = document.querySelector('.aboutUs__widget-1--btn');
const footerBtnApplication = document.querySelector('.footer__application-btn');
const mobileMenuBtnApplication = document.querySelector('.mobile__menu__btn');
const mobileMenu = document.querySelector('.header__mobile__menu');

function scrollToApplication() {
    const application = document.querySelector('.map__application'); // или другой селектор
    const offset = 120;

    const viewportHeight = window.innerHeight;
    const elementRect = application.getBoundingClientRect();
    const elementAbsoluteTop = window.pageYOffset + elementRect.top;
    const elementHeight = elementRect.height;

    const targetScroll = elementAbsoluteTop - (viewportHeight / 2) + (elementHeight / 2) ;

    window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
    });
}

headerBtnApplication.addEventListener('click', scrollToApplication);
mainBtnApplication.addEventListener('click', scrollToApplication);
aboutUsBtnApplication.addEventListener('click', scrollToApplication);
footerBtnApplication.addEventListener('click', scrollToApplication);

mobileMenuBtnApplication.addEventListener('click', () => {

    open_close__menu();
    scrollToApplication();
});

