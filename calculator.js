const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText >= '0' && buttonText <= '9' || buttonText === '.') {
            display.value += buttonText;
        }

        if (buttonText === 'AC') {
            display.value = '';
        }
    });
});