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
        (range1.low <= range2.low && range1.high >= range2.high) ||
        (range2.low <= range1.low && range2.high >= range1.high)
    ) {
        overlappingCount++;
    }

    if (last) {
        console.log(overlappingCount);
    }
});
