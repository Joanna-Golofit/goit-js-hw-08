var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

// zapisac te dane jako obiekt, przyklad:
const data = {
  email: form.elements.email.value,
  message: form.elements.message.value,
}
const dataJSON = JSON.stringify(data);



//=======================moje dziala troche ========================================================
//na dzien dobry sprawdzanie czy nie ma danych zapisanych w localStorage:
updateForm();

//na kazda zmiane w polach formularza zapisujemy dane w local storage:
// form.addEventListener('input', saveEmailAndMessage);
//co 2s na zmiane w polach formularza zapisujemy dane w local storage:
form.addEventListener('input', throttle(saveEmailAndMessage,2000));

function saveEmailAndMessage(evt) {
  //zapisanie danych w localStorage:
  localStorage.setItem('email.value', form.elements.email.value);
  localStorage.setItem('message.value', form.elements.message.value);

  localStorage.setItem(LOCALSTORAGE_KEY, dataJSON);

  // localStorage.setItem(LOCALSTORAGE_KEY, dataJSON);
  console.log("1 data", data);
  console.log("2 dataJSON", dataJSON);
  console.log("3 json from storage", localStorage.getItem(LOCALSTORAGE_KEY));
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
  //czyszczenie local storage(rowniez obiektu):
  localStorage.removeItem('email.value');
  localStorage.removeItem('message.value');
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