// Day 3: Working increment button
console.log('Counting App - Version 1.0');

// Initialize counter variable
let count = 0;

// Get DOM elements
const counterElement = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');

// Function to update the display
function updateDisplay() {
    counterElement.textContent = count;
}

// Function to add animation
function animateCounter() {
    counterElement.classList.add('increment-animation');
    setTimeout(() => {
        counterElement.classList.remove('increment-animation');
    }, 200);
}

// Increment function
function increment() {
    count++;
    updateDisplay();
    animateCounter();
    console.log('Count increased to:', count);
}

// Add event listener to increment button
incrementBtn.addEventListener('click', increment);

// Keyboard support (press + key to increment)
document.addEventListener('keydown', function(event) {
    if (event.key === '+' || event.key === '=') {
        event.preventDefault(); // Prevent default browser behavior
        increment();
    }
});

// Initialize display
updateDisplay();

// Welcome message
document.addEventListener('DOMContentLoaded', function() {
    console.log('✨ App ready! Click the increment button or press + key');
});

// Placeholder functions for future days
window.decrement = function() {
    console.log('Decrement function - Coming soon');
};

window.reset = function() {
    console.log('Reset function - Coming soon');
};
