function asTabs(node) {
    Array.prototype.forEach.call(node.children, function (element) {
        var button = document.createElement('button');
        button.innerHTML = element.getAttribute('data-tabname');
        document.body.appendChild(button);
        if (element != node.children[0])
            element.style.display = 'none';

        button.addEventListener('click', function () {
            Array.prototype.forEach.call(node.children, function (element) {
                element.style.display = 'none';
            });
            element.style.display = 'block';

        });
    });

    var buttons = document.querySelectorAll('button');
    for (var i = buttons.length - 1; i >= 0; i--) {
        document.body.insertBefore(buttons[i], document.body.firstChild);
    }
}

asTabs(document.querySelector('#wrapper'));