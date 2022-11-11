const uploadImage = async (event) => {
    event.preventDefault();
   
   console.log(req.session)
    //TODO change to req.session.user-id
    const userId = req.session.user-id
    // document.querySelector('#user-id').textContent
  
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
        // password: passwordInput,
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