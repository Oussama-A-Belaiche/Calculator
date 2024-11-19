let currentValue = ''; // Store the current value on screen
let operator = '';      // Store the current operator
let previousValue = ''; // Store the previous value before operator

// Function to handle input when a number or operator is pressed
function setValue(value) {
    if (value === '.' && currentValue.includes('.')) {
        return; // Prevent multiple decimals
    }
    currentValue += value;
    updateScreen();
}

// Function to handle operator input
function setOperator(op) {
    if (currentValue === '') return; // Do nothing if no number is entered
    if (previousValue !== '') {
        calculate();
    }
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

// Function to update the display on screen
function updateScreen() {
    document.querySelector('#screen').value = currentValue;
}

// Function to calculate the result
function result() {
    if (previousValue === '' || currentValue === '') return; // Ensure both values are set
    let calculation;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    switch (operator) {
        case '+':
            calculation = prev + current;
            break;
        case '-':
            calculation = prev - current;
            break;
        case '*':
            calculation = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            calculation = prev / current;
            break;
        default:
            return;
    }

    currentValue = calculation.toString();
    operator = '';
    previousValue = '';
    updateScreen();
}

// Function to clear the current screen and reset all values
function reset() {
    currentValue = '';
    operator = '';
    previousValue = '';
    updateScreen();
}

// Function to delete the last entered value
function deletion() {
    currentValue = currentValue.slice(0, -1);
    updateScreen();
}
