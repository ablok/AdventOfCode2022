import lineReader from "line-reader";

let overlappingCount = 0;
lineReader.eachLine("./day4/input.txt", (line, last) => {
    const [range1, range2] = line.split(",").map((range) => {
        const [low, high] = range
            .split("-")
            .map((value) => Number.parseInt(value));
        return { low, high };
    });

    if (
        between(range1.low, range2.low, range2.high) ||
        between(range1.high, range2.low, range2.high) ||
        between(range2.low, range1.low, range1.high) ||
        between(range2.high, range1.low, range1.high)
    ) {
        overlappingCount++;
    }

    if (last) {
        console.log(overlappingCount);
    }
});

function between(number: number, min: number, max: number) {
    return number >= min && number <= max;
}
