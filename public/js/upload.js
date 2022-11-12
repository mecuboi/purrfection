

const uploadImage = async (event) => {
    event.preventDefault();
   

//     const image_input = document.querySelector("#image-input");
// image_input.addEventListener("change", function() {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => {
//     const uploaded_image = reader.result;
//     document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
//   });
//   reader.readAsDataURL(this.files[0]);
// });
    //input values
    const fileInput = document.querySelector('#petImage');

    console.log("file", fileInput.value)
  
    // if (firstNameInput || lastNameInput || emailInput || phoneNumberInput || addressInput || passwordInput) {
    // const response = await fetch(`/api/users/${userId}`, {
    //   method: 'PUT',
    //   body: JSON.stringify({
    //     first_name: firstNameInput,
    //     last_name: lastNameInput,
    //     phone_number: phoneNumberInput,
    //     // password: passwordInput,
    //     address: addressInput
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // });
  
    //   if(response.ok) {
    //     document.location.replace(`/profile/${userId}`)
    //   } else {
    //     alert("Something went wrong")
    //   }
    // }
  
  };

  document
    .querySelector('#uploadForm')
    .addEventListener('submit', uploadImage)