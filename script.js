// Add form submission handler to prevent page refresh and handle poem posting
document.getElementById("poem-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from refreshing the page
    
    // Show the placeholder during upload
    document.getElementById("placeholder").style.display = 'block';
    
    // After poem is uploaded, hide placeholder and display the poem content
    setTimeout(function() {
        document.getElementById("placeholder").style.display = 'none';
        document.getElementById("poem-container").style.display = 'block';
        document.getElementById("posted-poem").textContent = document.getElementById("poem-content").value;
        document.getElementById("user-name").textContent = 'User'; // Replace 'User' with actual username
    }, 3000); // Simulate a 3-second upload time
});
