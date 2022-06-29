const buttonWithBorder = document.querySelectorAll('.button_with-border');

buttonWithBorder.forEach((button) => {
    button.outerHTML = '<div class="button">' + button.outerHTML + '</div>';
});
