// Day 1: Basic setup and initialization
console.log('Counting App - Version 0.1');

// Initialize counter variable
let count = 0;

// Get the counter element from HTML
const counterElement = document.getElementById('counterValue');

// Display initial count
counterElement.textContent = count;

// Welcome message
console.log('App is ready! Counter started at 0');

// Future functions will go here:
// - increment()
// - decrement() 
// - reset()
// - updateDisplay()

// For now, just confirm JavaScript is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and ready!');
});
