import lineReader from "line-reader";

let elfTotal = 0;
const totals: number[] = [];
lineReader.eachLine("./day1/input.txt", (line, last) => {
    if (!line) {
        totals.push(elfTotal);
        elfTotal = 0;
    } else {
        elfTotal = elfTotal + Number.parseInt(line);
    }
    if (last) {
        totals.sort((a, b) => b - a);
        console.log(totals[0] + totals[1] + totals[2]);
    }
});
