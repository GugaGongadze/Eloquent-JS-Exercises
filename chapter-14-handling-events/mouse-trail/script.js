var dots = [];
var currentDot = 0;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var x = 0; x < 6; x++) {
        color += [Math.floor(Math.random() * 16)];
    }
    return color;
}

for (var i = 0; i < 20; i++) {
    var dot = document.createElement('div');
    dot.className = 'trail';
    document.body.appendChild(dot);
    dots.push(dot);
}

addEventListener('mousemove', function (event) {
    var point = dots[currentDot];
    point.style.left = (event.pageX - 4) + 'px';
    point.style.top = (event.pageY - 4) + 'px';
    currentDot = (currentDot + 1) % dots.length;
    point.style.background = getRandomColor();
});