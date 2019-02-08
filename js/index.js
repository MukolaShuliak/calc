const link = document.querySelector('a');

const display = document.querySelector('.calculator input[name=display]');


document.querySelectorAll('.digits button, .opers button')
    .forEach(btn => btn.addEventListener('click', digitsOperPressed));

function digitsOperPressed(e) {
    display.value += e.target.innerText;
}

document.querySelector('.result')
    .addEventListener('click', function() {
        display.value = eval(display.value);
    });

document.querySelector('.clear')
    .addEventListener('click', function() {
        display.value = '';

    });


