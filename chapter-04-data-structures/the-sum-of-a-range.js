function range(start, end, step) {
    var array = [];

    if (start < end) {
        if (step === undefined) {
            step = 1;
        }

        for (var i = start; i <= end; i += step) {
            array.push(i);
        }
    } else if (start > end) {
        if (step === undefined) {
            step = -1;
        }

        for (var i = start; i >= end; i += step ) {
            array.push(i);
        }
    } else {
        return 'Please enter legit range of numbers';
    }

    return array;
}

function sum(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

console.log(range(1, 10));

console.log(range(5, 2, -1));

console.log(sum(range(1, 10)));