var field = document.querySelector('input');

field.addEventListener('keydown', function(event) {
    if (event.which === 81 || event.which === 87 || event.which === 88)
        event.preventDefault();
});