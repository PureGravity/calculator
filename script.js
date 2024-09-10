let firstNum;
let operator;
let lastNum;

let buttons = Array.from(document.querySelectorAll('.button'));
let digit = Array.from(document.querySelectorAll('.digit'));
let screenDisplay = document.querySelector('.screenDisplay');

// visual feedback for buttons
digit.forEach(button => {
    button.addEventListener('mousedown', function() {
        button.style.backgroundColor = 'black';
    });

    button.addEventListener('mouseup', function() {
        button.style.backgroundColor = '';
    });

    button.addEventListener('click', function() {
        const digit = parseInt(button.textContent);
        screenDisplay.textContent = parseInt(screenDisplay.textContent) === 0 ? digit : parseInt(screenDisplay.textContent) * 10 + digit;
    });
});

buttons.forEach(button => {
    button.addEventListener('mousedown', function() {
        button.style.backgroundColor = 'black';
    });

    button.addEventListener('mouseup', function() {
        button.style.backgroundColor = '';
    });
});

// CE and DEL button functionality
buttons.find(button => button.textContent === 'CE').addEventListener('click', function() {
    screenDisplay.textContent = '0';
});

buttons.find(button => button.textContent === 'DEL').addEventListener('click', function() {
    let currentDisplay = screenDisplay.textContent;
    
    screenDisplay.textContent = currentDisplay.length > 1 ? currentDisplay.slice(0, -1) : '0';
});

// operator button functionality
