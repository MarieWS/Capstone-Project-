
document.querySelector("#login-register").addEventListener("click", () => {
    const formContainer = document.querySelector(".form_container");
    formContainer.classList.toggle("active");
});

const form = document.getElementById('register-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const isLogin = formContainer.classList.contains("active");

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(data),
    };

    const endpoint = isLogin ? 'https://delish-nutrio.onrender.com/api/login' : 'https://delish-nutrio.onrender.com/api/register';

    fetch(endpoint, options)
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => {
                    console.log(text);
                    throw new Error(`HTTP error! Status: ${response.status}`);
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            if (isLogin) {
                window.location.href = 'dashboard.html';
            } else {
                window.location.href = 'verifyEmail.html';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
