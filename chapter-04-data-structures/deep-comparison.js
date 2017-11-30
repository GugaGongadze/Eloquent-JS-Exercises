function deepEqual(a, b) {
    if (a === b) {
        return true;
    }

    if (typeof a != typeof b) {
        return false;
    } 

    if (typeof a != "object" || a == null || typeof b != "object" || b == null) {
        return false;
    }

    var propertyA = 0;
    var propertyB = 0;

    for (var property in a) {
        propertyA++;
    }

    for (property in b) {
        propertyB++;
        if (!(property in a) || !deepEqual(a[property], b[property])) {
            return false;
        }
    }
    if (propertyA == propertyB) {
        return true;
    }
}

var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));