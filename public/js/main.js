const searchFunction = (event) => {
    event.preventDefault();
  
    const breed = document.querySelector('#search-bar').value.trim(); 
        document.location.replace(`/petads/search/${breed}`);
    }
  
  document
    .querySelector('#search-button')
    .addEventListener('submit', searchFunction);