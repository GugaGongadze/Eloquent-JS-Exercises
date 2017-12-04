var cat = document.querySelector("#cat");
var hat = document.querySelector("#hat");


// hat circle around the cat
cat.style.top = window.innerHeight / 2 + 'px';

var angle = 0, lastTime = null;
function animate(time) {
    if (lastTime != null)
        angle += (time - lastTime) * 0.001;
    lastTime = time;
    hat.style.top = window.innerHeight / 2 + (Math.sin(angle) * 200) + "px";
    hat.style.left = window.innerWidth / 2 + (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// he cat and his hat orbit at opposite sides of the ellipse
var angle = 0, hatAngle = 0, lastTime = null;
function animate(time) {
    if (lastTime != null)
        angle += (time - lastTime) * 0.001;
    lastTime = time;
    hatAngle = angle + Math.PI;
    hat.style.top = window.innerHeight / 2 + (Math.sin(hatAngle) * 200) + "px";
    hat.style.left = window.innerWidth / 2 + (Math.cos(hatAngle) * 200) + "px";
    cat.style.top = window.innerHeight / 2 + (Math.sin(angle) * 200) + "px";
    cat.style.left = window.innerWidth / 2 + (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);