var height = 15;
var width = 30;

var checks = [];
for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
        var el = document.createElement('input');
        el.setAttribute('type', 'checkbox');
        document.querySelector('#grid').appendChild(el);
        checks.push(el);
    }
    document.querySelector('#grid').appendChild(document.createElement('br'));
}

function randomChecks() {
    var res = [];

    for (var i = 0; i < width * height; i++) {
        res.push(Math.random() < 0.3);
    }

    return res;
}

function checksFromGrid(grid) {
    return grid.forEach(function (value, i) {
        checks[i].checked = value;
    });
}

function gridFromChecks() {
    return checks.map(function (el) {
        return el.checked;
    });
}

checksFromGrid(randomChecks());

function neighbourCount(grid, x, y) {
    var counter = 0;

    for (var y1 = Math.max(0, y - 1); y1 <= Math.min(height - 1, y + 1); y1++) {
        for (var x1 = Math.max(0, x - 1); x1 <= Math.min(width - 1, x + 1); x1++) {
            if ((x != x1 || y != y1) && grid[x1 + y1 * width]) {
                counter++;
            }
        }
    }
    return counter;
}

function nextGeneration(grid) {
    var newGrid = new Array(width * height);

    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var neighbours = neighbourCount(grid, x, y);
            var offset = x + y * width;
            if (neighbours < 2 || neighbours > 3)
                newGrid[offset] = false;
            else if (neighbours == 2)
                newGrid[offset] = grid[offset];
            else
                newGrid[offset] = true;
        }
    }

    return newGrid;
}

document.querySelector('button').addEventListener('click', function () {
    checksFromGrid(nextGeneration(gridFromChecks()));
});