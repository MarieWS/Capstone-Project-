const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch('/api/register', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorData = await response.json(); // Try to get error details from the server
      console.error('Registration failed:', errorData.message || response.status); 
      // Display a more specific error message to the user
      alert('Registration failed. ' + (errorData.message || 'Please try again.')); 
    } else {
      console.log('Registration successful!');
      // Redirect to verification page
      window.location.href = 'verifyEmail.html';
    }
  } catch (error) {
    console.error('Error during registration:', error);
    alert('An error occurred during registration. Please try again.');
  }
});
