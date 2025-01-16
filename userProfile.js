const token = localStorage.getItem('token');
const profileDataContainer = document.getElementById('profile-data');
const editProfileForm = document.getElementById('editProfileForm');
const editProfileButton = document.getElementById('editProfileButton');
const cancelEditButton = document.getElementById('cancelEditButton');

// Fetch user profile data on page load
fetch('/api/user', { 
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to fetch user profile.');
    }
    return response.json();
})
.then(userData => {
    // Display user profile data
    const profileHtml = `
        <p><strong>First Name:</strong> ${userData.firstName}</p>
        <p><strong>Last Name:</strong> ${userData.lastName}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Gender:</strong> ${userData.gender}</p>
        <p><strong>Date of Birth:</strong> ${userData.birthdate}</p>
        <p><strong>Location:</strong> ${userData.location}</p>
        <p><strong>Dietary Preference:</strong> ${userData.dietaryPreference}</p>
        <p><strong>Activity Level:</strong> ${userData.activityLevel}</p>
        <p><strong>Health Goals:</strong> ${userData.healthGoals}</p>
        <p><strong>Allergies:</strong> ${userData.allergies}</p>
        <p><strong>Height:</strong> ${userData.height} cm</p>
        <p><strong>Medical Conditions:</strong> ${userData.medicalConditions}</p>
        <p><strong>Weight:</strong> ${userData.weight} kg</p>
    `;
    profileDataContainer.innerHTML = profileHtml;
})
.catch(error => {
    console.error('Error fetching user profile:', error);
    profileDataContainer.innerHTML = 'Error loading profile data.';
});

// Edit Profile Button Click
editProfileButton.addEventListener('click', () => {
    profileDataContainer.style.display = 'none';
    editProfileForm.style.display = 'block';
});

// Cancel Edit Button Click
cancelEditButton.addEventListener('click', () => {
    profileDataContainer.style.display = 'block';
    editProfileForm.style.display = 'none';
});

// Handle Edit Profile Form Submission
editProfileForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(editProfileForm);
    const updatedProfileData = Object.fromEntries(formData);

    try {
        const response = await fetch('/api/updateuser', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(updatedProfileData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error updating profile:', errorData.message || response.status);
            alert('Error updating profile. ' + (errorData.message || 'Please try again.'));
        } else {
            console.log('Profile updated successfully!');
            // Refresh the page to display the updated profile data
            location.reload(); 
        }
    } catch (error) {
        console.error('Error updating profile:', error);
        alert('An error occurred while updating your profile. Please try again.');
    }
});

// Delete User Button Click
deleteUserButton.addEventListener('click', () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
        fetch('/api/deleteuser', {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete user.');
            }
            console.log('User account deleted successfully.');
            // Redirect to login page or display a success message
            window.location.href = '/login'; 
        })
        .catch(error => {
            console.error('Error deleting user:', error);
            alert('An error occurred while deleting your account. Please try again.');
        });
    }
});
