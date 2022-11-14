const addtoFavourites = async () => {
  const favouriteToast = document.querySelector('#favourite-toast');

  favouriteToast.classList.remove('hidden');

  //Automatically hides toast after 5 seconds
  setTimeout( () => {
    favouriteToast.classList.add('hidden');
  }, 5000);

};

document
  .querySelector('#favourite-btn')
  .addEventListener('click', addtoFavourites);
