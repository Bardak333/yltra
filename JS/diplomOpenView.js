const diplomasItems = document.querySelectorAll('.diplomas__container--item');
const diplomas_btn_next = document.querySelector('.diplomas__nav-btn_next');
const diplomas_btn_back = document.querySelector('.diplomas__nav-btn_back');
let diplomasCount = 0;

function next_diplom() {

    const diplomas_container = document.querySelector('.diplomas__container');
    const containerRect = diplomas_container.getBoundingClientRect();
    
    for (let i = 0; i < diplomasItems.length; i++) {

        const rect = diplomasItems[i].getBoundingClientRect();
        
        if (rect.left > containerRect.right || i === diplomasItems.length - 1) {
            diplomasItems[i].scrollIntoView({ behavior: 'smooth', inline: 'end', block: 'nearest'});
            diplomasCount = i;
            return;
        }
    }
}

diplomas_btn_next.addEventListener('click', next_diplom);

//

function back_diplom() {

    const diplomas_container = document.querySelector('.diplomas__container');
    const containerRect = diplomas_container.getBoundingClientRect();
    
    for (let i = diplomasItems.length - 1; i >= 0; i--) {

        const rect = diplomasItems[i].getBoundingClientRect();
        
        if (rect.right < containerRect.left || i === 0) {
            diplomasItems[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest'});
            diplomasCount = i;
            return;
        }
    }
}

diplomas_btn_back.addEventListener('click', back_diplom);

//

const diplomBtnClose = document.querySelector('.diplomas__open--btn');
const diplomWidget = document.querySelector('.diplomas__open');
const diplomOpenBtnNext = document.querySelector('.diplomas__open__nav-btn_next');
const diplomOpenBtnBack = document.querySelector('.diplomas__open__nav-btn_back');
const diplomView = document.querySelector('.diplomas__open--diplom');
const diplomImages = [
    'images/diplomas/diplom-1.png',
    'images/diplomas/diplom-2.png',
    'images/diplomas/diplom-3.png',
    'images/diplomas/diplom-4.png',
    'images/diplomas/diplom-5.png',
    'images/diplomas/diplom-6.png',
    'images/diplomas/diplom-7.png',
    'images/diplomas/diplom-8.png',
    'images/diplomas/diplom-9.png'
]
let diplomViewIndex = 0;

diplomasItems.forEach( (item, index) => {

    item.addEventListener('click', () => {

        diplomWidget.classList.toggle('diplomas__close');
        body.classList.toggle('scroll-off');
        diplomView.setAttribute('src', `${diplomImages[index]}`);
        diplomViewIndex = index;
    })
    
});

diplomBtnClose.addEventListener('click', () => {

    diplomWidget.classList.toggle('diplomas__close');
    body.classList.toggle('scroll-off');
})

diplomOpenBtnNext.addEventListener ('click', () => {
    if(diplomViewIndex >= 0 && diplomViewIndex < diplomImages.length - 1) {
        diplomViewIndex++;
        diplomView.setAttribute('src', `${diplomImages[diplomViewIndex]}`);
        
    }
})

diplomOpenBtnBack.addEventListener ('click', () => {
    if(diplomViewIndex >= 1 && diplomViewIndex < diplomImages.length) {
        diplomViewIndex--;
        diplomView.setAttribute('src', `${diplomImages[diplomViewIndex]}`);
        
    }
})