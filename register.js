<div>
  <form id="register-form">
    <input type="text" id="firstName" name="firstName" placeholder="First Name" required>
    <input type="text" id="lastName" name="lastName" placeholder="Last Name" required>
    <input type="email" id="email" name="email" placeholder="Email" required>
    <input type="password" id="password" name="password" placeholder="Password" required>
    <button type="submit">Register</button>
  </form>
</div>

<script>
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
        console.error('Registration failed:', response.status);
        // Display an error message to the user
        alert('Registration failed. Please try again.');
      } else {
        console.log('Registration successful!');
        // Redirect to verification page
        window.location.href = 'verifyEmail.html';
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Display an error message to the user
      alert('An error occurred during registration. Please try again.');
    }
  });
</script>
