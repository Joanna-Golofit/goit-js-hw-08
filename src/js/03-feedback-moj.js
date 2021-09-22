var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

// zapisac te dane jako obiekt, przyklad:
let LocalStorageValues = {
  email: form.elements.email.value,
  message: form.elements.message.value,
};

localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(LocalStorageValues));

//===============================================================================

// const savedFeedback = localStorage.getItem(LOCALSTORAGE_KEY);
// const parsedFeedback = JSON.parse(savedFeedback);
// console.log(parsedFeedback); // Feedback object

//=======================moje dziala========================================================
updateForm();
form.addEventListener('submit', saveEmailAndMessage);

function saveEmailAndMessage(evt) {
  evt.preventDefault(); //nie przeladuje strony z formularzem po kliknieciu submit
  localStorage.setItem('email.value', form.elements.email.value);
  localStorage.setItem('message.value', form.elements.message.value);

  updateForm();
  form.reset();
}

function updateForm() {
  form.elements.email.value = localStorage.getItem('email.value') || '';
  form.elements.message.value = localStorage.getItem('message.value') || '';
}
//===============================================================================
