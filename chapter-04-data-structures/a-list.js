function prepend(number, list) {
    return {
        value: number,
        rest: list
    };
}

function nth(list, number) {
    if (number == 0) {
        return list.value;
    } else if (list.rest == null) {
        return undefined;
    } else {
        return nth(list.rest, number - 1);
    }
}

console.log(nth(arrayToList([10, 20, 30]), 1));

function arrayToList(array) {
    var list = null;

    for (var i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        };
    }
    return list;
}

function listToArray(list) {
    var array = [];
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}