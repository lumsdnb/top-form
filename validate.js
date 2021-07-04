const userUnselectedForm = (e) => {
  console.log(e.target);
  if (e.target.value == '') {
    alert('please enter a value');
  }
  console.log('bangg');
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
