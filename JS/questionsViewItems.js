const questionsBtn = document.querySelectorAll('.question--btn');
const questionsAnswers = document.querySelectorAll('.question--item-2');
const questionsItems = document.querySelectorAll('.questions__container--item');

questionsItems.forEach ((btn, index) => {
    btn.addEventListener('click', () => {
        questionsBtn[index].classList.toggle('question--btn_active');
        questionsAnswers[index].classList.toggle('question--item-2_visible');
        questionsItems[index].classList.toggle('questions__container--item_active');
    })
});