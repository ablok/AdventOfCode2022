import lineReader from "line-reader";

let elfNr = 1;
let elfTotal = 0;
let max = 0;
lineReader.eachLine("./day1/input.txt", (line, last) => {
    if (!line) {
        if (elfTotal > max) {
            max = elfTotal;
        }
        elfNr++;
        elfTotal = 0;
    } else {
        elfTotal = elfTotal + Number.parseInt(line);
    }
    if (last) {
        console.log(max);
    }
});
