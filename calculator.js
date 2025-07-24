const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'AC') {
            display.value = '';
        } else if (buttonText === '⌫') {
            display.value = display.value.slice(0, -1);
        } else if (buttonText === '±') {
            if (display.value) {
                display.value = parseFloat(display.value) * -1;
            }
        } else if (buttonText === '=') {
            display.value = eval(display.value);
        } else {
            display.value += buttonText;
        }
    });
});