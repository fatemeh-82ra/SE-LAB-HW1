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
            try {
                // A more robust way to check for division by zero
                if (display.value.includes('/0')) {
                    throw new Error("Division by zero");
                }
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        } else {
            display.value += buttonText;
        }
    });
});
