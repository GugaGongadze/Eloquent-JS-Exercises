function countBs(string) {
    var result = 0;

    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i).toLowerCase() == 'b') {
            result++;
        }
    }
    return result;
}

function countChar(string, char) {
    var result = 0;

    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i).toLowerCase() == char) {
            result++;
        }
    }
    return result;
}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));