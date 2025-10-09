const questions_btn = document.querySelectorAll('.question--btn');
const questions_answers = document.querySelectorAll('.question--item-2');
const questions_items = document.querySelectorAll('.questions__container--item');

questions_btn.forEach ((btn, index) => {
    btn.addEventListener('click', () => {
        questions_btn[index].classList.toggle('question--btn_active');
        questions_answers[index].classList.toggle('question--item-2_visible');
        questions_items[index].classList.toggle('questions__container--item_active');
    })
});