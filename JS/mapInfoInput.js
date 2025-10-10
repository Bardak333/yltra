
const phoneInput = document.getElementById('map__info--phone-input');

phoneInput.addEventListener('input', function(e) {
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
});

const applicationBtn = document.querySelector('.map__consent--btn');
const applicationNoQuiz = document.querySelector('.popup__warning-2');

function openApplicationForm() {

  const completeApplicationForm = document.querySelector('.complete__application');
  const nameInput = document.getElementById('map__info--name-input');
  if (nameInput.value == null && phoneInput.value === 18) {
    
    completeApplicationForm.classList.toggle('complete__application-active');
  }
  else {
    applicationNoQuiz.classList.toggle('popup__warning-2_active');
    setTimeout(() => {
            applicationNoQuiz.classList.toggle('popup__warning-2_active');
        }, 1500);
    console.log('Не полный инпут');
  }
}

applicationBtn.addEventListener('click', openApplicationForm);