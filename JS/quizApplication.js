const quizInput = document.getElementById('quiz__application-input'); 
const checkOnIcon = document.querySelector('.quiz__inputFull-icon');
const completeBtn = document.querySelector('.quiz__application-btn_complete');
let applicationList = [];
const okBtn = document.querySelector('.complete__application--btn-ok');
let quizArrow = {};

function collectAllAnswersToList() {
    const answersList = [];
    
    questionItem.forEach((container, index) => {
        const questionNumber = index + 1;
        const questionName = `question-${questionNumber}`;
        const selectedRadio = container.querySelector(`input[name="${questionName}"]:checked`);
        
        if (selectedRadio) {

            let questionText = container.querySelector('.quiz__question-text p').textContent.trim();
            questionText = questionText.replace(/^\d+\.\s*/, '');
            const answerCard = selectedRadio.closest('.quiz__card, .quiz__card-dontKnow');
            const answerText = answerCard.querySelector('.quiz__card-text').textContent.trim();
            
            answersList.push({
                [`question_${questionNumber}`]: `"${questionText} : ${answerText}"`
            });
        }
    });

    answersList.push({'phone' : value = quizInput.value});
    
    return answersList;

}

function handleCompleteButtonClick() {
    applicationList = collectAllAnswersToList();
    
    quizArrow = {
        answers: applicationList
    };
    
    console.log('quizArrow:', quizArrow);
}

completeBtn.addEventListener('click', () => {

    const completeApplicationForm = document.querySelector('.complete__application');

    if (quizInput.value.length === 18) {
        
        handleCompleteButtonClick();
        closeApplicationQuiz();
        completeApplicationForm.classList.toggle('complete__application-active');
    }
});

function closeApplicationForm () {

    const complleteApplicationForm = document.querySelector('.complete__application');
    complleteApplicationForm.classList.toggle('complete__application-active');
    body.classList.toggle('scroll-off');
}

okBtn.addEventListener('click', closeApplicationForm);

quizInput.addEventListener('input', function(e) {
  let value = e.target.value.replace(/\D/g, '');
  
  if (value.startsWith('7')) {
    value = value.substring(1);
  }
  
  let formattedValue = '+7';
  
  if (value.length > 0) {
    formattedValue += ' (' + value.substring(0, 3);
  }
  if (value.length > 3) {
    formattedValue += ') ' + value.substring(3, 6);
  }
  if (value.length > 6) {
    formattedValue += '-' + value.substring(6, 8);
  }
  if (value.length > 8) {
    formattedValue += '-' + value.substring(8, 10);
  }
  
  e.target.value = formattedValue;

  const cleanValue = e.target.value.replace(/\D/g, '');
  if (cleanValue.length === 11) { 
    checkOnIcon.classList.add('quiz__inputFull-icon-active');
  } else {
    checkOnIcon.classList.remove('quiz__inputFull-icon-active');
  }

});


