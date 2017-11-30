var ancestry = JSON.parse(require('./ancestry'));

function average(array) {
    function plus(a, b) {
        return a + b;
    }
    return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function (person) {
    byName[person.name] = person;
});

// Filter those out whose mother information is missing
var hasKnownMother = ancestry.filter(function (person) {
    return byName[person.mother] != null;
});

// Map over the objects and return birth year differences
// between mothers and their children
var ageDifferences = hasKnownMother.map(function (person) {
    return person.born - byName[person.mother].born;
})

var ageDifference = average(ageDifferences);

console.log(ageDifference)