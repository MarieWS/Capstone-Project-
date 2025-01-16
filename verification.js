fetch(`/api/verifyemail/${token}`, {
    method: 'GET'
})
.then(response => {
    if (!response.ok) {
        // Handle error (e.g., invalid token, server error)
        console.error('Error verifying email:', response.status);
        // Display an error message to the user
    } else {
        // Handle successful verification
        console.log('Email verified successfully!');
        // Redirect the user to a success page or log them in 
        window.location.href = 'success.html'; 
    }
})
.catch(error => {
    console.error('Error:', error);
    // Display an error message to the user
});
