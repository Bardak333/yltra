const scrollBtnNext = document.querySelector('.quiz__nav--btn_next');
const scrollBtnBack = document.querySelector('.quiz__nav--btn_back');
const stepText = document.querySelectorAll('.quiz__steps--text');
const stepPerform = document.querySelectorAll('.quiz__steps--perform');
const stepBtn = document.querySelectorAll('.quiz__steps--item');
const stepUnderLine = document.querySelectorAll('.quiz__steps--btn');
const questionItem = document.querySelectorAll('.quiz__question__container');
let questionCount = 0;

function scrolltoNextQuestion () {
    
    if (isQuestionSelected()) {

        if (questionCount >= 0 && questionCount < stepUnderLine.length - 1) {
            
            stepText[questionCount].classList.remove('quiz__steps--text-active');
            stepPerform[questionCount].classList.add('quiz__steps--perform-active');
            questionCount++;

            if (stepPerform[questionCount].classList.contains('quiz__steps--perform-active')) {
                
                stepPerform[questionCount].classList.remove('quiz__steps--perform-active');
        
            }

            stepUnderLine[questionCount].classList.add('quiz__steps--btn-active');
            stepText[questionCount].classList.add('quiz__steps--text-active');

            questionItem[questionCount].scrollIntoView({ 
                behavior: 'smooth', 
                inline: 'center', 
                block: 'nearest'
            });
        } 
    }

    else {

        console.log('Пожалуйста, выберите вариант ответа');
        // Не выбран вариант ответа // подсказка доделать
    }
    
}

scrollBtnNext.addEventListener('click', scrolltoNextQuestion);

function scrolltoBackQuestion () {
    
    if (questionCount <= stepUnderLine.length - 1 && questionCount > 0) {
    
        stepText[questionCount].classList.remove('quiz__steps--text-active');
        stepPerform[questionCount].classList.add('quiz__steps--perform-active');
        questionCount--;
        stepUnderLine[questionCount].classList.add('quiz__steps--btn-active');
        stepText[questionCount].classList.add('quiz__steps--text-active');
        stepPerform[questionCount].classList.remove('quiz__steps--perform-active');

        questionItem[questionCount].scrollIntoView({ 
            behavior: 'smooth', 
            inline: 'center', 
            block: 'nearest'
        });
    } 
}

scrollBtnBack.addEventListener('click', scrolltoBackQuestion);

function isQuestionSelected () {

    const questionName = `question-${questionCount + 1}`;
    const radioButtons = document.querySelectorAll(`input[name="${questionName}"]`);
    let isSelected = false;

    radioButtons.forEach(radio => {

        if (radio.checked) {
            isSelected = true;
        }

    });
    
    return isSelected;
}