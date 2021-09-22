var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

//na dzien dobry sprawdzanie czy nie ma danych zapisanych w localStorage:
updateForm();

//na kazda zmiane w polach formularza zapisujemy dane w local storage:
// form.addEventListener('input', saveEmailAndMessage);
//co 0,5s na zmiane w polach formularza zapisujemy dane w local storage:
form.addEventListener('input', throttle(saveEmailAndMessage, 500));

function saveEmailAndMessage(evt) {
  // zapisac te dane jako obiekt:
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  //zmienic w JSON:
  const dataJSON = JSON.stringify(data);
  //zapisanie danych w localStorage:
  // localStorage.setItem('email.value', form.elements.email.value);
  // localStorage.setItem('message.value', form.elements.message.value);
  localStorage.setItem(LOCALSTORAGE_KEY, dataJSON);

  //logi moje
  // console.log("1 data", data);
  // console.log('1 data.email', data.email);
  // console.log('form.elements.email.value:', form.elements.email.value);
  // console.log("2 dataJSON", dataJSON);
  console.log('3 json from storage', localStorage.getItem(LOCALSTORAGE_KEY));
  // console.log("===========");

  // updateForm();
  // form.reset();
}

function updateForm() {
  console.log(
    'wraca JSON.parse',
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)),
  );

  form.elements.email.value =
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email || '';
  form.elements.message.value =
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message || '';
  // form.elements.email.value = localStorage.getItem(LOCALSTORAGE_KEY.email) || '';

  //nie-obiekt
  // form.elements.email.value = localStorage.getItem('email.value') || '';
  // form.elements.message.value = localStorage.getItem('message.value') || '';
}

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  //nie przeladuje strony z formularzem po kliknieciu submit:
  evt.preventDefault();
  //wyprowadzanie danych do wiersza polecen:
  // console.log(localStorage.getItem('email.value'));
  // console.log(localStorage.getItem('message.value'));
  console.log('JSON from localStorage', localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(
    'Parsed JSON from localStorage',
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)),
  );
  //czyszczenie local storage:
  // localStorage.removeItem('email.value');
  // localStorage.removeItem('message.value');
  localStorage.removeItem(LOCALSTORAGE_KEY);
  //resetowanie formularza:
  form.reset();
}

//===============================================================================
// const savedFeedback = localStorage.getItem(LOCALSTORAGE_KEY);
// const parsedFeedback = JSON.parse(savedFeedback);
// console.log(parsedFeedback); // Feedback object
//===================throttle============================================================
// //
// document.addEventListener(
//   'scroll',
//   _.throttle((e) => {
//     console.log('Scroll handler call every 300ms');
//   }, 300),
// );
//===============================================================================
