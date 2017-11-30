function reverseArray(array) {
    var newArr = [];

    for (var i = 0; i < array.length; i++) {
        newArr.unshift(array[i]);
    }

    return newArr;
}

function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }

    return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);