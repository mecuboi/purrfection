const deleteAd = async () => {

    const petId = window.location.pathname
    

    const response = await fetch(`/api${petId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        alert("Ad succesfully deleted")
        document.location.replace('/');

    } else {
        alert(response.statusText);
    }

};

document
    .querySelector('#delete-button')
    .addEventListener('click', deleteAd);