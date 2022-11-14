
const postAdFunction = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#pet-name').value.trim();
  const breed = document.querySelector('#breed').value.trim();
  const description = document.querySelector('#description').value.trim();
  const age = document.querySelector('#age').value.trim();
  const price = document.querySelector('#price').value.trim();
  const microchip = document.querySelector('#microchip').value.trim();
  const category= document.querySelector('#category').value.trim();


  if (name && breed && description && age && price && category) {

    const response = await fetch('/api/petAds/', {
      method: 'POST',
      body: JSON.stringify({
        name,
        breed,
        description,
        age,
        price,
        microchip_number: microchip,
        category_id: category,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      //redirect to upload image page
      document.location.replace('/upload');
    } else {
      alert('Please fill in the empty space');
    }
  }
};



document
  .querySelector('.post-ad-form')
  .addEventListener('submit', postAdFunction);

