// let buttons = Array.from(document.querySelectorAll('button'))

// buttons.forEach(function(button) {
//     button.addEventListener('click', function(){
//         button.style.backgroundColor = 'black';
//     })
// })

let buttons = document.querySelectorAll('.button');

buttons.forEach(function(button) {
    button.addEventListener('mousedown', function() {
        button.style.backgroundColor = 'black';
    });

    button.addEventListener('mouseup', function() {
        button.style.backgroundColor = '';
    });
});