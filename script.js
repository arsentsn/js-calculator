/* clicking animation */
document.querySelectorAll('.button-layout button').forEach(button => {
  button.addEventListener('mousedown', () => {
    button.classList.add('clicked');

    // global mouseup listener (to keep the button clicked even if mouse is outisde of it)
    const removeClicked = () => {
      button.classList.remove('clicked');
      document.removeEventListener('mouseup', removeClicked); // Clean up the listener
    };

    document.addEventListener('mouseup', removeClicked);
  });
});

/* button press logic */
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let temp = 0
let clear = false
let operator

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    const action = button.getAttribute('data-action');
    console.log(value)

    if (action === 'clear') {
      display.innerHTML = '0'; // Reset the display
      let operator
    } else if (action === 'backspace') {
      display.innerHTML = Math.floor(display.innerHTML / 10);
    } else if (action === 'add') {
      temp = display.innerHTML
      operator = '+'
      clear = true
    } else if (action === 'subtract') {
      temp = display.innerHTML
      operator = '-'
      clear = true
    } else if (action === 'calculate') {
      if (operator === '+') {
        display.innerHTML = Number(temp) + Number(display.innerHTML);
      } else if (operator === '-') {
        display.innerHTML = Number(temp) - Number(display.innerHTML);
      } else if (operator === '*') {
        display.innerHTML = Number(temp) * Number(display.innerHTML);
      } else if (operator === '/') {
        display.innerHTML = Number(temp) / Number(display.innerHTML);
      } else if (operator === '%') {
        display.innerHTML = Number(temp) / 100;
      } else {
        console.error("Unknown operator:", operator);
        display.innerHTML = display.innerHTML; // Keep the current value if operator is invalid
      }

    } else if (action === 'multiply') {
      temp = display.innerHTML
      operator = '*'
      clear = true
    } else if (action === 'divide') {
      temp = display.innerHTML
      operator = '/'
      clear = true
    } else if (action === 'percent') {
      temp = display.innerHTML
      operator = '%'
      clear = true
    } else if (action === 'dot') {

    } else if (action === 'party') {
      confetti()
    } else {
      if (clear) {
        display.innerHTML = 0
        clear = false
      }
      if (display.innerHTML === '0') {
        display.innerHTML = value; // 0
      } else {
        display.innerHTML += value; // append number
      }

    }
  });
});