const scrollBtnNext = document.querySelector('.quiz__nav--btn_next');
const scrollBtnBack = document.querySelector('.quiz__nav--btn_back');
const stepText = document.querySelectorAll('.quiz__steps--text');
const stepPerform = document.querySelectorAll('.quiz__steps--perform');
const stepBtn = document.querySelectorAll('.quiz__steps--item');
const stepUnderLine = document.querySelectorAll('.quiz__steps--btn');
const questionItem = document.querySelectorAll('.quiz__question__container');
const quizApplication = document.querySelector('.quiz__application');
const applicationClose = document.querySelector('.quiz__application-btn');

let questionCount = 0;

function closeApplicationQuiz () {

    const quizRadioBtns = document.querySelectorAll('input[type="radio"]');

    quizApplication.classList.remove('quiz__application_active');
    quizInput.value = "";
    checkOnIcon.classList.remove('quiz__inputFull-icon-active');
    quizRadioBtns.forEach( radio => {    

        radio.checked = false;
    });

    for (let i = 0; i < stepUnderLine.length; i++) {
        stepText[i].classList.remove('quiz__steps--text-active');
        stepPerform[i].classList.remove('quiz__steps--perform-active');
        stepUnderLine[i].classList.remove('quiz__steps--btn-active');
    }

    questionCount = 0
    stepText[questionCount].classList.add('quiz__steps--text-active');
    stepUnderLine[questionCount].classList.add('quiz__steps--btn-active');

    questionItem[questionCount].scrollIntoView({ 
        behavior: 'smooth', 
        inline: 'center', 
        block: 'nearest'
    });
}

applicationClose.addEventListener('click', closeApplicationQuiz);

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

        else if (questionCount == stepUnderLine.length - 1 && isQuestionSelected()) {
    
            quizApplication.classList.add('quiz__application_active');
            body.classList.toggle('scroll-off');
    
        }
    }

    else {

        const warningPopUp = document.querySelector('.popup__warning');
        warningPopUp.classList.toggle('popup__warning_active');
        setTimeout(() => {
            warningPopUp.classList.toggle('popup__warning_active');
        }, 1500);
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