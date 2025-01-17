const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch('https://techcrush-backend.netlify.app/.netlify/functions/register', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorData = await response.json(); 
      console.error('Registration failed:', errorData.message || response.status); 
      alert(`Registration failed. ${errorData.message || 'Please try again.'}`); 
    } else {
      console.log('Registration successful!');
      alert('Registration successful! Please check your email for verification.'); 
      // Redirect to success page after successful registration
      window.location.href = 'success.html'; 
    }
  } catch (error) {
    console.error('Error during registration:', error);
    alert('An error occurred during registration. Please try again.');
  }
});