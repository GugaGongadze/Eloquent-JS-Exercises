function printChessBoard() {
    const SIZE = 8;
    var board = "";

    for (var i = 0; i < SIZE; i++) {
        for (var b = 0; b < SIZE; b++) {
            if ((i + b) % 2 == 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
        board += "\n";
    }

    console.log(board);
}

printChessBoard()