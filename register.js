const form = document.getElementById('register-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify(data),
  };

  const endpoint = 'https://delish-nutrio.onrender.com/api/register'; // Assuming this is the registration endpoint

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
      // Handle successful registration (e.g., redirect to verification page)
      window.location.href = 'verifyEmail.html';
    })
    .catch(error => {
      console.error('Error:', error);
      // Display an error message to the user
    });
});
