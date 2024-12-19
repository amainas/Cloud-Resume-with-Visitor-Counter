// Get the element to display the visit count
const visitCountElement = document.getElementById('visit-count');

// Retrieve the current visit count from localStorage
let visitCount = localStorage.getItem('visitCount');

// Check if the visit count exists in localStorage
if (!visitCount) {
  // If not, initialize it to 1
  visitCount = 1;
} else {
  // If it exists, increment the count
  visitCount = parseInt(visitCount) + 1;
}

// Update the visit count in localStorage
localStorage.setItem('visitCount', visitCount);

// Display the visit count on the webpage
visitCountElement.textContent = visitCount;

// Reset Button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
  localStorage.removeItem('visitCount');
  visitCountElement.textContent = 0;
});