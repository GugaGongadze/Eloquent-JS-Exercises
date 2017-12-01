var ancestry = JSON.parse(require('./ancestry'));

function average(array) {
    function plus(a, b) {
        return a + b;
    }
    return array.reduce(plus) / array.length;
}

function groupBy(array, f) {
    var groups = {};
    array.forEach(function (person) {
        var groupName = f(person);
        if (groupName in groups) {
            groups[groupName].push(person);
        } else {
            groups[groupName] = [person];
        }
    });
    return groups;
}

var centuries = groupBy(ancestry, function (person) {
    return Math.ceil(person.died / 100);
});

for (var century in centuries) {
    var ages = centuries[century].map(function (person) {
        return person.died - person.born;
    });
    console.log(century + ": " + average(ages));
}