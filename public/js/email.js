const openEmail = async () => {
    const seller_email = document.querySelector('#seller-email').textContent.trim();

    document.location.replace(`/email/${seller_email}`);
};

document
    .querySelector('#send-email')
    .addEventListener('click', openEmail);