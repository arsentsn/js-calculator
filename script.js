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
