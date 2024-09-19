let firstNum;
let operator;
let lastNum;

let calculate = document.querySelector('#equal')
let answer = document.querySelector('.answer')

let operatorBtn = Array.from(document.querySelectorAll('.operator'))
let buttons = Array.from(document.querySelectorAll('.button'));
let digit = Array.from(document.querySelectorAll('.digit'));

let screenDisplay = document.querySelector('.screenDisplay');

// visual feedback for buttons
let isEnteringSecondNum = false;

function addButtonFeedback(buttons) {
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => button.style.backgroundColor = 'black');
        button.addEventListener('mouseup', () => button.style.backgroundColor = '');
    });
}
addButtonFeedback(digit);
addButtonFeedback(operatorBtn);

digit.forEach(button => {
    button.addEventListener('click', function() {
        const digit = button.textContent;

        if (digit === '.' && screenDisplay.textContent.includes('.')) return;

        if (screenDisplay.textContent.includes(operator) && !isEnteringSecondNum) {
            screenDisplay.textContent += digit;
            isEnteringSecondNum = true;
        } else {
            screenDisplay.textContent = parseFloat(screenDisplay.textContent) === 0 ? digit : screenDisplay.textContent + digit;
        }
    });
});

operatorBtn.forEach(button => {
    button.addEventListener('mousedown', function() {
        operator = button.getAttribute("data-message");
        firstNum = parseFloat(screenDisplay.textContent);
        screenDisplay.textContent += ' ' + operator + ' ';
    });
});

// CE and DEL button functionality
buttons.find(button => button.textContent === 'CE').addEventListener('click', function() {
    screenDisplay.textContent = '0';
    answer.textContent = '';
});
buttons.find(button => button.textContent === 'DEL').addEventListener('click', function() {
    let currentDisplay = screenDisplay.textContent;
    screenDisplay.textContent = currentDisplay.length > 1 ? currentDisplay.slice(0, -1) : '0';
});

// Handle the negation (±) button functionality
document.querySelector('#neg').addEventListener('click', function() {
    let displayContent = screenDisplay.textContent;

    if (isEnteringSecondNum) {
        let secondNum = displayContent.split(operator)[1].trim();
        if (secondNum.startsWith('-')) {
            screenDisplay.textContent = displayContent.replace(' -' + secondNum.slice(1), ' ' + secondNum.slice(1));
        } else {
            screenDisplay.textContent = displayContent.replace(secondNum, '-' + secondNum);
        }
    } else {
        if (displayContent.startsWith('-')) {
            screenDisplay.textContent = displayContent.slice(1);  // Remove the negative sign
        } else {
            screenDisplay.textContent = '-' + displayContent;  // Add the negative sign
        }
    }
});
// operator button functionality
function addition(x, y) {
    return x + y;
};
function subtraction(x, y) {
    return x - y;
};
function multiplication(x, y) {
    return x * y;
};
function division(x, y) {
    if (y === 0 || x === 0) {
        answer.style.textAlign = 'center'
        answer.textContent = 'UNACCEPTABLE CONDITIONS!'
    } else {
        return x / y;
    }
};

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            result = addition(num1, num2);
            break;
        case '-':
            result = subtraction(num1, num2);
            break;
        case '*':
            result = multiplication(num1, num2);
            break;
        case '/':
            result = division(num1, num2);
            break;
    }
    answer.textContent = result;
};

calculate.addEventListener('click', function() {
    const secondNum = parseFloat(screenDisplay.textContent.split(operator)[1]);
    operate(firstNum, operator, secondNum);
});

