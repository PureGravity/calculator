let one

let firstNum;
let operator;
let lastNum;

let buttons = Array.from(document.querySelectorAll('.button'));
let digit = Array.from(document.querySelectorAll('.digit'));
let equals = document.querySelector('.equalSign');
let screenDisplay = document.querySelector('.screenDisplay');

digit.forEach(function(button) {
    button.addEventListener('mousedown', function() {
        button.style.backgroundColor = 'black';
    });

    button.addEventListener('mouseup', function() {
        button.style.backgroundColor = '';
    });
});

buttons.forEach(function(button) {
    button.addEventListener('mousedown', function() {
        button.style.backgroundColor = 'black';
    });

    button.addEventListener('mouseup', function() {
        button.style.backgroundColor = '';
    });
});

equals.addEventListener('mousedown', function(){
    equals.style.backgroundColor = 'black';
});
equals.addEventListener('mouseup', function(){
    equals.style.backgroundColor = '';
});

digit.forEach(button => {
    button.addEventListener('click', function() {
        const digit = parseInt(button.textContent);
        screenDisplay.textContent = parseInt(screenDisplay.textContent) === 0 ? digit : parseInt(screenDisplay.textContent) * 10 + digit;
    });
});

buttons[5].addEventListener('click', function() {
    screenDisplay.textContent = 0
})