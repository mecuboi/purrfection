// const editUserBtn = document.querySelector('#edit-user-btn');
// const userCard = document.querySelector('#user-card');
// const dropdownMenu = document.querySelector('#dropdown-menu');
// const userInfo = document.querySelector('#user-info');

// const renderEditUserCard = () => {
//   dropdownMenu.classList.add('hidden');
//   userInfo.classList.add('hidden');

// console.log('edit button pressed')
// }

// editUserBtn.addEventListener('click', renderEditUserCard());

const updateUserInfo = async (event) => {
  event.preventDefault();
  console.log('hi')
 
 
  //TODO change to req.session.id
  const userId = document.querySelector('#user-id').textContent

  //input values
  const firstNameInput = document.querySelector('#first_name').value.trim();
  const lastNameInput = document.querySelector('#last_name').value.trim();
  const phoneNumberInput = document.querySelector('#phone_number').value.trim();
  const addressInput = document.querySelector('#address').value.trim();
  const passwordInput = document.querySelector('#password').value.trim();

  if (firstNameInput || lastNameInput || emailInput || phoneNumberInput || addressInput || passwordInput) {
  const response = await fetch(`/api/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify({
      first_name: firstNameInput,
      last_name: lastNameInput,
      phone_number: phoneNumberInput,
      password: passwordInput,
      address: addressInput
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  });

    if(response.ok) {
      document.location.replace(`/profile/${userId}`)
    } else {
      alert("Something went wrong")
    }
  }

};

const resetInfo = (event) => {
  console.log('hi')

  event.preventDefault();

  const firstNameEl = document.querySelector('#first_name');
  const lastNameEl = document.querySelector('#last_name');
  const emailEl = document.querySelector('#last_name');
  const phoneNumberEl = document.querySelector('#phone_number');
  const addressEl = document.querySelector('#address');
  const passwordEl = document.querySelector('#password');

  firstNameEl.value = "";
  lastNameEl.value = "";
  emailEl.value = "";
  phoneNumberEl.value = "";
  addressEl.value = "";
  passwordEl.value = "";

};

document
  .querySelector('#update-user-form')
  .addEventListener('submit', updateUserInfo);

document
  .querySelector('#reset-btn')
  .addEventListener('click', resetInfo);


