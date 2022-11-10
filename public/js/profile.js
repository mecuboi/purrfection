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
  try {
  event.preventDefault();
  console.log('update')

  //TODO change to req.session.id
  const userId = document.querySelector('#user-id').textContent

  //input values
  const firstNameInput = document.querySelector('#first_name').value.trim();
  const lastNameInput = document.querySelector('#last_name').value.trim();
  const emailInput = document.querySelector('#last_name').value.trim();
  const phoneNumberInput = document.querySelector('#phone_number').value.trim();
  const addressInput = document.querySelector('#address').value.trim();
  const passwordInput = document.querySelector('#password').value.trim();

  const response = await fetch(`/api/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify({
      first_name: firstNameInput,
      last_name: lastNameInput,
      email: emailInput,
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
  } catch (err) {
    console.error(err);
  };
};

const resetInfo = (event) => {
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
  .querySelector('#update-btn')
  .addEventListener('submit', updateUserInfo);

document
  .querySelector('#reset-btn')
  .addEventListener('click', resetInfo);


