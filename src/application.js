import axios from 'axios';
// import onChange from 'on-change';
/*
const validateName = (name) => (name.trim().length ? [] : ['name cannot be empty']);
const validateEmail = (email) => (/\w+@\w+/.test(email) ? [] : ['invalid email']);
const validateField = (fieldname, data) => {
  fieldname === 'name' ? validateName(data) : validateEmail(data)
};
*/
let flagName = 1;
let flagEmail = 1;

function addForm() {
  const formData = document.createElement('div');
  const formContent = document.getElementsByClassName('form-container')[0];
  formData.innerHTML = `
    <form id="registrationForm">
      <div class="form-group">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Введите ваше имя" name="name" required>
      </div>
      <div class="form-group">
        <label for="inputEmail">Email</label>
        <input type="text" class="form-control" id="inputEmail" placeholder="Введите email" name="email" required>
      </div>
      <input type="submit" value="Submit" class="btn btn-primary">
    </form>
  `;
  formContent.appendChild(formData);
}

export default function app() {
  // step 1
  addForm();
  // step 1

  //--------------------------------------------

  // step 2
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    axios.post('/users', {})
      .then((response) => {
        document.body.innerHTML = `<p>${response.data.message}</p>`;
      })
      .catch((error) => {
        console.log(error);
      });
  });
  // step 2

  //--------------------------------------------

  // step 3
  const aq = document.getElementsByClassName('btn btn-primary')[0];
  aq.disabled = true;

  form.addEventListener('input', (e) => {
    e.preventDefault();

    const inputNameData = document.getElementById('inputName');
    const inputNameValue = inputNameData.value;
    const a1 = inputNameValue.trim();
    if (a1.length > 0) {
      inputNameData.classList.remove('is-invalid');
      inputNameData.classList.add('is-valid');
      flagName = 0;
    } else {
      inputNameData.classList.remove('is-valid');
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
      inputEmailData.classList.remove('is-invalid');
      inputEmailData.classList.add('is-valid');
      flagEmail = 0;
    } else {
      inputEmailData.classList.remove('is-valid');
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
  // step 3
}
