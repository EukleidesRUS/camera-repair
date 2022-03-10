const formValidateEmail = document.querySelectorAll('.form');
const submitBtn = document.querySelectorAll('.form__submit-button');

function validateEmail(evt) {
  evt.preventDefault();
  submitBtn.forEach(element => {
    element.textContent = 'Круто, спасибо за доверие!'
  });
};

formValidateEmail.forEach(element => {
  element.addEventListener('submit', validateEmail);
});


