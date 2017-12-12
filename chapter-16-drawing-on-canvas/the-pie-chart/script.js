var results = [{
        name: "Satisfied",
        count: 1043,
        color: "lightblue"
    },
    {
        name: "Neutral",
        count: 563,
        color: "lightgreen"
    },
    {
        name: "Unsatisfied",
        count: 510,
        color: "pink"
    },
    {
        name: "No comment",
        count: 175,
        color: "silver"
    }
];

var cx = document.querySelector("canvas").getContext("2d");
var total = results.reduce(function (sum, choice) {
    return sum + choice.count;
}, 0);

var currentAngle = -0.5 * Math.PI;
var centerX = 300,
    centerY = 150;

results.forEach(function (result) {
    var sliceAngle = (result.count / total) * 2 * Math.PI;
    var text = result.name;
    console.log(text);

    var middleAngle = currentAngle + 0.5 * sliceAngle;
    var textX = Math.cos(middleAngle) * 120 + centerX;
    var textY = Math.sin(middleAngle) * 120 + centerY;
    cx.fillStyle = result.color;
    if (Math.cos(sliceAngle) < 0)
        cx.textAlign = 'left';
    else
        cx.textAlign = 'right';

    cx.textBaseline = 'middle';

    cx.fillText(text, textX, textY);

    cx.beginPath();
    cx.arc(centerX, centerY, 100,
        currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    cx.lineTo(centerX, centerY);
    cx.fill();
});