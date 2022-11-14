
const updateUserInfo = async (event) => {
  event.preventDefault();


  //input values
  const firstNameInput = document.querySelector('#first_name').value.trim();
  const lastNameInput = document.querySelector('#last_name').value.trim();
  const phoneNumberInput = document.querySelector('#phone_number').value.trim();
  const addressInput = document.querySelector('#address').value.trim();

  if (firstNameInput || lastNameInput || emailInput || phoneNumberInput || addressInput || passwordInput) {
    const response = await fetch('/api/users/:id', {
      method: 'PUT',
      body: JSON.stringify({
        first_name: firstNameInput,
        last_name: lastNameInput,
        phone_number: phoneNumberInput,
        address: addressInput
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if(response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Something went wrong');
    }
  }

};

const resetInfo = (event) => {
  console.log('hi');

  event.preventDefault();

  const firstNameEl = document.querySelector('#first_name');
  const lastNameEl = document.querySelector('#last_name');
  const emailEl = document.querySelector('#last_name');
  const phoneNumberEl = document.querySelector('#phone_number');
  const addressEl = document.querySelector('#address');

  firstNameEl.value = '';
  lastNameEl.value = '';
  emailEl.value = '';
  phoneNumberEl.value = '';
  addressEl.value = '';

};

document
  .querySelector('#update-user-form')
  .addEventListener('submit', updateUserInfo);

document
  .querySelector('#reset-btn')
  .addEventListener('click', resetInfo);


