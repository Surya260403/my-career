// Get the dropdown, checkboxes, and buttons
const pageSelect = document.getElementById('pageSelect');
const newTabCheckbox = document.getElementById('newTab');
const resetButton = document.getElementById('resetButton');
const homeButton = document.getElementById('homeButton');
const messageElement = document.getElementById('message');

// Add event listener for dropdown selection
pageSelect.addEventListener('change', function() {
    const selectedPage = this.value;

    if (selectedPage) {
        const openInNewTab = newTabCheckbox.checked;

        // Show a message before navigating
        messageElement.textContent = `Navigating to ${this.options[this.selectedIndex].text}...`;

        // Open the selected page based on the checkbox value
        if (openInNewTab) {
            window.open(selectedPage, '_blank');
        } else {
            window.location.href = selectedPage;
        }
    }
});

// Reset the dropdown selection
resetButton.addEventListener('click', function() {
    pageSelect.selectedIndex = 0; // Reset dropdown
    messageElement.textContent = ''; // Clear message
});

// Go to homepage when the 'Home' button is clicked
homeButton.addEventListener('click', function() {
    window.location.href = 'http://localhost/myCareer/front-end/page/main.html'; // Replace with your homepage URL
});
