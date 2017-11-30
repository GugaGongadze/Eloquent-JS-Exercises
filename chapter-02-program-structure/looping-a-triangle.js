function printHashes(number) {
    var result = "#";
    for (var i = 0; i < number; i++) {
        console.log(result);
        result = result + "#";
    }
}

printHashes(7);