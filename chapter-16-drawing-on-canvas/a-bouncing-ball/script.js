var cx = document.querySelector('canvas').getContext('2d');

var lastTime = null;

function frame(time) {
    if (lastTime != null)
        updateAnimation(Math.min(100, time - lastTime) / 1000);
    lastTime = time;
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

var ballX = 100;
var ballY = 100;
var speedX = 100;
var speedY = 60;

function updateAnimation(step) {
    cx.clearRect(0, 0, 400, 400);
    cx.fillStyle = 'purple';
    cx.strokeStyle
    cx.strokeRect(50, 50, 350, 350);

    ballX += step * speedX;
    ballY += step * speedY;

    if (ballX < 100 || ballX > 350)
        speedX = -speedX;
    if (ballY < 100 || ballY > 350)
        speedY = -speedY;
    cx.beginPath();
    cx.arc(ballX, ballY, 50, 0, 7);
    cx.fill();
}