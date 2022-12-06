import lineReader from "line-reader";
const badges: number[] = [];
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let counter = 0;
let lines: string[] = [];
lineReader.eachLine("./day3/input.txt", (line, last) => {
    lines.push(line);
    if (counter === 2) {
        lines[0].split("").find((letter) => {
            if (
                lines[1].indexOf(letter) >= 0 &&
                lines[2].indexOf(letter) >= 0
            ) {
                const letterValue = letters.indexOf(letter) + 1;
                badges.push(letterValue);
                return true;
            }
        });
        counter = 0;
        lines = [];
    } else {
        counter++;
    }

    if (last) {
        console.log(badges);
        const total = badges.reduce((previous, current) => previous + current);
        console.log(total);
    }
});
