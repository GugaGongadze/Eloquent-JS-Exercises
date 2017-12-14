function all(promises) {
    return new Promise(function (success, fail) {
        var results = [];
        var left = promises.length;

        if (promises.length == 0)
            success(results);

        promises.forEach(function (promise, position) {
            promise.then(function (res) {
                results[position] = res;
                left -= 1;
                if (left == 0)
                    success(results);
            }, function (err) {
                fail(err);
            });
        });

    });
}

// Test code.
all([]).then(function (array) {
    console.log('This should be []:', array);
});

function soon(val) {
    return new Promise(function (success) {
        setTimeout(function () {
                success(val);
            },
            Math.random * 500);
    });
}
all([soon(1), soon(2), soon(3)]).then(function (array) {
    console.log('This should be [1, 2, 3]:', array);
});

function fail() {
    return new Promise(function (success, fail) {
        fail(new Error('Boom!'));
    });
}
all([soon(1), fail(), soon(3)]).then(function (array) {
    console.log('We should not get here');
}, function (error) {
    if (error.message != 'boom')
        console.log('Unexpected failure:', error);
});