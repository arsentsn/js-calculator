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

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    const action = button.getAttribute('data-action');
    console.log(value)

    if (action === 'clear') {
      display.textContent = '0'; // Reset the display
    } else {
      if (display.textContent === '0') {
        display.textContent = value; // Replace the initial "0"
      } else {
        display.textContent += value; // Append the new character
      }
    }
  });
});