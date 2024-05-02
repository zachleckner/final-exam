document.addEventListener("DOMContentLoaded", function() {
    // Retrieve cookie data
    const userData = JSON.parse(getCookie('userData'));
    if (userData) {
        // Fill out the form fields
        document.getElementById('nameField').innerText = userData.username;
        document.getElementById('gNumberField').innerText = userData.gNumber;
        document.getElementById('emailField').innerText = userData.email;
    }
});

// Function to retrieve cookie value
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
