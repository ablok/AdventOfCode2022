import lineReader from "line-reader";

let myScore = 0;
const enum Move {
    Rock = 1,
    Paper = 2,
    Scissors = 3,
}

const enum Outcome {
    Win = 6,
    Lose = 0,
    Draw = 3,
}

lineReader.eachLine("./day2/input.txt", (line, last) => {
    const [opponentMove, outcome] = line.split(" ").map((move) => {
        switch (move.toUpperCase()) {
            case "A":
                return Move.Rock;
            case "X":
                return Outcome.Lose;
            case "B":
                return Move.Paper;
            case "Y":
                return Outcome.Draw;
            case "C":
                return Move.Scissors;
            case "Z":
                return Outcome.Win;
            default:
                throw new Error(`Unknown move! '${move}'`);
        }
    });

    if (outcome === Outcome.Win) {
        myScore = myScore + 6;
        switch (opponentMove) {
            case Move.Rock:
                myScore = myScore + Move.Paper;
                break;
            case Move.Paper:
                myScore = myScore + Move.Scissors;
                break;
            case Move.Scissors:
                myScore = myScore + Move.Rock;
                break;
        }
    }

    if (outcome === Outcome.Lose) {
        switch (opponentMove) {
            case Move.Rock:
                myScore = myScore + Move.Scissors;
                break;
            case Move.Paper:
                myScore = myScore + Move.Rock;
                break;
            case Move.Scissors:
                myScore = myScore + Move.Paper;
                break;
        }
    }

    if (outcome === Outcome.Draw) {
        myScore = myScore + 3;
        myScore = myScore + opponentMove;
    }

    if (last) {
        console.log(myScore);
    }
});
