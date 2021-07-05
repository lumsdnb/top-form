const userUnselectedForm = (e) => {
  console.log(e.target);
  //if field empty or not filled out correctly
  if (e.target.value == '') {
    console.log('please enter a value');
    e.target.classList.add('validation-error');
  }
  if (e.target.value !== '') {
    e.target.classList.remove('validation-error');
  }
};

const emailEl = document.getElementById('form-email');
const zipEl = document.getElementById('form-zip');
const phoneEl = document.getElementById('form-phone');
const passwordEl = document.getElementById('form-password');

emailEl.addEventListener('blur', userUnselectedForm);
phoneEl.addEventListener('blur', userUnselectedForm);
zipEl.addEventListener('blur', userUnselectedForm);
passwordEl.addEventListener('blur', userUnselectedForm);

//todo: - add validation cases besides input being empty
//      - show warnings in UI instead of alerts
