// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Example: Show an alert when the "Earthquake Map" card is clicked
    const earthquakeCard = document.querySelector('.card');
    
    if (earthquakeCard) {
        earthquakeCard.addEventListener('click', function () {
            alert('You clicked on the Earthquake Map card!');
        });
    }

    // Example: Handle clicks on the "Website" link inside the Earthquake Map card
    const websiteLink = document.querySelector('.card .website');
    
    if (websiteLink) {
        websiteLink.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent the card click event from firing
            alert('Navigating to the website!');
        });
    }

    // Example: Handle clicks on the "GitHub" link inside the Earthquake Map card
    const githubLink = document.querySelector('.card .github');
    
    if (githubLink) {
        githubLink.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent the card click event from firing
            alert('Navigating to the GitHub repository!');
        });
    }
});

