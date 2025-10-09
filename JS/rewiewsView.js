const rewiews__items = document.querySelectorAll('.rewiews__item');
const rewiews_btn_next = document.querySelector('.rewiews__nav-btn_next');
const rewiews_btn_back = document.querySelector('.rewiews__nav-btn_back');
let rewiews_count = 0;

function next_rewiew() {
    const rewiews_container = document.querySelector('.rewiews__items');
    const containerRect = rewiews_container.getBoundingClientRect();
    
    for (let i = 0; i < rewiews__items.length; i++) {
        const rect = rewiews__items[i].getBoundingClientRect();
        
        if (rect.left > containerRect.right - 200 || i === rewiews__items.length - 1) {
            rewiews__items[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest'});
            rewiews_count = i;
            return;
        }
    }
}

rewiews_btn_next.addEventListener('click', next_rewiew);

function back_rewiew() {
    const rewiews_container = document.querySelector('.rewiews__items');
    const containerRect = rewiews_container.getBoundingClientRect();
    
    for (let i = rewiews__items.length - 1; i >= 0; i--) {
        const rect = rewiews__items[i].getBoundingClientRect();
        
        if (rect.left < containerRect.left - 200 || i === 0) {
            rewiews__items[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest'});
            rewiews_count = i;
            return;
        }
    }
}

rewiews_btn_back.addEventListener('click', back_rewiew);