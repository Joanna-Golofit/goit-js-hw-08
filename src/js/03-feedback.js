var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

//na dzien dobry sprawdzanie czy nie ma danych zapisanych w localStorage:
updateForm();

//co 0,5s na zmiane w polach formularza zapisujemy dane w local storage:
form.addEventListener('input', throttle(saveEmailAndMessage, 500));

function saveEmailAndMessage(evt) {
  // zapisac te dane jako obiekt:
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  //zmienic w JSONa:
  const dataJSON = JSON.stringify(data);
  //zapisanie danych w localStorage:
  localStorage.setItem(LOCALSTORAGE_KEY, dataJSON);
  
  // console.log("JSON saved in storage", localStorage.getItem(LOCALSTORAGE_KEY));
  // updateForm();
  // form.reset();
}

function updateForm() {
  if (localStorage.getItem(LOCALSTORAGE_KEY) === null) {
    return;
  } else {
    // console.log('wraca JSON.parse', JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

  form.elements.email.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email || '';
  form.elements.message.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message || '';  
  }
}

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  //nie przeladuje strony z formularzem po kliknieciu submit:
  evt.preventDefault();
  //wyprowadzanie danych do wiersza polecen:
  // console.log('JSON from localStorage', localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(
    '%cParsed JSON from localStorage',
    'color: pink; font-weight: bold',
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)),
  );
  //czyszczenie local storage:
  localStorage.removeItem(LOCALSTORAGE_KEY);
  //resetowanie formularza:
  form.reset();
}

