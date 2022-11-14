const redirectToHome = async (event) => {
  event.preventDefault();

  const petAdsId = document.querySelector('#pet-ad-id').textContent;

  fetch(`/api/petAds/${petAdsId}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data) {
        document.location.replace('/');
      } else {
        console.error('No such pet ad exists');
      }
    });
};


document
  .querySelector('.post-image-form')
  .addEventListener('submit', redirectToHome);

