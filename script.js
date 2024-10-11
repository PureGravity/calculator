let firstNum = null;
let operator = null;
let calculationDone = false;

const calculateBtn = document.querySelector('#equal');
const answerDisplay = document.querySelector('.answer');
const operatorButtons = Array.from(document.querySelectorAll('.operator'));
const numberButtons = Array.from(document.querySelectorAll('.digit'));
const screenDisplay = document.querySelector('.screenDisplay');

function resetCalculator() {
    firstNum = null;
    operator = null;
    screenDisplay.textContent = '0';
    answerDisplay.textContent = '';
    calculationDone = false;
}

// Digit Button clicks
numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        const digit = button.textContent;

        if (calculationDone) {
            resetCalculator();
        }

        if (screenDisplay.textContent.length >= 10) return;

        if (screenDisplay.textContent === '0') {
            screenDisplay.textContent = digit;
        } else {
            screenDisplay.textContent += digit;
        }
    });
});

// Operator button clicks
operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (calculationDone) {
            resetCalculator();
        }

        if (operator) return;

        operator = button.getAttribute("data-message");
        firstNum = parseFloat(screenDisplay.textContent);
        screenDisplay.textContent += ' ' + operator + ' ';
    });
});

// Calculate result
calculateBtn.addEventListener('click', function() {
    const secondNum = parseFloat(screenDisplay.textContent.split(operator)[1]?.trim());
    if (operator && !isNaN(secondNum)) {
        let result = operate(firstNum, operator, secondNum);
        answerDisplay.textContent = result;
        calculationDone = true;
    }
});

// Basic operations
function operate(num1, operator, num2) {
    let result;
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) return "Unacceptable!";
            return num1 / num2;
    }
}

// Clear and delete buttons functionality
document.querySelector('#clear').addEventListener('click', resetCalculator);
document.querySelector('#delete').addEventListener('click', function() {
    let currentDisplay = screenDisplay.textContent;
    screenDisplay.textContent = currentDisplay.length > 1 ? currentDisplay.slice(0, -1) : '0';
});