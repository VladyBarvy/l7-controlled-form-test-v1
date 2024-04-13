import addForm from './index.js';

let flagName = 1;
let flagEmail = 1;

const sendRequestToServer = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log('ok');
    }
  };
  xhttp.open('POST', '/users', true);
  xhttp.send();
  document.body.innerHTML = '<p>user has been created sucessfully</p>';
};

export default function app() {
  addForm();

  const aq = document.getElementsByClassName('btn btn-primary')[0];
  aq.disabled = true;

  //-----------------

  document.addEventListener('submit', () => {
    sendRequestToServer();
  });

  //-----------------

  const form = document.querySelector('form');
  form.addEventListener('input', (e) => {
    e.preventDefault();

    const inputNameData = document.getElementById('inputName');
    const inputNameValue = inputNameData.value;
    const a1 = inputNameValue.trim();
    if (a1.length > 0) {
      inputNameData.classList.remove('is-valid');
      flagName = 0;
    } else {
      inputNameData.classList.add('is-invalid');
      flagName = 1;
    }

    if ((flagName === 1) || (flagEmail === 1)) {
      const submit = document.querySelector('[type="submit"]');
      submit.disabled = true;
    }

    if ((flagName === 0) && (flagEmail === 0)) {
      const submit = document.querySelector('[type="submit"]');
      submit.disabled = false;
    }

    const inputEmailData = document.getElementById('inputEmail');
    const inputEmailValue = inputEmailData.value;
    if (/\w+@\w+/.test(inputEmailValue) === true) {
      inputEmailData.classList.remove('is-valid');
      flagEmail = 0;
    } else {
      inputEmailData.classList.add('is-invalid');
      flagEmail = 1;
    }

    if ((flagName === 1) || (flagEmail === 1)) {
      const yandex = document.getElementsByClassName('btn btn-primary')[0];
      yandex.disabled = true;
    }

    if ((flagName === 0) && (flagEmail === 0)) {
      const pop = document.getElementsByClassName('btn btn-primary')[0];
      pop.disabled = false;
    }
  });

  //-----------------
/*
  const inputNameData = document.getElementById('inputName');

  inputNameData.addEventListener('change', () => {
    const inputNameValue = inputNameData.value;
    const a1 = inputNameValue.trim();
    if (a1.length > 0) {
      inputNameData.classList.remove('is-valid');
      flagName = 0;
    } else {
      inputNameData.classList.add('is-invalid');
      flagName = 1;
    }

    if ((flagName === 1) || (flagEmail === 1)) {
      const submit = document.querySelector('[type="submit"]');
      submit.disabled = true;
    }

    if ((flagName === 0) && (flagEmail === 0)) {
      const submit = document.querySelector('[type="submit"]');
      submit.disabled = false;
    }
  });

  //-----------------

  const inputEmailData = document.getElementById('inputEmail');

  inputEmailData.addEventListener('change', () => {
    const inputEmailValue = inputEmailData.value;
    if (/\w+@\w+/.test(inputEmailValue) === true) {
      inputEmailData.classList.remove('is-valid');
      flagEmail = 0;
    } else {
      inputEmailData.classList.add('is-invalid');
      flagEmail = 1;
    }

    if ((flagName === 1) || (flagEmail === 1)) {
      const yandex = document.getElementsByClassName('btn btn-primary')[0];
      yandex.disabled = true;
    }

    if ((flagName === 0) && (flagEmail === 0)) {
      const pop = document.getElementsByClassName('btn btn-primary')[0];
      pop.disabled = false;
    }
  });

  //-----------------
  const tet = document.querySelector('[type="submit"]');
  if (tet.disabled === true) {
    console.log('disabled');
  } else {
    console.log('enabled');
  }
  */
  //-----------------
}
