import lineReader from "line-reader";

let myScore = 0;

lineReader.eachLine("./day2/input.txt", (line, last) => {
    const [opponentMove, myMove] = line.split(" ").map((move) => {
        switch (move.toUpperCase()) {
            case "A":
            case "X":
                return 1;
            case "B":
            case "Y":
                return 2;
            case "C":
            case "Z":
                return 3;
            default:
                throw new Error(`Unknown move! '${move}'`);
        }
    });

    // Add score for move type
    myScore = myScore + myMove;

    // Add score for equal
    if (opponentMove === myMove) {
        myScore = myScore + 3;
    }

    // Add score for win
    if (
        (opponentMove === 1 && myMove === 2) ||
        (opponentMove === 2 && myMove === 3) ||
        (opponentMove === 3 && myMove === 1)
    ) {
        myScore = myScore + 6;
    }

    if(last) {
        console.log(myScore);
    }
});

