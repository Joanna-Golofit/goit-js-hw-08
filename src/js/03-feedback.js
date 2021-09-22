var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

// zapisac te dane jako obiekt, przyklad:
const data = {
  email: form.elements.email.value,
  message: form.elements.message.value,
}
const dataJSON = JSON.stringify(data);



//=======================moje dziala========================================================
//na dzien dobry sprawdzanie czy nie ma danych zapisanych w localStorage:
updateForm();

//na kazda zmiane w polach formularza zapisujemy dane w local storage:
form.addEventListener('input', saveEmailAndMessage);

function saveEmailAndMessage(evt) {
  //zapisanie danych w localStorage:
  localStorage.setItem('email.value', form.elements.email.value);
  localStorage.setItem('message.value', form.elements.message.value);

  localStorage.setItem('feedback-form-state', dataJSON);

  // localStorage.setItem(LOCALSTORAGE_KEY, dataJSON);
  console.log("1 data", data);
  console.log("2 dataJSON", dataJSON);
  console.log("3 json", localStorage.getItem(LOCALSTORAGE_KEY));
  console.log("===========");
  updateForm();
  // form.reset();
}

function updateForm() {
  form.elements.email.value = localStorage.getItem('email.value') || '';
  form.elements.message.value =
  localStorage.getItem('message.value') || '';
}

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  //nie przeladuje strony z formularzem po kliknieciu submit:
  evt.preventDefault();
  //wyprowadzanie danych do wiersza polecen:
  console.log(localStorage.getItem('email.value'));
  console.log(localStorage.getItem('message.value'));
  //czyszczenie local storage(poki co jeszcze nie obiektu):
  localStorage.setItem('email.value', "");
  localStorage.setItem('message.value', "");
  //resetowanie formularza:
  form.reset();
}

//===============================================================================

//===============================================================================
// const savedFeedback = localStorage.getItem(LOCALSTORAGE_KEY);
// const parsedFeedback = JSON.parse(savedFeedback);
// console.log(parsedFeedback); // Feedback object
//===============================================================================