// Get elements
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const stepSizeSelect = document.getElementById('stepSizeSelect');
const customStep = document.getElementById('customStep');

// Variables
let count = 0;
let stepSize = 1;

function updateDisplay() {
    counterValue.textContent = count;
    updateButtonState();
    updateColor();
}

function updateButtonState() {
    decrementBtn.disabled = (count <= -1000000000000);
    incrementBtn.disabled = (count >=  1000000000000);
}

function updateColor() {
    counterValue.classList.remove('positive', 'negative', 'zero');
    
    if (count > 0) {
        counterValue.classList.add('positive');
    } else if (count < 0) {
        counterValue.classList.add('negative');
    } else {
        counterValue.classList.add('zero');
    }
}

function increment() {
    count = count + stepSize;
    updateDisplay();
}

function decrement() {
    count = count - stepSize;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

// Step size handling
stepSizeSelect.addEventListener('change', function() {
    if (this.value === 'custom') {
        customStep.style.display = 'inline-block';
        stepSize = parseInt(customStep.value) || 1;
    } else {
        customStep.style.display = 'none';
        stepSize = parseInt(this.value);
    }
});

customStep.addEventListener('input', function() {
    stepSize = parseInt(this.value) || 1;
});

// Keyboard support
function handleKeyboard(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
    
    if (event.key === '+' || event.key === 'ArrowUp') {
        increment();
    } else if (event.key === '-' || event.key === 'ArrowDown') {
        decrement();
    } else if (event.key === 'r' || event.key === 'R') {
        reset();
    }
}

// Event listeners
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);
document.addEventListener('keydown', handleKeyboard);

// Initialize
updateDisplay();