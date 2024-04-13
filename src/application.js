import axios from 'axios';
import onChange from 'on-change';

const validateName = (name) => (name.trim().length ? [] : ['name cannot be empty']);
const validateEmail = (email) => (/\w+@\w+/.test(email) ? [] : ['invalid email']);
const validateField = (fieldname, data) => (fieldname === 'name' ? validateName(data) : validateEmail(data));

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
};



export default function app() {
  // step 1
  addForm();
  // step 1

  //--------------------------------------------

  // step 2
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    axios.post('/users',{})
    .then((response) => {
      document.body.innerHTML = `<p>${response.data.message}</p>`;
  })
  .catch(function (error) {
      console.log(error);
    });
  });
  // step 2

  //--------------------------------------------

  // step 3
  /*
  const state = {
    values: {
      name: '',
      email: '',
    },
    errors: {
      name: [],
      email: [],
    },
  };

  const watchedState = onChange(state, (path) => {
    
    const selector = path.split('.')[1];
    const input = document.querySelector(`name=${selector}`);
    console.log(input);
    
    //  if (validateField(selector, state.values[selector]).length === 0) {
    //   input.classList.remove('is-valid');
    //   input.classList.add('is-invalid');
    // } else {
    //   input.classList.remove('is-invalid');
    //   input.classList.add('is-valid');
    // } 
    
  });

  form.addEventListener('input', (e) => {
    e.preventDefault();
    const targetName = e.target.name;
    const data = new FormData(form).get(targetName);
    watchedState.values[targetName] = data;
    watchedState.errors[targetName] = validateField(targetName, data);
  });
*/
  // step 3


}


